import Reveal from './Reveal';
import PlayBadge from './PlayBadge';
import DownloadButton from './DownloadButton';
import { MAC_DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from './download';

/** The page ends like the film: Echo, the name, one line, and how to get it. */
export default function FinalCTA() {
  return (
    <section className="section end" id="get">
      <div className="wrap">
        {/* Echo's journey down the page ends here. */}
        <div className="final-echo-anchor" aria-hidden="true" />
        <Reveal className="word">Echo</Reveal>
        <Reveal className="tag">Your day, heard.</Reveal>
        <Reveal className="end-get">
          <PlayBadge height={64} />
          <div className="qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/play-qr.svg" alt="QR code for Echo on Google Play" width={104} height={104} />
            Scan to download
          </div>
        </Reveal>
        <Reveal className="end-desk">
          On your computer too:
          <a href={MAC_DOWNLOAD_URL}>Mac</a>
          <a href={WINDOWS_DOWNLOAD_URL}>Windows</a>
          <DownloadButton className="end-install" ariaLabel="How to install Echo">How to install</DownloadButton>
        </Reveal>
      </div>
    </section>
  );
}
