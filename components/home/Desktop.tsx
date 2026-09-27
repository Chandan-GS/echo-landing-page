import Image from 'next/image';
import Reveal from '../Reveal';
import { AppleIcon, WindowsIcon } from '../icons';
import { MAC_DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from '../download';

export default function Desktop() {
  return (
    <section className="section" id="desktop">
      <Reveal className="wrap center">
        <p className="kicker">And on your desktop</p>
        <h2>Your phone shares your day with your desktop.</h2>
        <p className="body">
          Same briefing, same list, a bigger screen. They find each other on your Wi&#8209;Fi, with no
          server in between.
        </p>
      </Reveal>
      <div className="wrap">
        <Reveal className="laptop">
          <div className="scr">
            <Image src="/mac-today.png" alt="Echo's Today screen on a desktop: the briefing transcript with highlighted times, the next-briefing countdown and the Echo Engine status." width={2376} height={1555} />
          </div>
          <div className="base" />
        </Reveal>
        <div className="desk-row">
          <Reveal className="desk-shot">
            <Image src="/mac-ask.png" alt="Ask Echo on a desktop, answering with the local notifications it used." width={2376} height={1555} />
          </Reveal>
          <Reveal className="desk-copy">
            <h3>Your desktop does the thinking.</h3>
            <p className="body">A larger model runs on your computer, so briefings and answers come back faster and fuller. Ask from the keyboard, right where you work.</p>
          </Reveal>
        </div>
        <div className="desk-row flip">
          <Reveal className="desk-shot">
            <Image src="/mac-vault.png" alt="The Vault on a desktop: a category chart and every captured notification, filterable by app." width={2376} height={1555} />
          </Reveal>
          <Reveal className="desk-copy">
            <h3>The whole Vault, on a big screen.</h3>
            <p className="body">Every notification Echo heard, by app and by category, with room to look around.</p>
          </Reveal>
        </div>
        <Reveal className="desk-cta">
          <a className="pill" href={MAC_DOWNLOAD_URL}><AppleIcon className="material-icon" />Download for Mac</a>
          <a className="pill" href={WINDOWS_DOWNLOAD_URL}><WindowsIcon className="material-icon" />Download for Windows</a>
        </Reveal>
      </div>
    </section>
  );
}
