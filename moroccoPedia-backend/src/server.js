require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const crypto = require('crypto');

let helmet, rateLimit, compression, morgan, cookieParser;
try { helmet = require('helmet'); } catch {}
try { rateLimit = require('express-rate-limit'); } catch {}
try { compression = require('compression'); } catch {}
try { morgan = require('morgan'); } catch {}
try { cookieParser = require('cookie-parser'); } catch {}

// ── Production security checks ─────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('localhost')) {
    console.error('FATAL: MONGODB_URI must be a cloud URI in production'); process.exit(1);
  }
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32 || process.env.JWT_SECRET === 'moroccoPedia_dev_secret_2025') {
    console.error('FATAL: JWT_SECRET is weak or default. Use a strong secret.'); process.exit(1);
  }
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true },
  pingTimeout: 60000,
});
app.set('io', io);
connectDB();

// Middleware
if (helmet) app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
if (compression) app.use(compression());
if (morgan) app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
if (cookieParser) app.use(cookieParser());

// Rate limiting
if (rateLimit) {
  app.use('/api/', rateLimit({ windowMs: 15*60*1000, max: 200, standardHeaders: true, legacyHeaders: false }));
  app.use('/api/auth/login',    rateLimit({ windowMs: 15*60*1000, max: 10, message: { error: 'Too many login attempts.' } }));
  app.use('/api/auth/register', rateLimit({ windowMs: 60*60*1000, max: 5 }));
  app.use('/api/ai',            rateLimit({ windowMs: 60*1000,    max: 20 }));
}

// CORS
const ORIGINS = [process.env.CLIENT_URL || 'http://localhost:3000', 'http://localhost:3001', 'https://moroccoPedia.app', 'https://moroccoPedia.vercel.app'].filter(Boolean);
app.use(cors({
  origin: (origin, cb) => (!origin || ORIGINS.includes(origin)) ? cb(null, true) : cb(new Error(`CORS blocked: ${origin}`)),
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
}));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Request-ID', crypto.randomBytes(8).toString('hex'));
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
console.log('\n MoroccoPedia API v3.0.0 |', process.env.NODE_ENV || 'development');
[
  ['/api/auth',          './routes/auth'],
  ['/api/notifications', './routes/notifications'],
  ['/api/analytics',     './routes/analytics'],
  ['/api/dialect',       './routes/dialect'],
  ['/api/cities',        './routes/cities'],
  ['/api/community',     './routes/community'],
  ['/api/translate',     './routes/translate'],
  ['/api/search',        './routes/search'],
  ['/api/ai',            './routes/ai'],
].forEach(([path, file]) => {
  try {
    app.use(path, require(file));
    console.log(' v', path);
  } catch (err) {
    console.warn(' x', path, '-', err.message);
    app.use(path, (req, res) => res.status(503).json({ error: `${path} unavailable` }));
  }
});

app.get('/api/health', (req, res) => res.json({
  status: 'ok', version: '3.0.0',
  env: process.env.NODE_ENV || 'development',
  uptime: Math.floor(process.uptime()),
  timestamp: new Date().toISOString(),
}));

app.get('/ping', (req, res) => res.send('pong'));
app.use('*', (req, res) => res.status(404).json({ error: `${req.originalUrl} not found` }));
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.error(`[${status}]`, err.message);
  res.status(status).json({ error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message });
});

// Socket.IO
try {
  const jwt = require('jsonwebtoken');
  const User = require('./models/User');
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error('Auth required'));
      const d = jwt.verify(token, process.env.JWT_SECRET || 'moroccoPedia_dev_secret_2025');
      socket.userId = d.id;
      next();
    } catch { next(new Error('Invalid token')); }
  });
  io.on('connection', (socket) => {
    if (socket.userId) socket.join(`user:${socket.userId}`);
    User.findByIdAndUpdate(socket.userId, { lastSeen: new Date() }).catch(() => {});
    socket.on('join_room', r => { if (typeof r === 'string' && r.length < 50) socket.join(r); });
    socket.on('disconnect', () => {});
  });
} catch {
  io.on('connection', socket => { socket.on('disconnect', () => {}); });
}

// Start
const PORT = parseInt(process.env.PORT) || 5000;
server.listen(PORT, () => console.log(` → http://localhost:${PORT}/api/health\n`));

// Graceful shutdown
const shutdown = () => {
  server.close(async () => {
    try { await require('mongoose').connection.close(); } catch {}
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000);
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
process.on('uncaughtException', (err) => { console.error('Uncaught:', err.message); process.exit(1); });
process.on('unhandledRejection', (r) => { console.error('Unhandled:', r); });

module.exports = { app, server, io };
