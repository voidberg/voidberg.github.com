// The projects directory. One entry per project.
// - `status` drives the coloured chip: active (green), wip (yellow), archived (grey).
// - `seed` picks the procedural pixel thumbnail (any integer).
// - Set `featured: true` (plus `tag` and `short`) to also show it on the home page.
//   Home shows featured projects in the order they appear below.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  status: 'active' | 'wip' | 'archived';
  statusLabel: string;
  meta: string[];
  desc: string;
  stack: string[];
  links?: ProjectLink[];
  seed: number;
  featured?: boolean;
  tag?: string; // e.g. "// work" — shown on the home card
  short?: string; // shorter blurb for the home card
}

export const projects: Project[] = [
  {
    name: 'Spotlight',
    status: 'archived',
    statusLabel: 'At BENlabs',
    meta: ['AI content recognition', 'Sole engineer'],
    desc: "An AI content-recognition system I built end to end. It processed more than 600,000 media files and identified over 100,000 brand placements across them. One of the pieces of work I'm most pleased with, mostly because I owned all of it.",
    stack: ['TypeScript', 'Python', 'AWS'],
    seed: 3,
    featured: true,
    tag: '// work',
    short: 'AI content recognition. 600k+ media files processed, 100k+ brand placements found. Built solo, end to end.',
  },
  {
    name: 'Watch',
    status: 'archived',
    statusLabel: 'At BENlabs',
    meta: ['Media measurement', 'Led the build'],
    desc: 'A first-of-its-kind media-measurement platform built on Snowflake, unifying analytics across more than 1.5 million titles. The interesting problems here were less about the data and more about making it trustworthy enough that people would act on it.',
    stack: ['Snowflake', 'TypeScript', 'React'],
    seed: 7,
  },
  {
    name: 'eslint-bamboo-formatter',
    status: 'active',
    statusLabel: 'Open source',
    meta: ['A few hundred lines', 'Still out there'],
    desc: 'A small ESLint reporter that formats output for Atlassian Bamboo. Barely any code, and it quietly ended up used by NASA and a UK government research body. My favourite small-code, real-reach story.',
    stack: ['JavaScript', 'ESLint'],
    links: [{ label: 'Source ↗', href: 'https://github.com/voidberg' }],
    seed: 11,
    featured: true,
    tag: '// open source',
    short: 'A tiny ESLint reporter for Atlassian Bamboo. Small code, ended up used by NASA and a UK government research body.',
  },
  {
    name: 'UNHCR train alerts',
    status: 'archived',
    statusLabel: '2015 · built in a day',
    meta: ['With a friend at the UNHCR'],
    desc: 'A friend at the UNHCR needed to know when trains carrying refugees would arrive. We scraped unofficial timetables and turned them into alerts for aid workers, built in a single day. Scrappy, and it mattered.',
    stack: ['PHP', 'Scraping'],
    seed: 17,
  },
  {
    name: 'Snoop Dogg village site',
    status: 'archived',
    statusLabel: 'Built in an afternoon',
    meta: ['The internet did the rest'],
    desc: 'Snoop Dogg turned up in a random Romanian village and the internet lost it. We built a small site reacting to it in a couple of hours; it went viral, and the team ended up interviewed by the BBC.',
    stack: ['PHP', 'A slow afternoon'],
    seed: 23,
  },
  {
    name: 'Reading & Kobo tools',
    status: 'wip',
    statusLabel: 'Being revived',
    meta: ['instakobo · incunable · quarto · imagecache-sharp'],
    desc: "A handful of small tools around reading: pushing Instapaper articles onto a Kobo, EPUB generation from HTML, and a TypeScript image-processing library inspired by Drupal's ImageCache. Most went quiet for years; I'm dusting them off now.",
    stack: ['TypeScript', 'Node', 'Go (in progress)'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/voidberg' }],
    seed: 29,
    featured: true,
    tag: '// open source',
    short: 'Small tools around reading: pushing Instapaper to a Kobo, EPUB from HTML, image processing. Being revived now.',
  },
  {
    name: 'Drupal modules',
    status: 'archived',
    statusLabel: '2008 onward',
    meta: ['The prolific early years'],
    desc: 'Sixteen published Drupal modules and some core contributions, from a busy early open-source stretch. Prolific for a few years, then quiet for about twelve, now being revisited a little. Honest about the timeline rather than pretending it was continuous.',
    stack: ['PHP', 'Drupal'],
    links: [{ label: 'drupal.org ↗', href: 'https://www.drupal.org/u/voidberg' }],
    seed: 31,
  },
  {
    name: 'viciosul_sid & a Playdate game',
    status: 'wip',
    statusLabel: 'For fun',
    meta: ['Chiptunes and a handheld game'],
    desc: 'Chiptunes made in stretches under the name viciosul_sid, and a small amateur game for the Playdate handheld. Between them they explain why this whole site is a ZX Spectrum love letter.',
    stack: ['Chiptune', 'Playdate', 'Lua'],
    links: [{ label: 'Listen ↗', href: 'https://soundcloud.com/viciosul_sid' }],
    seed: 37,
    featured: true,
    tag: '// music',
    short: 'Chiptunes made in stretches, and a small game for the Playdate. The reason this whole site is a ZX Spectrum love letter.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
