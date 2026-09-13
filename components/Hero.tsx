import Image from 'next/image';
import Mascot from './Mascot';
import Reveal from './Reveal';
import PlayBadge from './PlayBadge';
import { CheckIcon } from './icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <Reveal as="span" className="eyebrow">
            Your private morning briefing
          </Reveal>
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

        <div className="hero-visual">
          <Mascot />
          <Reveal className="hero-phone" as="div">
            <Image
              src="/home.jpeg"
              alt="Echo Home on a dark screen: a serif 'Good evening, Chandan' greeting, '101 notifications captured today', a live 'Next Briefing in 10:02:54 at 7:00 AM' countdown, and a 'Play Today's Briefing' card."
              width={720}
              height={1560}
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
