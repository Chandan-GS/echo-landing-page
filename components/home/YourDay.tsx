'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import { CheckIcon, ChevronRightIcon, ExpandIcon } from '../icons';

// The same evening as the film and the recordings.
const STOPS = [
  { at: 8, when: '10:30 PM', title: 'Call Mom back', sub: 'In 29 min · Mom, WhatsApp', label: 'up' },
  { at: 58, when: '11 AM', title: 'Design review', sub: 'Tomorrow · Google Meet', label: 'up' },
  { at: 86, when: '8:30 PM', title: 'Dinner with Rohan at Toit', sub: 'Tomorrow · Rohan, WhatsApp', label: 'up' },
  { at: 94, when: '10 PM', title: 'Pick Arjun up', sub: 'Tomorrow · Arjun, WhatsApp', label: 'down' },
];

const TODOS = [
  { title: 'Call Mom back', when: '10:30 PM', who: 'Mom, WhatsApp' },
  { title: 'Send Karan the Q3 deck', when: 'Anytime', who: 'Karan, Slack' },
  { title: 'Send Kabir your share of the rent', when: 'Anytime', who: 'Flatmates, WhatsApp' },
];

export default function YourDay() {
  const [stop, setStop] = useState(0);
  const [done, setDone] = useState<number[]>([]);
  const [gone, setGone] = useState<number[]>([]);
  const s = STOPS[stop];
  const doneCount = 1 + done.length; // one was already done today

  const tick = (i: number) => {
    if (done.includes(i)) return;
    setDone((d) => [...d, i]);
    window.dispatchEvent(new Event('echo:happy'));
    // Like the app: the tick plays out, then the row folds away.
    setTimeout(() => setGone((g) => [...g, i]), 700);
  };

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="split head-split">
          <div>
            <p className="kicker">Then, your day</p>
            <h2>Everything with a time. Everything to do.</h2>
          </div>
          <p className="body">
            Your next few hours sit on one line. One tap turns the briefing into a list of real tasks,
            with who asked and when. Tick them off in the app, or from your home screen.
          </p>
        </Reveal>
        <div className="pair">
          <Reveal className="pair-item">
            <div className="card dayline">
              <div className="dl-when">{s.when}</div>
              <div className="dl-title">{s.title}</div>
              <div className="dl-sub">{s.sub}</div>
              <div className="dl-line">
                <div className="dl-track" />
                <div className="dl-now" />
                <div className="dl-mid" style={{ left: '24%' }} />
                <span className="dl-lab down" style={{ left: '24%' }}>Tomorrow</span>
                {STOPS.map((x, i) => (
                  <span key={x.when}>
                    <span className={`dl-lab ${x.label}`} style={{ left: `${x.at}%` }}>{x.when}</span>
                    <button className={`dl-stop ${i === stop ? 'on' : ''}`} style={{ left: `${x.at}%` }} onClick={() => setStop(i)} aria-label={x.title} />
                  </span>
                ))}
              </div>
              <div className="dl-list">
                {STOPS.map((x, i) => (
                  <button key={x.when} className={`dl-item ${i === stop ? 'on' : ''}`} onClick={() => setStop(i)}>
                    <span className="when">{x.when}</span>
                    <span className="what">{x.title}</span>
                    <span className="day">{i === 0 ? 'Tonight' : 'Tomorrow'}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="cap"><b>Your day, as a line.</b><span>Everything with a time, until the end of tomorrow.</span></div>
          </Reveal>
          <Reveal className="pair-item">
            <div className="card todo">
              <div className="todo-head">
                <div>
                  <h4>Today</h4>
                  <div className="left">{4 - doneCount} of 4 left</div>
                </div>
                <svg className="todo-ring" viewBox="0 0 46 46" aria-hidden="true">
                  <circle cx="23" cy="23" r="19" fill="none" stroke="#333" strokeWidth="4" />
                  <circle cx="23" cy="23" r="19" fill="none" stroke="#5CA363" strokeWidth="4" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset={119.4 * (1 - doneCount / 4)} transform="rotate(-90 23 23)" style={{ transition: 'stroke-dashoffset .5s ease' }} />
                  <text x="23" y="28" textAnchor="middle">{doneCount}</text>
                </svg>
              </div>
              <div className="todo-rows">
                {TODOS.map((t, i) => (
                  <div key={t.title} className={`todo-row ${done.includes(i) ? 'done' : ''} ${gone.includes(i) ? 'gone' : ''}`}>
                    <button className="tick" onClick={() => tick(i)} aria-label={`Mark "${t.title}" done`}>
                      <CheckIcon className="material-icon" />
                    </button>
                    <div>
                      <div className="todo-t">{t.title}</div>
                      <div className="todo-m"><b>{t.when}</b> · {t.who}</div>
                    </div>
                    <ExpandIcon className="material-icon todo-x" />
                  </div>
                ))}
              </div>
              <div className="todo-foot"><span>See all 4 for today</span><ChevronRightIcon className="material-icon" /></div>
              <div className="tomorrow"><b>Tomorrow</b> 5 things, starting with design review</div>
            </div>
            <div className="cap"><b>Then, a to-do list.</b><span>Go on, tick one off.</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
