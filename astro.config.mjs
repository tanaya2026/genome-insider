import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Update this once you know your final domain (e.g. https://genomeinsider.com)
export default defineConfig({
  site: 'https://genome-insider.vercel.app',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  }
});
