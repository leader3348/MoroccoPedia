const express = require('express');
const router = express.Router();

const CITIES_DATA = [
  {
    slug: 'marrakesh', name: 'Marrakesh', arabicName: 'مراكش',
    region: 'Marrakesh-Safi', dialect: 'Marrakshi', nickname: 'The Red City',
    founded: '1062 CE', population: '1.1 Million',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description: 'Imperial city founded by the Almoravids. Home to Jemaa el-Fna, the world\'s only UNESCO oral heritage square.',
    tags: ['Architecture', 'Cuisine', 'Crafts', 'Music', 'Traditions'],
    food: [
      { icon: '🥘', name: 'Tangia',    description: 'Slow-cooked lamb in a clay urn — unique to Marrakesh' },
      { icon: '🍲', name: 'Pastilla',  description: 'Sweet-savoury pigeon pie' },
      { icon: '🫖', name: 'Mint Tea',  description: 'Ceremonial hospitality ritual' },
    ],
    crafts: [
      { icon: '⬡',  name: 'Zellige',   description: 'Geometric mosaic tilework' },
      { icon: '👗', name: 'Kaftan',    description: 'Embroidered ceremonial robe' },
      { icon: '🪔', name: 'Lanterns',  description: 'Hand-pierced brass lighting' },
    ],
    facts: [
      { key: 'Founded',    value: '1062 CE' },
      { key: 'Population', value: '1.1 Million' },
      { key: 'UNESCO',     value: 'Medina (1985)' },
      { key: 'Nickname',   value: 'The Red City' },
    ],
  },
  {
    slug: 'fes', name: 'Fès', arabicName: 'فاس',
    region: 'Fès-Meknès', dialect: 'Fassi', nickname: 'The Cultural Capital',
    founded: '789 CE', population: '1.2 Million',
    coordinates: { lat: 34.0181, lng: -5.0078 },
    description: 'The world\'s oldest university city. Fès el-Bali is the largest living medieval city on earth.',
    tags: ['History', 'Crafts', 'Religion', 'Architecture', 'Education'],
    food: [
      { icon: '🥧', name: 'Rfissa',    description: 'Chicken with lentils and msemmen — festive dish' },
      { icon: '🍲', name: 'Pastilla',  description: 'Sweet-savoury pigeon or seafood pie' },
      { icon: '🫖', name: 'Maghrebi Tea', description: 'Fassi tea ceremony with more mint' },
    ],
    facts: [
      { key: 'Founded',    value: '789 CE' },
      { key: 'Population', value: '1.2 Million' },
      { key: 'UNESCO',     value: 'Medina (1981)' },
      { key: 'University', value: 'Al-Qarawiyyin (859 CE)' },
    ],
  },
  {
    slug: 'casablanca', name: 'Casablanca', arabicName: 'الدار البيضاء',
    region: 'Casablanca-Settat', dialect: 'Casawi', nickname: 'The White City',
    founded: '1907 (modern)', population: '3.7 Million',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    description: 'Morocco\'s economic capital and largest city. A modern metropolis with French colonial architecture.',
    tags: ['Business', 'Architecture', 'Nightlife', 'Cuisine', 'Art'],
    food: [
      { icon: '🐟', name: 'Grilled Sardines', description: 'Fresh Atlantic sardines — iconic Casawi dish' },
      { icon: '🍜', name: 'Harira',            description: 'Tomato-based soup with lentils and chickpeas' },
    ],
    facts: [
      { key: 'Population', value: '3.7 Million' },
      { key: 'Landmark',   value: 'Hassan II Mosque (3rd largest in world)' },
      { key: 'Economy',    value: 'Morocco\'s financial capital' },
    ],
  },
  {
    slug: 'tangier', name: 'Tangier', arabicName: 'طنجة',
    region: 'Tanger-Tetouan-Al Hoceima', dialect: 'Tanjawi', nickname: 'The Gateway to Africa',
    founded: '5th century BC', population: '1 Million',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    description: 'Strategic port city at the crossing of Atlantic and Mediterranean. Historically a cosmopolitan hub.',
    tags: ['History', 'Cosmopolitan', 'Seafood', 'Spanish influence', 'Art'],
    food: [
      { icon: '🐟', name: 'Fried Fish',     description: 'Fresh Mediterranean and Atlantic catch' },
      { icon: '🫘', name: 'Byesar',         description: 'Fava bean dip — northern specialty' },
      { icon: '🥗', name: 'Chermoula',      description: 'Herb marinade with strong Spanish influence' },
    ],
    facts: [
      { key: 'Population', value: '1 Million' },
      { key: 'Location',   value: '14km from Spain' },
      { key: 'Languages',  value: 'Darija, Spanish, French, Tarifit' },
    ],
  },
  {
    slug: 'chefchaouen', name: 'Chefchaouen', arabicName: 'شفشاون',
    region: 'Tanger-Tetouan-Al Hoceima', dialect: 'Jebli', nickname: 'The Blue City',
    founded: '1471 CE', population: '45,000',
    coordinates: { lat: 35.1688, lng: -5.2636 },
    description: 'Famous for its striking blue-washed medina nestled in the Rif Mountains. A UNESCO tentative site.',
    tags: ['Architecture', 'Mountains', 'Crafts', 'Tradition', 'Photography'],
    food: [
      { icon: '🧀', name: 'Fresh Goat Cheese', description: 'Local mountain cheese — unique to the Rif region' },
      { icon: '🥙', name: 'Kefta Tagine',       description: 'Mountain-style spiced meatball stew' },
    ],
    facts: [
      { key: 'Founded',    value: '1471 CE' },
      { key: 'Nickname',   value: 'The Blue City' },
      { key: 'Altitude',   value: '600m above sea level' },
    ],
  },
];

/**
 * GET /api/cities
 * List all cities
 */
router.get('/', (req, res) => {
  const { region } = req.query;
  let cities = CITIES_DATA;
  if (region) {
    cities = cities.filter(c => c.region.toLowerCase().includes(region.toLowerCase()));
  }
  res.json({ count: cities.length, cities: cities.map(c => ({
    slug: c.slug, name: c.name, arabicName: c.arabicName,
    region: c.region, dialect: c.dialect, nickname: c.nickname,
    coordinates: c.coordinates, tags: c.tags,
  }))});
});

/**
 * GET /api/cities/:slug
 * Get full city data
 */
router.get('/:slug', (req, res) => {
  const city = CITIES_DATA.find(c => c.slug === req.params.slug);
  if (!city) {
    return res.status(404).json({ error: `City "${req.params.slug}" not found` });
  }
  res.json(city);
});

module.exports = router;
