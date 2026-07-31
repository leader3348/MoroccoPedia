const SITE_URL = 'https://moroccoPedia.app';

const STATIC_PAGES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/dialect', priority: '0.9', changefreq: 'weekly' },
  { url: '/history', priority: '0.9', changefreq: 'monthly' },
  { url: '/map', priority: '0.8', changefreq: 'monthly' },
  { url: '/tourism', priority: '0.8', changefreq: 'weekly' },
  { url: '/home-culture', priority: '0.8', changefreq: 'monthly' },
  { url: '/community', priority: '0.7', changefreq: 'daily' },
  { url: '/ai', priority: '0.7', changefreq: 'monthly' },
  { url: '/about', priority: '0.6', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/api-docs', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  { url: '/search', priority: '0.7', changefreq: 'weekly' },
  { url: '/phrase-book', priority: '0.8', changefreq: 'monthly' },
  { url: '/quiz', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
];

const CITIES = [
  'marrakesh', 'fes', 'casablanca', 'tangier', 'chefchaouen',
  'essaouira', 'agadir', 'ouarzazate', 'ifrane',
];

function generateSiteMap() {
  const cityPages = CITIES.map(slug => ({
    url: `/city/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...STATIC_PAGES, ...cityPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default SiteMap;
