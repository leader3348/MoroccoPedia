require('dotenv').config();
const mongoose = require('mongoose');
const DIALECT_DATA = require('../src/data/dialectData');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/moroccoPedia');
    console.log('✅ Connected to MongoDB');

    const Word = require('../src/models/Word');
    await Word.deleteMany({});
    console.log('🗑  Cleared existing words');

    const inserted = await Word.insertMany(DIALECT_DATA);
    console.log(`✅ Seeded ${inserted.length} dialect words`);

    await mongoose.disconnect();
    console.log('✅ Done! Database seeded successfully.\n');
    console.log('Words seeded:');
    inserted.forEach(w => console.log(`  - ${w.word} (${w.regionalVariants?.length || 0} regional variants)`));

  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
