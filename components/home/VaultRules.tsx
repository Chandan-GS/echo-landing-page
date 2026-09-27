'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

// The demo day's Vault: 21 so far, with its top three apps.
const HOURS = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 2, 4, 2, 5, 3, 0, 0];
const WEEK = [52, 71, 38, 64, 58, 29, 21];
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const AVG = Math.round(WEEK.slice(0, 6).reduce((a, b) => a + b, 0) / 6);
const APPS = ['WhatsApp', 'Slack', 'Gmail', 'Calendar', 'LinkedIn'];

export default function VaultRules() {
  const [off, setOff] = useState<string[]>(['LinkedIn']);
  const toggle = (app: string) => setOff((o) => (o.includes(app) ? o.filter((x) => x !== app) : [...o, app]));

  return (
    <section className="section">
      <Reveal className="wrap center">
        <p className="kicker">The Vault</p>
        <h2>Your week, your rules.</h2>
        <p className="body">
          See when your phone was loudest and who it was. Switch an app off and Echo leaves it out of
          your briefing, your list and your answers.
        </p>
      </Reveal>
      <div className="wrap pair">
        <Reveal className="pair-item">
          <div className="card week">
            <div className="wk-top">
              <div>
                <div className="wk-num">21</div>
                <div className="wk-lbl">today, so far</div>
              </div>
              <div className="wk-apps">
                {[['WhatsApp', 7], ['Slack', 4], ['Gmail', 3]].map(([app, n]) => (
                  <div className="wk-app" key={app}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/icons/${app}.png`} alt={String(app)} width={30} height={30} />
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div className="hours" aria-hidden="true">
              {HOURS.map((v, i) => (
                <i key={i} className={v >= 3 ? 'hi' : ''} style={{ height: Math.max(3, (v / 5) * 84) }} />
              ))}
            </div>
            <div className="axis"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div>
            <div className="days" aria-hidden="true">
              {WEEK.map((v, i) => (
                <i key={i} className={i === 6 ? 'today' : ''} style={{ height: (v / 80) * 64 }} />
              ))}
              <div className="avg" style={{ bottom: (AVG / 80) * 64 }}><span>avg {AVG}</span></div>
            </div>
            <div className="day-lbls">{DAYS.map((d, i) => <span key={i}>{d}</span>)}</div>
          </div>
          <div className="cap"><b>Seven days, kept as counts.</b><span>Today’s top apps, and the week against its average.</span></div>
        </Reveal>
        <Reveal className="pair-item">
          <div className="list">
            {APPS.map((app) => {
              const on = !off.includes(app);
              return (
                <div className={`li ${on ? '' : 'off'}`} key={app}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/${app}.png`} alt="" width={34} height={34} />
                  <div><b>{app}</b><small>{on ? 'Heard this week' : 'Left out of briefings'}</small></div>
                  <button className={`sw ${on ? 'on' : ''}`} onClick={() => toggle(app)} role="switch" aria-checked={on} aria-label={`Hear ${app}`} />
                </div>
              );
            })}
          </div>
          <div className="cap"><b>You choose what it hears.</b><span>Flip a switch and try it.</span></div>
        </Reveal>
      </div>
    </section>
  );
}
