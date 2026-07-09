// The "Community & talks" list on the bio page.
// `date` is a short label (year, count, or "various" where the exact date isn't pinned).

export interface CommunityItem {
  date: string;
  title: string;
  meta: string;
}

export const community: CommunityItem[] = [
  { date: '2008', title: 'Cofounded the Romanian Drupal Association', meta: 'Community' },
  { date: '7 yrs', title: 'University teaching assistant, computer science', meta: 'Teaching' },
  { date: 'various', title: 'Speaker at DrupalCamps, BucharestJS and others', meta: 'Talks' },
  { date: 'various', title: 'Grand Prize, Yahoo Open Hackathon Bucharest', meta: 'Award' },
  { date: '16', title: 'Drupal modules published; Drupal core contributor', meta: 'Open source' },
];
