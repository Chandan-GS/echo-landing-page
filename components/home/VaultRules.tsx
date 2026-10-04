'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

// The film's Vault: the week to Sunday 4 October, 48 so far today, as the
// app's week card draws it (lib/features/vault/presentation/widgets/week_card.dart).
const APPS = ['WhatsApp', 'Slack', 'Teams', 'Gmail', 'GitHub', 'LinkedIn'];
const DAYS = [
  { label: 'on Mon, 28 Sep', total: 37, top: [['Slack', 13], ['WhatsApp', 11], ['Gmail', 6]], hours: [0, 0, 0, 0, 0, 0, 0, 1, 3, 5, 6, 4, 3, 2, 3, 4, 2, 1, 1, 1, 1, 0, 0, 0] },
  { label: 'on Tue, 29 Sep', total: 47, top: [['Slack', 17], ['Teams', 12], ['WhatsApp', 9]], hours: [0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 6, 5, 3, 3, 4, 4, 3, 2, 1, 1, 1, 0, 0, 0] },
  { label: 'on Wed, 30 Sep', total: 49, top: [['WhatsApp', 18], ['Slack', 14], ['GitHub', 7]], hours: [0, 0, 0, 0, 0, 0, 0, 2, 3, 5, 6, 4, 4, 3, 4, 5, 4, 3, 2, 2, 1, 1, 0, 0] },
  { label: 'on Thu, 1 Oct', total: 40, top: [['Slack', 15], ['WhatsApp', 10], ['Teams', 8]], hours: [0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 5, 4, 3, 3, 4, 4, 3, 2, 2, 1, 1, 1, 0, 0] },
  { label: 'on Fri, 2 Oct', total: 54, top: [['WhatsApp', 21], ['Slack', 16], ['Gmail', 8]], hours: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 6, 5, 4, 3, 4, 4, 4, 3, 3, 2, 2, 1, 0, 0] },
  { label: 'yesterday', total: 43, top: [['WhatsApp', 26], ['Gmail', 7], ['Slack', 5]], hours: [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 5, 5, 4, 3, 3, 4, 3, 3, 2, 2, 1, 0, 0] },
  { label: 'today, so far', total: 48, top: [['WhatsApp', 15], ['Slack', 11], ['Teams', 6]], hours: [0, 0, 0, 0, 0, 0, 0, 3, 9, 14, 17, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], upTo: 11 },
];
const LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const TODAY = DAYS.length - 1;
const PEAK = Math.max(...DAYS.map((d) => d.total));
const AVG = DAYS.slice(0, TODAY).reduce((a, d) => a + d.total, 0) / TODAY;
const AREA = 64; // the day bars' area, as in the app
const HOURS_H = 74;

export default function VaultRules() {
  const [off, setOff] = useState<string[]>(['LinkedIn']);
  const [sel, setSel] = useState(TODAY);
  const day = DAYS[sel];
  const upTo = day.upTo ?? 23;
  const shown = day.hours.slice(0, upTo + 1);
  const hourPeak = Math.max(1, ...shown);
  const hot = [...shown].sort((a, b) => b - a).slice(0, 3).filter((n) => n > 0);
  const toggle = (app: string) => setOff((o) => (o.includes(app) ? o.filter((x) => x !== app) : [...o, app]));

  return (
    <section className="section">
      <Reveal className="wrap center">
        <p className="kicker">The Vault</p>
        <h2>Everything it heard. Your rules.</h2>
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
                <div className="wk-num swap" key={`n${sel}`}>{day.total}</div>
                <div className="wk-lbl">{day.label}</div>
              </div>
              <div className="wk-apps swap" key={`a${sel}`}>
                {day.top.map(([app, n]) => (
                  <div className="wk-app" key={app}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/icons/${app}.png`} alt={String(app)} width={30} height={30} />
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div className="hours" aria-hidden="true">
              {day.hours.map((v, h) =>
                h > upTo ? (
                  <i key={h} className="later" />
                ) : (
                  <i key={h} className={hot.includes(v) ? 'hi' : ''} style={{ height: Math.max(3, (v / hourPeak) * HOURS_H) }} />
                )
              )}
            </div>
            <div className="axis"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div>
            <div className="wk-rule" />
            <div className="days">
              {DAYS.map((d, i) => (
                <button key={i} className={`${i === sel ? 'on' : ''} ${i === TODAY ? 'today' : ''}`} onClick={() => setSel(i)} aria-pressed={i === sel} aria-label={`${d.total} notifications ${d.label}`}>
                  <i style={{ height: Math.max(6, (d.total / PEAK) * (AREA - 6)) }} />
                  <span>{LETTERS[i]}</span>
                </button>
              ))}
              <div className="avg" style={{ bottom: 18 + (AVG / PEAK) * (AREA - 6) }}>
                <span>avg {Math.round(AVG)}</span>
              </div>
            </div>
          </div>
          <div className="cap"><b>Seven days, kept as counts.</b><span>Tap a day to see when it was loudest, and who.</span></div>
        </Reveal>
        <Reveal className="pair-item">
          <div className="list">
            {APPS.map((app) => {
              const on = !off.includes(app);
              return (
                <div className={`li ${on ? '' : 'off'}`} key={app}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/${app}.png`} alt="" width={38} height={38} />
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
