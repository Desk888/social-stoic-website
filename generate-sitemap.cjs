const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.socialstoic.com';

const pages = [
  '/',
  '/coaching',
  '/videos',
  '/contact', 
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  pages.forEach(page => sitemap.write(page));

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);

  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemapOutput.toString());
  console.log('✅ Sitemap generated successfully!');
})();
