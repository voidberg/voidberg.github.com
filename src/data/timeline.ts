// The bio timeline. Newest first. Set `current: true` for the green "now" dot.

export interface TimelineEntry {
  when: string;
  current?: boolean;
  text: string;
}

export const timeline: TimelineEntry[] = [
  {
    when: 'NOW · 2026',
    current: true,
    text: "Between roles. BENlabs shut down in May 2026 after about thirteen years, so I'm looking for the next senior engineering or leadership role. In the meantime I'm reviving a few old open-source projects and finally writing some of it down.",
  },
  {
    when: '2012–2026',
    text: 'Corbis, which became BENlabs. Grew from front-end developer through Development Lead, Senior Development Manager and Director to Senior Director of Engineering. Led engineering across five countries and kept building alongside the leadership work: Spotlight (AI content recognition) and Watch (media measurement on Snowflake) both came out of this stretch.',
  },
  {
    when: 'Earlier',
    text: 'Demotix, a global citizen-journalism newswire that mattered during moments like the Bahrain media blackout, and the rebuild of Corbis Images, one of the largest image-licensing platforms around at the time. This is where the front-end work turned into building whole systems.',
  },
  {
    when: '2008',
    text: 'Cofounded the Romanian Drupal Association. A small group trying to take an open-source community that mostly lived on IRC and forums and give it something with a physical address. It taught me that organisations are mostly the boring parts: paying for things, showing up, and writing the email no one wants to write.',
  },
  {
    when: 'Early 2000s',
    text: "Started out writing PHP and being convinced I had the web figured out. I hadn't, but the conviction was useful; it kept me building through the years where I should probably have stopped to read more docs. Taught CS as a teaching assistant on the side, which is where I first learned that explaining a thing twice teaches you more than building it once.",
  },
];
