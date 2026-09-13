import Link from 'next/link';
import Reveal from './Reveal';
import { DecoRings } from './Mascot';
import { PhoneLockIcon, NoAdsLockIcon, TrashIcon } from './icons';

export default function PrivacyBand() {
  return (
    <section className="sec" id="privacy">
      <div className="wrap">
        <Reveal className="privacy">
          <DecoRings />
          <span className="eyebrow">Privacy first — not as an afterthought</span>
          <h2>Your day is nobody&apos;s business but yours.</h2>
          <p className="p-lede">
            Echo reads sensitive things — your messages, your calendar, your notifications. So we
            built it to keep them where they belong: on your phone. Nothing is sent anywhere unless
            you deliberately turn on the optional cloud engine.
          </p>
          <div className="privacy-grid">
            <div className="p-item">
              <div className="pic">
                <PhoneLockIcon />
              </div>
              <h3>Stays on-device</h3>
              <p>
                By default, every briefing is generated locally with an on-phone model. No servers
                involved.
              </p>
            </div>
            <div className="p-item">
              <div className="pic">
                <NoAdsLockIcon />
              </div>
              <h3>No ads, no tracking</h3>
              <p>
                No advertising SDKs and no third-party analytics profiling you. Your data isn&apos;t
                the product.
              </p>
            </div>
            <div className="p-item">
              <div className="pic">
                <TrashIcon />
              </div>
              <h3>You&apos;re in control</h3>
              <p>
                Your captured history lives in a local vault you can browse — and clear whenever you
                like.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link
              className="btn btn-ghost"
              href="/privacy/"
              style={{
                background: 'rgba(255,255,255,.1)',
                color: '#fff',
                borderColor: 'rgba(255,255,255,.2)',
              }}
            >
              Read the full privacy policy →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
