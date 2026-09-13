import Link from 'next/link';
import { HeroMascot } from './Mascot';
import GooglePlayButton from './GooglePlayButton';
import { ShieldIcon, CheckCircleIcon, PhoneIcon } from './icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <HeroMascot />

        <h1>
          Wake up to a briefing <em>made just for you.</em>
        </h1>
        <p className="lede">
          Echo quietly gathers your notifications, messages and calendar through the day, then hands
          you a calm, spoken summary each morning — so you start the day informed without touching
          your phone.
        </p>

        <div className="cta-row" id="get">
          <GooglePlayButton />
          <a className="btn btn-ghost" href="#briefing">
            See how it works
          </a>
        </div>
        <p className="fine">
          Free to start · No account required · Works fully offline. By installing you agree to our{' '}
          <Link href="/privacy/">Privacy Policy</Link>.
        </p>

        <div className="trust-row">
          <span>
            <ShieldIcon /> Private by default
          </span>
          <span>
            <CheckCircleIcon /> No ads, no tracking
          </span>
          <span>
            <PhoneIcon /> Runs on your device
          </span>
        </div>
      </div>
    </section>
  );
}
