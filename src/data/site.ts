// Site-wide constants: nav, social links, and the Formspree form id.
// Edit these instead of hunting through page markup.

export const site = {
  name: 'Alexandru Badiu',
  // Replace with the id from your Formspree form (looks like "abcdwxyz").
  // Until then the contact form shows a graceful error on submit.
  formspreeId: 'YOUR_FORM_ID',
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
  { label: 'Bio', href: '/bio' },
  { label: 'Now', href: '/now' },
  { label: 'Projects', href: '/projects' },
  { label: 'Uses', href: '/uses' },
  { label: 'Contact', href: '/contact' },
];
