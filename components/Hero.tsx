import Reveal from './Reveal';
import PlayBadge from './PlayBadge';
import { CheckIcon } from './icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <Reveal as="h1">
            Wake up <em>already caught up.</em>
          </Reveal>
          <Reveal as="p" className="hero-sub">
            Echo captures your notifications, messages and calendar all day — then reads you one calm,
            spoken briefing every morning. No scrolling. Nothing missed.
          </Reveal>

          <Reveal className="hero-cta">
            <PlayBadge height={54} />
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </Reveal>

          <Reveal className="hero-trust">
            <span>
              <CheckIcon className="material-icon" /> Private by default
            </span>
            <span>
              <CheckIcon className="material-icon" /> Runs on your device
            </span>
            <span>
              <CheckIcon className="material-icon" /> No account · Free
            </span>
          </Reveal>
        </div>

        {/* Echo lives here in the hero, then follows the scroll (EchoGuide). */}
        <div className="hero-visual" aria-hidden="true" />
      </div>
    </section>
  );
}
