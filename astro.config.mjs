// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static site for alexandrubadiu.ro, built by Cloudflare Pages on push to origin.
export default defineConfig({
  site: 'https://alexandrubadiu.ro',
  trailingSlash: 'ignore',
  build: {
    // Emit /bio/index.html rather than /bio.html so links stay extensionless.
    format: 'directory',
  },
  integrations: [mdx()],
});
