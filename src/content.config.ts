import { defineCollection, reference } from 'astro:content';
import { z } from 'zod';
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
    // How many of this project's devlog entries show on /now. 0 keeps the
    // project off that page entirely, which is the default: a project earns its
    // place there by having something recent to say.
    nowUpdates: z.number().default(0),
    // Set when this is one half of something that ships as a single project.
    // A project with a parent keeps its own devlog stream and its own entry on
    // /now, but doesn't get listed on /projects; links to it resolve to the
    // parent. Delete the line and it becomes a project in its own right.
    parent: reference('projects').optional(),
    // What to call this project's devlog stream, when that differs from the
    // name the listing uses. A parent that covers two halves wants its own half
    // named here, or the /now headings read as if they overlap.
    devlogName: z.string().optional(),
  }),
});

// Devlog: dated update posts, each one belonging to a project. One file per
// entry, named so the directory sorts chronologically. Only /now reads these
// for the moment, and only the newest few per project; the writing page that
// will list them properly comes later.
const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    // Validated against the projects collection, so a typo in the id is a build
    // error rather than an entry that quietly never appears.
    project: reference('projects'),
    date: z.coerce.date(),
    // Optional: a short entry is often just a paragraph and needs no headline.
    title: z.string().optional(),
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
// article, the uses list). Markdown or MDX.
const prose = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/prose' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

// Long-form writing. One file per piece; the body is the article. These are the
// only pages that use the serif reading surface (body.read), everything else on
// the site stays on the mono chrome.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // The large line under the title on the article page.
    standfirst: z.string().optional(),
    // The line under the title in the index. Falls back to the standfirst.
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts show in the index with a badge, so a piece can be in the open
    // while it's still being written. Set false to publish properly.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, now, prose, devlog, articles };
