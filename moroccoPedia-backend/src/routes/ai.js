const express = require('express');
const router = express.Router();
const { searchWords, getWordBySlug } = require('../services/dialectService');

// Curated AI responses by topic keyword
const AI_RESPONSES = {
  marrakesh: "Marrakesh is Morocco's most iconic imperial city. Founded in 1062 by the Almoravids, it's home to Jemaa el-Fna — the world's only UNESCO-listed oral heritage square. The city has its own exclusive dish (Tangia), its own dialect (Marrakshi), and its own Gnawa music tradition. The medina's souks are divided by craft: spice souk, leather souk, lantern souk, carpet souk — each in its own quarter.",
  gnawa: "Gnawa music is a UNESCO-listed spiritual healing tradition from West African roots. It combines Islamic mysticism with sub-Saharan African rhythms. The Gnawa masters (Maalem) lead ceremonies called Lila — all-night sessions where music, incense and color are used for spiritual healing. Essaouira hosts the world's largest Gnawa festival every June.",
  zellige: "Zellige (زليج) is Morocco's ancient geometric mosaic tilework. Each tile is hand-cut from fired clay and hand-painted, then assembled into intricate geometric patterns. The craft dates to 10th-century Fès. A single zellige panel can take weeks to create. No two panels are identical — the slight imperfections are intentional, symbolizing that only God is perfect.",
  darija: "Moroccan Arabic (Darija / الدارجة) is unique in the Arabic-speaking world. It mixes Classical Arabic with Amazigh (Berber), French, Spanish and Portuguese. It varies significantly by region: the north has Spanish influence, Casablanca uses more French, and the south has Amazigh vocabulary. It's a spoken language — traditionally it had no written form, though this is changing.",
  amazigh: "The Amazigh (Berber) people are Morocco's indigenous population, predating Arab arrival by thousands of years. Their language, Tamazight, was made an official Moroccan language in the 2011 constitution alongside Arabic. The Amazigh script (Tifinagh) is one of the world's oldest alphabets. There are three main Amazigh languages in Morocco: Tachelhit (south), Tamazight (middle Atlas), and Tarifit (Rif).",
  fes: "Fès (فاس) is Morocco's spiritual and intellectual capital. It contains Al-Qarawiyyin, founded in 859 CE — considered the world's oldest continuously operating university. The Fès medina (Fès el-Bali) is the largest living medieval city on earth, with 9,000 streets and no cars allowed. Fassi dialect is considered the most refined and classical Moroccan Arabic.",
  food: "Moroccan cuisine is considered one of the world's top 5. Key dishes: tagine (slow-cooked stew), couscous (eaten on Fridays as a family ritual), pastilla (sweet-savoury pie), harira (tomato-lentil soup), msemen (layered pancake). Every region has its own signature dish: Marrakesh has Tangia, Fès has Rfissa, the north has fish dishes, Souss uses argan oil.",
  dialect: "Morocco has a complex dialect landscape. Standard Darija is spoken nationwide but varies by region. The north (Tangier, Tetouan) has heavy Spanish influence — they say 'wajid' instead of 'bezzaf' for 'a lot', and 'mli7a' instead of 'zwina' for 'beautiful'. The south has Amazigh words mixed in. Casablanca Darija is fast, urban and mixes a lot of French.",
  default: "Morocco has a rich and layered culture shaped by Amazigh, Arab, Andalusian, sub-Saharan African and European influences over 3,000 years. From the imperial cities of Marrakesh, Fès, Meknès and Rabat, to the blue city of Chefchaouen, the Sahara desert and the Atlas Mountains — each region has its own distinct food, dialect, crafts and traditions. 🇲🇦",
};

function getAIResponse(message) {
  const lower = message.toLowerCase();
  for (const [key, response] of Object.entries(AI_RESPONSES)) {
    if (key !== 'default' && lower.includes(key)) {
      return response;
    }
  }
  return AI_RESPONSES.default;
}

/**
 * POST /api/ai/chat
 * AI cultural assistant
 */
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'message is required' });

    // Check if asking about a specific word
    const wordMatch = message.match(/what(?:'s| is) ["']?(\w+)["']?/i) ||
                      message.match(/translate ["']?(\w+)["']?/i) ||
                      message.match(/mean(?:ing)? of ["']?(\w+)["']?/i);

    if (wordMatch) {
      const word = wordMatch[1];
      const entry = await getWordBySlug(word);
      if (entry) {
        return res.json({
          message: `**${entry.word}** (${entry.arabic}) — ${entry.definition}\n\nIn English: "${entry.translations?.english}"\nIn French: "${entry.translations?.french}"\n\nRegional variations: ${entry.regionalVariants?.map(v => `${v.region}: "${v.word}"`).join(', ')}`,
          type: 'word-lookup',
          data: entry,
        });
      }
    }

    res.json({
      message: getAIResponse(message),
      type: 'cultural-info',
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
