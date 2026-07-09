// The /uses page. Grouped lists of tools and tech.
// Only list things actually used. `since` is optional (shown as a small chip).

export interface UseItem {
  name: string;
  note: string;
  since?: string;
}

export interface UseGroup {
  group: string;
  items: UseItem[];
}

export const uses: UseGroup[] = [
  {
    group: 'Building things',
    items: [
      { name: 'Node & TypeScript', note: 'Most of what I\'ve built in the last decade lives here. TypeScript everywhere it will fit.' },
      { name: 'React', note: 'The front-end default. I started on the front end and never fully left it.' },
      { name: 'GraphQL', note: "For the APIs that earned it. Not for the ones that didn't." },
      { name: 'NestJS', note: 'Structure for the back end when a project is going to outlive its first author.' },
    ],
  },
  {
    group: 'Data & infrastructure',
    items: [
      { name: 'PostgreSQL', note: 'The boring database that has never let me down. Reach for it first, regret it rarely.' },
      { name: 'Elasticsearch', note: 'When "search" turns out to actually mean search.' },
      { name: 'Redis', note: 'Cache, queues, the small fast things.' },
      { name: 'Snowflake', note: 'Where the media-measurement work lived. Good at the scale, expensive at the carelessness.' },
      { name: 'AWS', note: 'The cloud I know best, warts and bill included.' },
    ],
  },
  {
    group: 'Watching production',
    items: [
      { name: 'Sentry', note: 'Errors, with enough context to act before the users tell you.' },
      { name: 'New Relic', note: 'For the "why is it slow" questions that don\'t have an obvious answer.' },
      { name: 'PagerDuty', note: "The one I'm always slightly relieved to close." },
      { name: 'PostHog & Amplitude', note: 'Product analytics. What people actually do, not what we hoped.' },
      { name: 'Inngest', note: 'Background jobs and workflows without hand-rolling the plumbing.' },
    ],
  },
  {
    group: 'AI in the loop',
    items: [
      { name: 'Claude & Claude Code', note: "Heavily, for building and for reviving old projects I'd otherwise never have found time to finish. This is integration and product work, not model training." },
    ],
  },
  {
    group: 'Still fond of',
    items: [
      { name: 'PHP', note: 'Where a lot of this started. Unfashionable to admit, still shipping websites everywhere.' },
    ],
  },
  {
    group: 'Making music',
    items: [
      { name: 'Theremin', note: 'Learning, slowly. Currently losing to it.' },
      { name: 'Chiptunes (viciosul_sid)', note: 'Made in stretches. The reason this site sounds like it looks.' },
    ],
  },
];
