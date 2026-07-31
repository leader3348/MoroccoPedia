function Robots() {}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://moroccoPedia.app/sitemap.xml

# Block admin and auth pages from crawling
Disallow: /admin/
Disallow: /api/
Disallow: /auth/forgot-password
`;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.write(robots);
  res.end();
  return { props: {} };
}

export default Robots;
