const express = require('express');
const router  = express.Router();
const crypto  = require('crypto');
const { body, validationResult } = require('express-validator');
const User     = require('../models/User');
const Notification = require('../models/Notification');
const { generateToken, protect } = require('../middleware/auth');
let nodemailer;
try { nodemailer = require('nodemailer'); } catch (err) { nodemailer = null; }

const sendPasswordResetEmail = async (to, resetUrl) => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM || 'MoroccoPedia <no-reply@moroccopedia.app>';

  if (!nodemailer || !host || !user || !pass) {
    console.warn('Password reset email not sent: SMTP configuration is missing.');
    console.warn('Reset URL:', resetUrl);
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject: 'Reset your MoroccoPedia password',
      text: `Reset your password using the link below:\n${resetUrl}\n\nIf you did not request this, ignore this email.`,
      html: `
        <p>Hello,</p>
        <p>You requested a password reset for your MoroccoPedia account.</p>
        <p><a href="${resetUrl}" style="color:#c0390a;">Reset your password</a></p>
        <p>This link expires in 1 hour.</p>
        <p>If you didn’t request this, you can safely ignore this message.</p>
      `,
    });
    return true;
  } catch (err) {
    console.error('Password reset email failed:', err.message);
    return false;
  }
};

// ── Helpers ──────────────────────────────────────────────────
const setTokenCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

const sendAuthResponse = (res, user, statusCode = 200) => {
  const token = generateToken(user._id);
  setTokenCookie(res, token);
  res.status(statusCode).json({
    success: true,
    token,
    user: user.toPublic(),
  });
};

// ── POST /api/auth/register ──────────────────────────────────
router.post('/register', [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 60 }),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('language').optional().isIn(['ar', 'fr', 'en', 'es']),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, password, city, language, dialect } = req.body;

    // Check existing user
    const exists = await User.findOne({ email }).catch(() => null);
    if (exists) return res.status(400).json({ error: 'Email already registered.' });

    // Create user
    const user = await User.create({ name, email, password, city, language, dialect });

    // Welcome notification
    await Notification.create({
      user:    user._id,
      type:    'welcome',
      title:   'Welcome to MoroccoPedia!',
      message: `Mrhba bik ${name}! Start exploring Moroccan culture, dialects and heritage.`,
      link:    '/dialect',
    }).catch(() => {});

    sendAuthResponse(res, user, 201);
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// ── POST /api/auth/forgot-password ───────────────────────────
router.post('/forgot-password', [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });

    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'No account found with that email address.' });
    if (user.isBanned) return res.status(403).json({ error: 'Account suspended. Contact support.' });

    const token = crypto.randomBytes(24).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
    const resetUrl = `${clientUrl}/auth/reset-password?token=${token}`;
    const emailSent = await sendPasswordResetEmail(email, resetUrl);

    return res.json({
      success: true,
      message: emailSent ? 'A password reset link has been sent to your email.' :
        'A password reset link was generated. Email delivery is not configured on the server.',
    });
  } catch (err) {
    console.error('Forgot password error:', err.message);
    res.status(500).json({ error: 'Unable to process password reset. Please try again later.' });
  }
});

// ── POST /api/auth/login ─────────────────────────────────────
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: 'Invalid email or password.' });

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ error: 'Invalid email or password.' });
    if (user.isBanned) return res.status(403).json({ error: 'Account suspended. Contact support.' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password.' });

    // Update last login
    user.lastLogin = new Date();
    user.stats.loginCount = (user.stats.loginCount || 0) + 1;
    await user.save();

    sendAuthResponse(res, user);
  } catch (err) {
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// ── POST /api/auth/logout ────────────────────────────────────
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out successfully.' });
});

// ── GET /api/auth/me ─────────────────────────────────────────
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Update last seen
    user.lastSeen = new Date();
    await user.save();

    res.json({ user: user.toPublic() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── PUT /api/auth/profile ────────────────────────────────────
router.put('/profile', protect, [
  body('name').optional().trim().isLength({ min: 1, max: 60 }),
  body('bio').optional().isLength({ max: 200 }),
  body('language').optional().isIn(['ar', 'fr', 'en', 'es']),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });

    const { name, bio, city, region, language, dialect, username, notifications } = req.body;

    const user = await User.findById(req.user._id);

    if (name)     user.name     = name;
    if (bio !== undefined) user.bio = bio;
    if (city)     user.city     = city;
    if (region)   user.region   = region;
    if (language) user.language = language;
    if (dialect)  user.dialect  = dialect;
    if (notifications) user.notifications = { ...user.notifications, ...notifications };

    // Handle username uniqueness
    if (username && username !== user.username) {
      const taken = await User.findOne({ username });
      if (taken) return res.status(400).json({ error: 'Username already taken.' });
      user.username = username;
    }

    await user.save();
    res.json({ success: true, user: user.toPublic() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── PUT /api/auth/password ───────────────────────────────────
router.put('/password', protect, [
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 6 }),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });

    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id).select('+password');

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) return res.status(400).json({ error: 'Current password is incorrect.' });

    user.password = newPassword;
    await user.save();

    res.json({ success: true, message: 'Password updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/auth/save-word ─────────────────────────────────
router.post('/save-word', protect, async (req, res) => {
  try {
    const { word } = req.body;
    if (!word) return res.status(400).json({ error: 'Word is required.' });

    const user = await User.findById(req.user._id);
    if (!user.savedWords.includes(word)) {
      user.savedWords.push(word);
      user.stats.points = (user.stats.points || 0) + 2;
    }
    await user.save();
    res.json({ success: true, savedWords: user.savedWords });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── DELETE /api/auth/save-word/:word ─────────────────────────
router.delete('/save-word/:word', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.savedWords = user.savedWords.filter(w => w !== req.params.word);
    await user.save();
    res.json({ success: true, savedWords: user.savedWords });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
