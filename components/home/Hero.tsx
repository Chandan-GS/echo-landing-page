import PlayBadge from '../PlayBadge';
import { LaptopIcon } from '../icons';
import FilmButton from './FilmButton';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="greet">Your phone never stops talking.</p>
          <h1>Echo tells you what matters.</h1>
          <p className="lede">
            It reads your notifications from WhatsApp, Slack, Teams, Gmail and the rest, then gives you
            one short briefing, shows who’s waiting on you, and turns what people ask into to&#8209;dos
            with reminders. On your phone and your desktop.
          </p>
          <FilmButton />
          <div className="hero-get">
            <PlayBadge height={54} />
            <a className="textlink" href="#desktop">
              <LaptopIcon className="material-icon" /> Mac and Windows coming soon
            </a>
          </div>
          <p className="trust">Free. No account. Private by default.</p>
        </div>
        {/* Echo starts here, then follows you down the page (EchoGuide). */}
        <div className="hero-echo-anchor" aria-hidden="true" />
      </div>
    </section>
  );
}
