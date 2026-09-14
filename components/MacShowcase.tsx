import Image from 'next/image';
import Reveal from './Reveal';
import { AppleIcon, WindowsIcon } from './icons';
import { DESKTOP_DOWNLOAD_URL } from './download';

export default function MacShowcase() {
  return (
    <section className="section mac-showcase" id="mac">
      <div className="wrap">
        <Reveal className="section-head center">
          <h2 className="section-h2">Echo, right on your computer.</h2>
          <p className="section-desc">
            Available for Mac and Windows. The same calm briefings and Ask Echo, now with a
            bigger local model and a real three-pane workspace. Your phone finds it automatically
            on the same Wi-Fi — nothing ever leaves your network.
          </p>
        </Reveal>

        <Reveal className="mac-hero">
          <div className="mac-device">
            <Image src="/mac-today.png" alt="Echo's Today screen on macOS: a morning briefing transcript with highlighted times, a next-briefing countdown, streak, and Echo Engine status in the sidebar." width={2376} height={1555} />
          </div>
        </Reveal>

        <Reveal className="mac-row">
          <div className="mac-device small">
            <Image src="/mac-vault.png" alt="The Vault on macOS: a category donut chart and a flat list of captured notifications, filterable by app." width={2376} height={1555} />
          </div>
          <div className="mac-device small">
            <Image src="/mac-ask.png" alt="Ask Echo on macOS answering a weather question, citing the local notifications it used." width={2376} height={1555} />
          </div>
        </Reveal>

        <Reveal className="mac-cta">
          <a className="btn btn-green" href={DESKTOP_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            <AppleIcon className="material-icon" /> Download for Mac
          </a>
          <a className="btn btn-green" href={DESKTOP_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            <WindowsIcon className="material-icon" /> Download for Windows
          </a>
        </Reveal>
      </div>
    </section>
  );
}
