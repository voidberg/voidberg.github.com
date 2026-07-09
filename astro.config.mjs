// @ts-check
import { defineConfig } from 'astro/config';

// Static site for alexandrubadiu.ro, deployed to GitHub Pages via Actions.
// The custom domain lives in public/CNAME and is copied verbatim into dist/.
export default defineConfig({
  site: 'https://alexandrubadiu.ro',
  trailingSlash: 'ignore',
  build: {
    // Emit /bio/index.html rather than /bio.html so links stay extensionless.
    format: 'directory',
  },
});
