/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://makingtheworldmove.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/studio/*', '/api/*'],
  additionalPaths: async (config) => {
    // Add dynamic paths for episodes, guests, etc.
    const paths = []
    
    // Add episodes (this would be fetched from Sanity in production)
    const episodes = [
      'energy-mega-merger',
      'impossible-negotiation',
      'unicorn-exit',
      'pipeline-gambit',
      'streaming-wars',
      'cure-consolidation',
      'urban-transformation',
      'digital-revolution'
    ]
    
    episodes.forEach(slug => {
      paths.push({
        loc: `/episodes/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    })
    
    // Add guests
    const guests = [
      'sarah-mitchell',
      'ambassador-chen',
      'marcus-rodriguez',
      'elena-volkov',
      'david-kim',
      'maria-santos'
    ]
    
    guests.forEach(slug => {
      paths.push({
        loc: `/guests/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    })
    
    return paths
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
    ],
  },
  transform: async (config, path) => {
    // Add custom metadata for different page types
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'daily'
    }

    // Episodes get high priority
    if (path.startsWith('/episodes/')) {
      customConfig.priority = 0.9
      customConfig.changefreq = 'weekly'
    }

    // Deal library gets medium-high priority
    if (path.startsWith('/deal-library')) {
      customConfig.priority = 0.8
      customConfig.changefreq = 'weekly'
    }

    // Static pages get medium priority
    if (['/about', '/contact', '/partnerships'].includes(path)) {
      customConfig.priority = 0.6
      customConfig.changefreq = 'monthly'
    }

    return customConfig
  },
}

