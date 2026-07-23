import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects directory. One Markdown file per project: the structured fields live
// in frontmatter, the description is the Markdown body. `order` preserves the
// sequence they show in (collections are otherwise unordered).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    status: z.enum(['active', 'wip', 'archived']),
    statusLabel: z.string(),
    meta: z.array(z.string()),
    stack: z.array(z.string()),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    seed: z.number(),
    featured: z.boolean().default(false),
    tag: z.string().optional(), // e.g. "// work" — shown on the home card
    short: z.string().optional(), // shorter blurb for the home card
    // Real thumbnail key: /projects/<image>-card.png and -featured.png. Without
    // it the project keeps the procedural `seed` thumbnail.
    image: z.string().optional(),
    order: z.number(),
  }),
});

// The "now" block on the home page. One Markdown file per line; `label` is the
// pixel-font key in the left column, the body is the text.
const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    label: z.string(),
    order: z.number(),
  }),
});

// Standalone prose blocks rendered by a specific page (the bio, the Glug Glug
// article). Markdown or MDX.
const prose = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/prose' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { projects, now, prose };
