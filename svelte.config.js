import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';  // Fixed: Import from vite-plugin-svelte, not kit/vite

const config = {
  preprocess: vitePreprocess(),  // Optional for TS/Svelte; keeps Bootstrap CSS safe
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',  // Ensures static/ (sitemap.xml, robots.txt) copies to output
      fallback: '404.html',  // As requested
      precompress: false
    }),
    paths: {
      base: '/arn-parser'  // Preserved for GitHub Pages subpath
    },
    prerender: {
      entries: ['*'],  // Prerenders all routes
      handleHttpError: 'warn'
    }
  }
};

export default config;