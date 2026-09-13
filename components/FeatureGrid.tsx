import type { ReactNode } from 'react';
import Reveal from './Reveal';
import {
  WaveIcon,
  ChatIcon,
  PieIcon,
  BoltIcon,
  MicIcon,
  LockIcon,
} from './icons';

const cards: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <WaveIcon />,
    title: 'Spoken briefings',
    body: 'A short daily audio summary at the time you choose, read aloud by natural text-to-speech.',
  },
  {
    icon: <ChatIcon />,
    title: 'Ask Echo',
    body: 'A chat and voice assistant that answers questions about your day from your own captured history.',
  },
  {
    icon: <PieIcon />,
    title: 'The Vault',
    body: 'Browse and categorize every captured notification, with an interactive pie-chart breakdown of your day.',
  },
  {
    icon: <BoltIcon />,
    title: 'Streaks & widgets',
    body: 'A home-screen calendar widget, tap-to-play notifications and a streak that celebrates your daily habit.',
  },
  {
    icon: <MicIcon />,
    title: 'Four voices, your accent',
    body: 'Choose Aria, Sage, Atlas or Nova across multiple English accents, and set the speaking speed.',
  },
  {
    icon: <LockIcon />,
    title: 'Private by design',
    body: 'On-device processing, no third-party trackers, no ads. Your vault lives on your phone, under your control.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="sec" style={{ background: '#FBFAF7' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Everything in Echo</span>
          <h2>Small app. Big, calm day.</h2>
          <p>A focused set of features designed to reduce the noise — not add to it.</p>
        </Reveal>
        <div className="fgrid">
          {cards.map((card) => (
            <Reveal className="fcard" key={card.title}>
              <div className="ic">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
