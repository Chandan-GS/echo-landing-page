import Link from 'next/link';
import { BrandOrb } from './Mascot';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="brand" href="/#top" aria-label="Echo home">
              <BrandOrb />
              Echo
            </Link>
            <p>
              Echo, the sound sprite — a calm daily briefing that captures your notifications,
              messages and calendar and reads your day aloud. Private by default.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Product</h4>
              <a href="/#briefing">Daily briefing</a>
              <a href="/#ask">Ask Echo</a>
              <a href="/#engine">On-device AI</a>
              <a href="/#get">Get the app</a>
            </div>
            <div className="foot-col">
              <h4>Trust</h4>
              <Link href="/privacy/">Privacy Policy</Link>
              <Link href="/privacy/#data">Data we access</Link>
              <Link href="/privacy/#deletion">Delete your data</Link>
              <a href="mailto:privacy@echo.app">Contact</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Echo. All rights reserved.</span>
          <span>
            Made calmly. Google Play and the Google Play logo are trademarks of Google LLC.
          </span>
        </div>
      </div>
    </footer>
  );
}
