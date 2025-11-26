// scripts/generate-sitemap.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const baseUrl = 'https://axelbase.github.io/arn-parser';

const today = '2025-11-26';  // Current date

const pages = [
  { url: '', lastmod: '2025-11-15', changefreq: 'weekly', priority: '1.0' },
  { url: 'blog.html', lastmod: '2025-11-15', changefreq: 'monthly', priority: '0.8' },
  { url: 'privacy.html', lastmod: today, changefreq: 'yearly', priority: '0.6' },
  { url: 'terms.html', lastmod: today, changefreq: 'yearly', priority: '0.6' },
  // Blog posts – using your exact dates
  { url: 'blog/posts/post1.html', lastmod: '2025-11-01', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post2.html', lastmod: '2025-11-03', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post3.html', lastmod: '2025-11-05', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post4.html', lastmod: '2025-11-07', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post5.html', lastmod: '2025-11-09', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post6.html', lastmod: '2025-11-11', changefreq: 'yearly', priority: '0.7' },
  { url: 'blog/posts/post7.html', lastmod: '2025-11-13', changefreq: 'yearly', priority: '0.7' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => {
  const fullUrl = p.url ? `${baseUrl}/${p.url}` : baseUrl;
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../static/sitemap.xml'), xml + '\n', { encoding: 'utf8' });  // Force UTF-8 + Unix LF
console.log('✅ sitemap.xml generated in static/ with Unix line endings');