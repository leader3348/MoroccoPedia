const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory store (replace with MongoDB in production)
let contributions = [
  {
    id: uuidv4(), author: 'Fatima Zahra B.', city: 'Marrakesh', category: 'food',
    title: 'My grandmother\'s Tangia recipe',
    content: 'The secret is slow-cooking in hammam coals overnight with preserved lemon, cumin and saffron from Taliouine.',
    tags: ['food', 'tradition', 'marrakesh'], likes: 24, verified: true, status: 'approved',
    createdAt: new Date('2025-10-01').toISOString(),
  },
  {
    id: uuidv4(), author: 'Youssef A.', city: 'Tangier', category: 'dialect',
    title: 'The word "Gzar" in Tanjawi',
    content: 'In Tangier we say "Gzar" for butcher with a very distinct accent. My grandfather was a butcher in the old medina for 40 years.',
    tags: ['dialect', 'audio', 'tangier'], likes: 18, verified: true, status: 'approved',
    createdAt: new Date('2025-11-15').toISOString(),
  },
  {
    id: uuidv4(), author: 'Khadija E.', city: 'Fès', category: 'craft',
    title: '6 generations of tannery craft in Fès',
    content: 'Our family tannery in Chouara has used natural pigments from pomegranate and saffron for 6 generations. A UNESCO craft that may disappear.',
    tags: ['craft', 'history', 'fes'], likes: 41, verified: true, status: 'approved',
    createdAt: new Date('2025-12-03').toISOString(),
  },
];

/** GET /api/community — list contributions */
router.get('/', (req, res) => {
  const { city, category, limit = 20, page = 1 } = req.query;
  let result = contributions.filter(c => c.status === 'approved');
  if (city)     result = result.filter(c => c.city.toLowerCase().includes(city.toLowerCase()));
  if (category) result = result.filter(c => c.category === category);
  const start = (parseInt(page) - 1) * parseInt(limit);
  res.json({ count: result.length, page: parseInt(page), contributions: result.slice(start, start + parseInt(limit)) });
});

/** POST /api/community — submit contribution */
router.post('/', (req, res) => {
  const { author, city, category, title, content, tags } = req.body;
  if (!author || !city || !category || !content) {
    return res.status(400).json({ error: 'author, city, category and content are required' });
  }
  const newContrib = {
    id: uuidv4(), author, city, category,
    title: title || '',
    content,
    tags: tags || [],
    likes: 0,
    verified: false,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  contributions.unshift(newContrib);
  res.status(201).json({ message: 'Contribution submitted for review', contribution: newContrib });
});

/** POST /api/community/:id/like */
router.post('/:id/like', (req, res) => {
  const contrib = contributions.find(c => c.id === req.params.id);
  if (!contrib) return res.status(404).json({ error: 'Not found' });
  contrib.likes += 1;
  res.json({ likes: contrib.likes });
});

module.exports = router;
