import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
	adapter: adapter({
	  pages: 'docs',
	  assets: 'docs',
	  fallback: 'index.html',
	  precompress: false
	}),
	paths: {
	  base: '/arn-parser'
	},
	prerender: {
	  entries: ['*'],
	  handleHttpError: 'warn'
	}
  }
};

export default config;
