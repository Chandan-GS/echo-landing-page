import Link from 'next/link';
import Reveal from './Reveal';
import { DecoRings } from './Mascot';
import { DeviceIcon, VisibilityOffIcon, LockIcon } from './icons';

export default function PrivacyBand() {
  return (
    <section className="section" id="privacy">
      <div className="wrap">
        <Reveal className="privacy-band">
          <DecoRings />
          <h2>Your day is nobody&apos;s business but yours.</h2>
          <p className="lede">
            Echo reads sensitive things — your messages, your calendar, your notifications. So it
            keeps them where they belong: on your phone. Nothing is sent anywhere unless you
            deliberately turn on the optional cloud engine.
          </p>
          <div className="privacy-grid">
            <div className="pcard">
              <div className="picon">
                <DeviceIcon className="material-icon" />
              </div>
              <h3>Stays on-device</h3>
              <p>By default, every briefing is generated locally with an on-phone model. No servers involved.</p>
            </div>
            <div className="pcard">
              <div className="picon">
                <VisibilityOffIcon className="material-icon" />
              </div>
              <h3>No ads, no tracking</h3>
              <p>No advertising SDKs and no third-party analytics profiling you. Your data isn&apos;t the product.</p>
            </div>
            <div className="pcard">
              <div className="picon">
                <LockIcon className="material-icon" />
              </div>
              <h3>You&apos;re in control</h3>
              <p>Your captured history lives in a local vault you can browse — and clear whenever you like.</p>
            </div>
          </div>
          <Link className="btn" href="/privacy/">
            Read the full privacy policy
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
