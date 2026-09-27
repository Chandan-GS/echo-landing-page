import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from '../Reveal';
import { ArrowIcon, BarChartIcon, BlockIcon, CloudIcon, DeviceIcon } from '../icons';

const ROWS: { icon: ReactNode; title: string; sub: string; on: boolean }[] = [
  { icon: <DeviceIcon className="material-icon" />, title: 'On-device engine', sub: 'Runs on your phone. Nothing leaves it.', on: true },
  { icon: <CloudIcon className="material-icon" />, title: 'Cloud engine', sub: 'Faster answers from Gemini, if you turn it on.', on: false },
  { icon: <BarChartIcon className="material-icon" />, title: 'Anonymous usage counts', sub: 'Which features get used. Never your content.', on: true },
  { icon: <BlockIcon className="material-icon" />, title: 'Ads and trackers', sub: 'None, ever.', on: false },
];

/** Privacy, shown as the settings you get on day one. */
export default function PrivacySettings() {
  return (
    <section className="section" id="privacy">
      <div className="wrap split">
        <Reveal>
          <p className="kicker">Private by default</p>
          <h2>Your day is nobody’s business but yours.</h2>
          <p className="body">Echo reads sensitive things, so it keeps them on your devices. This is exactly what’s on and off the day you install it.</p>
          <p className="policy-link">
            <Link className="textlink" href="/privacy/">Read the full privacy policy <ArrowIcon className="material-icon" /></Link>
          </p>
        </Reveal>
        <Reveal className="list">
          {ROWS.map((r) => (
            <div className="li" key={r.title}>
              <span className="ic">{r.icon}</span>
              <div><b>{r.title}</b><small>{r.sub}</small></div>
              <span className={`sw ${r.on ? 'on' : ''}`} role="img" aria-label={r.on ? 'On' : 'Off'} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
