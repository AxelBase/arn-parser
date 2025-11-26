import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib')  // Standard alias for your src/lib
    }
  },
  build: {
    // Ensures static/ files like sitemap.xml are included and served with correct MIME (application/xml)
    assetsInclude: ['**/*.xml']
  },
  server: {
    fs: {
      allow: ['..']  // Helps dev server access static/ during local testing
    }
  }
});