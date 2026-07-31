const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'moroccoPedia_dev_secret_2025';

// ── Generate JWT token ────────────────────────────────────────
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '30d' });
};

// ── Protect route — requires valid JWT ───────────────────────
const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }
    // Check cookie
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authenticated. Please log in.' });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(401).json({ error: 'User no longer exists.' });
    if (user.isBanned) return res.status(403).json({ error: 'Account suspended.' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

// ── Optional auth — attaches user if token present ───────────
const optionalAuth = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization?.startsWith('Bearer ')) token = req.headers.authorization.split(' ')[1];
    else if (req.cookies?.token) token = req.cookies.token;

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decoded.id);
    }
  } catch {}
  next();
};

// ── Role guard ───────────────────────────────────────────────
const requireRole = (...roles) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated.' });
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: `Requires role: ${roles.join(' or ')}` });
  }
  next();
};

module.exports = { protect, optionalAuth, requireRole, generateToken };
