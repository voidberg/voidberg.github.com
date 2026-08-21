// Site-wide constants: nav, contact address and social links.
// Edit these instead of hunting through page markup.

export const site = {
  name: 'Alexandru Badiu',
  // Published on /contact as a mailto link.
  email: 'hello@badiu.me',
  socials: {
    github: 'https://github.com/voidberg',
    linkedin: 'https://www.linkedin.com/in/alexandrubadiu',
    soundcloud: 'https://soundcloud.com/undescurte',
    spotify: 'https://open.spotify.com/artist/57z3BQ5hNMk22FrnUaVC9H',
    appleMusic: 'https://music.apple.com/gb/artist/unde-scurte/6798263439',
    drupal: 'https://www.drupal.org/u/voidberg',
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Now', href: '/now' },
  { label: 'Devlog', href: '/devlog' },
  { label: 'Articles', href: '/articles' },
  { label: 'Projects', href: '/projects' },
  { label: 'Uses', href: '/uses' },
  { label: 'Contact', href: '/contact' },
];
