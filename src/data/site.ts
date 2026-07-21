// Site-wide constants: nav, contact address and social links.
// Edit these instead of hunting through page markup.

export const site = {
  name: 'Alexandru Badiu',
  // Published on /contact as a mailto link.
  email: 'hello@badiu.me',
  socials: {
    github: 'https://github.com/voidberg',
    linkedin: 'https://www.linkedin.com/in/alexandrubadiu',
    soundcloud: 'https://soundcloud.com/viciosul_sid',
    drupal: 'https://www.drupal.org/u/voidberg',
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
