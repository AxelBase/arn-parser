// scripts/generate-sitemap.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const baseUrl = 'https://axelbase.github.io/arn-parser';

const pages = [
  { url: '', lastmod: '2025-11-15', changefreq: 'weekly', priority: '1.0' },
  { url: 'blog.html', lastmod: '2025-11-15', changefreq: 'monthly', priority: '0.8' },
  { url: 'privacy.html', lastmod: '2025-11-15', changefreq: 'yearly', priority: '0.6' },
  { url: 'terms.html', lastmod: '2025-11-15', changefreq: 'yearly', priority: '0.6' },
  // Blog posts
  ...[1,2,3,4,5,6,7].map(n => ({
    url: `blog/posts/post${n}.html`,
    lastmod: `2025-11-${1 + (n-1)*2 < 10 ? '0' : ''}${1 + (n-1)*2}`,
    changefreq: 'yearly',
    priority: '0.7'
  }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}/${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`.trim();

fs.writeFileSync('static/sitemap.xml', xml + '\n');
console.log('✅ sitemap.xml generated at static/sitemap.xml');