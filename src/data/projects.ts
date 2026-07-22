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
  slug?: string; // optional anchor override; defaults to the slugified name
  // Real thumbnail key: uses /projects-<image>-card.png on the projects page and
  // /projects-<image>-featured.png on the home page. Without it the project keeps
  // the procedural `seed` thumbnail.
  image?: string;
}

// The id each project gets on /projects, so home cards can link straight to it.
// Set `slug` on a project to pin the anchor when its name is likely to change.
export function projectSlug(p: Project): string {
  return (
    p.slug ??
    p.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  );
}

export const projects: Project[] = [
  {
    name: 'AI brand placement pipeline',
    status: 'archived',
    statusLabel: 'At BENlabs',
    meta: ['AI content recognition', 'Sole engineer'],
    desc: "Sole engineer on a pipeline that turned a partner's raw feed into scored brand placements. Each row resolved to a brand, product and title, enriched with commercial and industry metadata; the attached video went through transcription, then multi-modal LLMs for grading and scene description. 600k+ files, 100k+ placements, roughly 90% agreement with a domain expert. It won Netflix's evaluation and brought them on as a client.",
    stack: ['TypeScript', 'AI', 'Inngest', 'PostgreSQL', 'SQLite', 'AWS'],
    seed: 1103,
    image: 'pipeline',
    featured: true,
    tag: '// work',
    short: '600k+ media files, 100k+ placements resolved and scored, with multi-modal LLMs grading and describing each scene. Won Netflix\'s evaluation and brought them on as a client.',
  },
  {
    name: 'Multi-source media analytics platform',
    status: 'archived',
    statusLabel: 'At BENlabs',
    meta: ['Media measurement', 'Sole engineer'],
    desc: 'Correlated Nielsen, Gracenote, Luminate and YouGov with box office, historical and manual inputs into unified analytics across 1.5M+ titles. Replaced a $13k/month system covering only select linear TV and film; ran at around $600/month on Snowflake and AWS, data licensed separately. Adopted by Microsoft\'s measurement team, and all client reporting ran on it.',
    stack: ['Snowflake', 'TypeScript', 'ElasticSearch'],
    seed: 2741,
    image: 'measurement',
    featured: true,
    tag: '// work',
    short: 'Media analytics across 1.5M+ titles from Nielsen, Gracenote, Luminate and YouGov. Replaced a $13k/month system with one running at $600.',
  },
  {
    name: 'InstaKobo & InstaRM',
    status: 'active',
    statusLabel: 'Open source',
    meta: ['Instapaper', 'Kobo', 'Remarkable'],
    desc: "Read your Instapaper articles on a Kobo, and sync highlights back to Instapaper. Runs on the device itself or from your desktop. InstaRM, the reMarkable version, is in progress.",
    stack: ['TypeScript', 'Deno', 'Go'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/voidberg/instakobo' }],
    seed: 3319,
    image: 'kobo',
    featured: true,
    tag: '// open source',
    short: 'Read your Instapaper queue on a Kobo, with highlights synced back. Runs on the device or your desktop. reMarkable version in progress.',
  },
  {
    name: 'eslint-bamboo-formatter',
    status: 'active',
    statusLabel: 'Open source',
    meta: ['A few hundred lines', 'Still out there'],
    desc: 'A small ESLint reporter that formats output for Atlassian Bamboo. Barely any code, and it quietly ended up used by NASA and a UK government research body. My favourite small-code, real-reach story.',
    stack: ['TypeScript', 'ESLint', 'Bamboo'],
    links: [{ label: 'Source ↗', href: 'https://github.com/voidberg/eslint-bamboo-formatter' }],
    seed: 4507,
    image: 'eslint',
    featured: true,
    tag: '// open source',
    short: 'A tiny ESLint reporter for Atlassian Bamboo. Barely any code, and it quietly ended up used by NASA and a UK government research body.',
  },
  {
    name: 'Quarto & Quarto Go',
    status: 'active',
    statusLabel: 'Open source',
    meta: ['EPUB', 'kepub'],
    desc: 'Libraries for generating EPUB and KEPUB files with zero native dependencies. Quarto is the original, Quarto Go is the port. Both are in use across my own reading tools.',
    stack: ['TypeScript', 'Deno', 'Go', 'EPUB', 'kepub', 'Kobo'],
    links: [
      { label: 'Quarto ↗', href: 'https://github.com/voidberg/quarto' },
      { label: 'Quarto Go ↗', href: 'https://github.com/voidberg/quarto-go' }
    ],
    seed: 5171,
    image: 'quarto',
    featured: true,
    tag: '// open source',
    short: 'EPUB and KEPUB generation with zero native dependencies, in JavaScript and Go. The same library twice, because I needed it in both. Both are in use across my own reading tools.',
  },
  {
    name: 'Imagecache Sharp',
    status: 'active',
    statusLabel: 'Open source',
    meta: ['Image processing'],
    desc: 'A Node image processing library built on sharp. You define presets as chains of operations, resize, watermark, blur, flip, and apply them by name. Named after Drupal\'s imagecache module, now image styles, which is where the idea came from.',
    stack: ['TypeScript', 'Sharp'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/voidberg/imagecache-sharp' }
    ],
    seed: 6673,
    image: 'imagecache',
    featured: true,
    tag: '// open source',
    short: 'Node image processing on top of sharp: define presets as chains of resize, watermark, blur and so on. Named after Drupal imagecache, which is where the idea came from.',
  },
  {
    name: 'reSafari',
    status: 'wip',
    statusLabel: 'wip',
    meta: ['Remarkable', 'Safari'],
    desc: 'A Safari extension for sending articles to a reMarkable. reMarkable ship a Chrome extension and the open source alternatives are Chrome-only too, so Safari users have had nothing. Working, not yet on the App Store.',
    stack: ['TypeScript', 'Swift', 'Safari Web Extensions'],
    seed: 7919,
    image: 'resafari',
    featured: false,
    tag: '// wip',
    short: 'Send articles to your reMarkable from Safari. reMarkable only ship a Chrome extension, so I built the missing one.',
  },
  {
    name: 'Phosphor',
    status: 'wip',
    statusLabel: 'wip',
    meta: ['DevEx'],
    desc: 'A debugging tool for when your console output has become unreadable. Drop in the client library instead of your logging one and messages go to a separate macOS app, locally or over the network, where you can actually find the ones you want. Client libraries for multiple languages. Built it because I was working on something that drowned everything useful in noise.',
    stack: ['Swift', 'Multi-language clients'],
    seed: 8443,
    image: 'phosphor',
    featured: false,
    tag: '// wip',
    short: 'Send log messages from your app to a separate viewer, so the thing you care about is not buried in console noise. Native macOS app, client libraries across languages.',
  },
  {
    name: 'Zare',
    status: 'wip',
    statusLabel: 'wip',
    meta: ['Bookmarks', 'Reminders', 'Personal memory'],
    desc: 'A bookmarking tool for things you want to keep and things you need to act on. Save a link, a screenshot, a poster; it works out what the thing is, tags it, and surfaces connections between what you\'ve saved. If there\'s a date attached, an exhibition closing or a concert next month, it tells you before it\'s gone.',
    stack: ['Deno', 'AI', 'Swift', 'Svelte'],
    seed: 9127,
    featured: false,
    image: 'zare',
    tag: '// wip',
    short: 'Throw anything at it: a link, a screenshot, a concert flyer. It works out what it is, files it, and reminds you before the date passes.',
  },
  {
    name: 'Incunable',
    status: 'wip',
    statusLabel: 'Open source',
    meta: ['Kobo', 'EPUB', 'kepub'],
    desc: 'A self-hosted manager for the EPUBs you already own. It acts as a Kobo sync proxy, so your own DRM-free books arrive on the device the same way store-bought ones do, with reading position synced back, rather than dumped over USB.',
    stack: ['Go', 'Svelte', 'Huma'],
    seed: 10651,
    image: 'incunable',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/voidberg/incunable'}
    ],
    featured: false,
    tag: '// wip',
    short: 'Self-hosted EPUB library that syncs to a Kobo properly, via a sync proxy rather than dragging files over USB.',
  },
  {
    name: 'Uncut',
    status: 'archived',
    statusLabel: '2017 · Greenpeace',
    meta: ['Isobar Romania + Greenpeace'],
    desc: 'Field recordings from Romania\'s forests, made into an acoustic track with the band Coma, released to raise money for forest protection. Developed the website and handled the audio distribution via Bandcamp.',
    stack: ['Bulma', 'Howler', 'Plyr'],
    seed: 11743,
    image: 'uncut',
    links: [
      { label: 'Bandcamp ↗', href: 'https://greenpeace.bandcamp.com/album/uncut' },
      { label: 'COMA feat. Sunetele Padurilor - C.M.F.L.D.P.P. ↗', href: 'https://www.youtube.com/watch?v=39AwSkDQQxs' }
    ],
    short: 'Real recordings from Romanian forests, turned into a track with the band Coma to fund forest protection.'
  },
  {
    name: 'Virgin forest map',
    status: 'archived',
    statusLabel: '2017 · Greenpeace',
    meta: ['Public data, made visible'],
    desc: 'Developed an interactive map of Romania\'s potential virgin forests, layering official government data over independent research to show what was there and what wasn\'t being protected.',
    stack: ['Carto', 'Leaflet', 'Mapbox', 'Google Maps', 'Bulma'],
    seed: 12281,
    image: 'forests',
    links: [
      { label: 'Press Release ↗', href: 'https://www.greenpeace.org/romania/comunicat-presa/1154/greenpeace-lanseaza-harta-padurilor-virgine-potentiale-din-romania/'}
    ],
    short: 'Interactive map of Romania\'s potential virgin forests, layering government data with independent research.'
  },
  {
    name: 'Visit Bogata',
    status: 'archived',
    statusLabel: '2016 · Built in an afternoon',
    meta: ['The internet did the rest'],
    desc: 'Snoop Dogg tagged himself in a random Romanian village and the internet lost it. I built a small site (with friends from ISOBAR Romania) reacting to it in a couple of hours; it went viral, and the team ended up interviewed by the BBC. Won a Bronze Fibra Award.',
    stack: ['PHP', 'A slow afternoon'],
    links: [
      { label: 'BBC ↗', href: 'https://www.bbc.co.uk/news/newsbeat-35845502'}
    ],
    image: 'bogata',
    seed: 13417,
  },
  {
    name: 'UNHCR train alerts',
    status: 'archived',
    statusLabel: '2015 · built in a day',
    meta: ['With a friend at the UNHCR'],
    desc: 'A friend at the UNHCR needed to know when trains carrying refugees would arrive. We scraped unofficial timetables and turned them into alerts for aid workers, built in a single day. Scrappy, and it mattered.',
    stack: ['PHP', 'Scraping'],
    image: 'unhcr',
    seed: 14741,
  },
  {
    name: 'Drupal Romania',
    status: 'archived',
    statusLabel: '2008 onward · Drupal Romania',
    meta: ['The prolific early years'],
    desc: 'Co-founder of Drupal Romania and Drupal contributor, with sixteen published modules and some core contributions, from a busy early open-source stretch. Prolific for a few years, then more quiet as jobs and technologies changed.',
    stack: ['PHP', 'Drupal'],
    links: [{ label: 'drupal.org ↗', href: 'https://www.drupal.org/u/voidberg' }],
    seed: 15683,
    image: 'drupal',
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
