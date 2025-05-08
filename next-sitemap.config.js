/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://krishnazade.vercel.app',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7, // Example to set 1.0 priority for homepage
      lastmod: new Date().toISOString(),
    };
  },
};
