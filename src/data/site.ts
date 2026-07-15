// Site-wide constants: nav, social links, and the Formspree form id.
// Edit these instead of hunting through page markup.

export const site = {
  name: 'Alexandru Badiu',
  // The id from the Formspree form (the part after /f/ in the endpoint).
  formspreeId: 'xnjejnlo',
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
  { label: 'Contact', href: '/#contact' },
];
