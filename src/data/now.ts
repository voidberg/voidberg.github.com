// The "now" block on the landing page. Edit the entries here; the page just
// maps over them. `updated` is printed next to the section heading, so bump it
// whenever the text below stops being true.

export const nowUpdated = 'July 2026';

export interface NowItem {
  /** Short pixel-font label in the left column. Keep it to one word. */
  label: string;
  /** One or two sentences. Inline HTML (a link, an <em>) is allowed. */
  body: string;
}

export const now: NowItem[] = [
  {
    label: 'WORK',
    body:
      "Between roles since BENlabs wound down earlier this year. Looking for a senior IC or engineering leadership role. I do my best work close to the product and the people using it. If you're a charity or nonprofit and I can help, that too. <a href='/contact'>Get in touch</a> if that sounds like your team.",
  },
  {
    label: 'MAKING',
    body:
      'Learning Go and Swift, and finally building the things I never had time for. <a href="https://github.com/voidberg/instakobo">InstaKobo</a> and InstaRM for read-later, <a href="https://github.com/voidberg/incunable">Incunable</a> for EPUBs, and Zare, a bookmarking tool that surfaces connections between the things I save and reminds me about the concert I bookmarked four months ago.',
  },
  {
    label: 'READING',
    body:
      'Slowly chipping away at a large Instapaper backlog with the help of <a href="https://github.com/voidberg/instakobo">InstaKobo</a> (and soon, InstaRM), dogfooding my own tools while I\'m at it.',
  },
  {
    label: 'MUSIC',
    body:
      "Trying to learn (again) to play the theremin. If you have no idea what that is, it's the first electronic instrument, with a <a href='https://daily.redbullmusicacademy.com/2017/10/theremin-instrumental-instruments?linkId=46895622'>fascinating</a> <a href='https://www.perfectcircuit.com/signal/theremin-history'>history</a>. It also sounds, according to a YouTube comment, like 'dead people singing'. Also making music with odd things such as GameBoys and Commodore SID chips.",
  },
];
