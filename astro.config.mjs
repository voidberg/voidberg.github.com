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
  markdown: {
    // SmartyPants turns ... into a single U+2026 glyph, which in a monospace
    // face is three dots crammed into one character cell. The whole site is
    // monospace, so plain full stops read better. It also can't quietly turn
    // a double hyphen into an em dash.
    smartypants: false,
  },
  integrations: [mdx()],
});
