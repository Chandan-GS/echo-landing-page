import Image from 'next/image';
import Reveal from '../Reveal';
import { AppleIcon, WindowsIcon } from '../icons';
import ComingSoon from '../ComingSoon';

// Stills from the film's desktop recordings (2880×1800).
const ROWS = [
  {
    src: '/desk-triage.jpg',
    alt: 'Echo’s Today on a desktop: Priya’s message open, a suggested reply picked and ready to send.',
    title: 'Clear your day from the keyboard.',
    body: 'Move down the list with J and K, pick a suggested reply, and send it with ⌘↵. It goes out through your phone, from your own account.',
  },
  {
    src: '/desk-palette.jpg',
    alt: 'The ⌘K palette on a desktop, with “Catch me up on College gang” typed in.',
    title: '⌘K. Ask from anywhere.',
    body: 'One shortcut to ask Echo anything, reply to someone, or add a to-do, wherever you are in the app.',
  },
  {
    src: '/desk-ask.jpg',
    alt: 'Ask Echo on a desktop, answering with a Sources pane of the Slack and GitHub messages it used.',
    title: 'Every answer, with its sources.',
    body: 'The messages behind an answer sit beside it, so you can check them and reply from right there.',
  },
  {
    src: '/desk-todo.jpg',
    alt: 'The To-do board on a desktop, with Today, Tomorrow and Later columns.',
    title: 'One list, on both screens.',
    body: 'Drag a to-do to tomorrow, or tick one off. Your phone follows a moment later.',
  },
  {
    src: '/desk-vault.jpg',
    alt: 'The Vault on a desktop: every notification Echo heard, filtered to Slack.',
    title: 'The whole Vault, on a big screen.',
    body: 'Everything Echo heard, searchable and filterable by app, with room to look around.',
  },
];

export default function Desktop() {
  return (
    <section className="section" id="desktop">
      <Reveal className="wrap center">
        <p className="kicker">And on your desktop</p>
        <h2>Your phone shares your day with your desktop.</h2>
        <p className="body">
          A workspace for getting through what came in, not your phone made bigger. They find each
          other on your Wi&#8209;Fi, with no server in between.
        </p>
      </Reveal>
      <div className="wrap">
        <Reveal className="laptop">
          <div className="scr">
            <Image src="/desk-today.jpg" alt="Echo’s Today on a desktop: who is waiting on you on the left, Rohan’s message open with suggested replies, and the rest of the day on the right." width={2880} height={1800} priority={false} />
          </div>
          <div className="base" />
        </Reveal>
        {ROWS.map((r, i) => (
          <div className={`desk-row ${i % 2 ? 'flip' : ''}`} key={r.src}>
            <Reveal className="desk-shot">
              <Image src={r.src} alt={r.alt} width={2880} height={1800} />
            </Reveal>
            <Reveal className="desk-copy">
              <h3>{r.title}</h3>
              <p className="body">{r.body}</p>
            </Reveal>
          </div>
        ))}
        <Reveal className="desk-cta">
          <ComingSoon className="pill" soon="Mac app coming soon"><AppleIcon className="material-icon" />Download for Mac</ComingSoon>
          <ComingSoon className="pill" soon="Windows app coming soon"><WindowsIcon className="material-icon" />Download for Windows</ComingSoon>
        </Reveal>
      </div>
    </section>
  );
}
