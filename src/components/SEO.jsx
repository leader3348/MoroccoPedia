import Head from 'next/head';

const DEFAULT = {
  title:       'MoroccoPedia — Morocco\'s Living Cultural Encyclopedia',
  description: 'Explore Moroccan cities, dialects, traditions and heritage. Interactive map, Darija dictionary with 7 regional dialects, AI cultural assistant and community stories.',
  image:       'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80',
  url:         'https://moroccoPedia.vercel.app',
  type:        'website',
};

export default function SEO({
  title, description, image, url, type = 'website',
  city, word, noIndex = false,
}) {
  const t   = title       ? `${title} — MoroccoPedia` : DEFAULT.title;
  const d   = description || DEFAULT.description;
  const img = image       || DEFAULT.image;
  const u   = url         || DEFAULT.url;

  return (
    <Head>
      <title>{t}</title>
      <meta name="description"        content={d} />
      <meta name="robots"             content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport"           content="width=device-width, initial-scale=1, maximum-scale=5" />
      <link  rel="canonical"          href={u} />

      {/* Open Graph */}
      <meta property="og:title"       content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:image"       content={img} />
      <meta property="og:url"         content={u} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content="MoroccoPedia" />
      <meta property="og:locale"      content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image"       content={img} />

      {/* City-specific */}
      {city && <meta name="geo.region" content="MA" />}
      {city && <meta name="geo.placename" content={city} />}

      {/* Keywords */}
      <meta name="keywords" content={[
        'Morocco', 'Maroc', 'المغرب', 'Darija', 'Moroccan culture',
        'Moroccan dialect', 'Moroccan heritage', city, word,
        'Marrakesh', 'Fes', 'Chefchaouen', 'Moroccan food',
        'Moroccan traditions', 'Atlas mountains', 'Sahara Morocco'
      ].filter(Boolean).join(', ')} />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type':    'WebSite',
            name:       'MoroccoPedia',
            url:        DEFAULT.url,
            description: DEFAULT.description,
            potentialAction: {
              '@type':       'SearchAction',
              target:        `${DEFAULT.url}/dialect?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </Head>
  );
}
