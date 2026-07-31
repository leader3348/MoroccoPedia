require('dotenv').config();

const express      = require('express');
const cors         = require('cors');
const http         = require('http');
const { Server }   = require('socket.io');
const connectDB    = require('./config/db');

// Optional packages — server starts even if not installed
let helmet, rateLimit, compression, morgan, cookieParser;
try { helmet       = require('helmet');             } catch {}
try { rateLimit    = require('express-rate-limit'); } catch {}
try { compression  = require('compression');        } catch {}
try { morgan       = require('morgan');              } catch {}
try { cookieParser = require('cookie-parser');      } catch {}

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true },
});
app.set('io', io);
connectDB();

// Middleware
if (helmet)       app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
if (compression)  app.use(compression());
if (morgan)       app.use(morgan('dev'));
if (cookieParser) app.use(cookieParser());

if (rateLimit) {
  app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));
}

app.use(cors({
  origin: [process.env.CLIENT_URL || 'http://localhost:3000', 'https://moroccoPedia.app'],
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes — graceful: server starts even if a route file is missing
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
  } catch (err) {
    console.warn(`[WARN] ${path} not loaded: ${err.message}`);
    app.use(path, (req, res) => res.status(503).json({ error: `${path} not available` }));
  }
});

app.get('/api/health', (req, res) => res.json({
  status: 'ok', version: '3.0.0',
  timestamp: new Date().toISOString(),
  uptime: Math.floor(process.uptime()),
}));

app.use('*', (req, res) => res.status(404).json({ error: `${req.originalUrl} not found` }));
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// Socket.IO
try {
  const jwt  = require('jsonwebtoken');
  const User = require('./models/User');
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error('No token'));
      const d = jwt.verify(token, process.env.JWT_SECRET || 'moroccoPedia_dev_secret_2025');
      socket.userId = d.id;
      next();
    } catch { next(new Error('Invalid token')); }
  });
  io.on('connection', (socket) => {
    if (socket.userId) socket.join(`user:${socket.userId}`);
    User.findByIdAndUpdate(socket.userId, { lastSeen: new Date() }).catch(() => {});
    socket.on('disconnect', () => {});
  });
} catch {
  io.on('connection', (socket) => { socket.on('disconnect', () => {}); });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\nMoroccoPedia API v3 → http://localhost:${PORT}/api/health\n`);
});
module.exports = { app, server, io };
