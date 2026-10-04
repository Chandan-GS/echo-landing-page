'use client';

import { useState, type CSSProperties } from 'react';
import Reveal from '../Reveal';
import { AlarmIcon, CheckCircleIcon, NotificationsIcon, SparkleIcon } from '../icons';
import { AskPill, ProgressRing, ReminderChip, TodoCheck } from './parts';

// The film's to-do list: what people asked, who asked, and when Echo would remind you.
const TODOS = [
  { title: 'Sign off the release notes', when: '5 PM', who: 'Vikram, Slack', at: '4:40 PM' },
  { title: 'Send Karan the deck', when: 'Anytime', who: 'Karan, Slack', at: '9:00 PM' },
  { title: 'Tell Rohan if you’re in for Friday', when: 'Anytime', who: 'Rohan, WhatsApp', at: '9:30 PM' },
  { title: 'Review Mahesh’s pull request', when: 'Anytime', who: 'Mahesh, GitHub', at: '6:00 PM' },
];
/** Already ticked off this morning. */
const EARLIER = 1;

type Note = 'idle' | 'chat' | 'snoozed' | 'done';
type Offer = 'open' | 'accepted' | 'dismissed';

export default function YourDay() {
  const [done, setDone] = useState<number[]>([]);
  const [leaving, setLeaving] = useState<number[]>([]);
  const [gone, setGone] = useState<number[]>([]);
  const [setAt, setSetAt] = useState<number[]>([]);
  const [offer, setOffer] = useState<Offer>('open');
  const [note, setNote] = useState<Note>('idle');
  const left = TODOS.length - done.length;
  const nextAt = TODOS.find((t, i) => !done.includes(i) && t.when !== 'Anytime')?.when;

  const tick = (i: number) => {
    if (done.includes(i)) return;
    setDone((d) => [...d, i]);
    window.dispatchEvent(new Event('echo:happy'));
    // As in the app: the tick plays out for 650 ms, then the row folds away.
    setTimeout(() => setLeaving((g) => [...g, i]), 650);
    setTimeout(() => setGone((g) => [...g, i]), 650 + 340);
  };
  const toggleReminder = (i: number) => setSetAt((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="split head-split">
          <div>
            <p className="kicker">Your list</p>
            <h2>Your to-do list writes itself.</h2>
          </div>
          <p className="body">
            What people ask of you becomes a to-do, with who asked and where. Every to-do can remind
            you, and the reminder opens the exact chat it came from.
          </p>
        </Reveal>
        <div className="pair">
          <Reveal className="pair-item">
            <div className="app-screen stagger">
              {offer !== 'dismissed' && (
                <div className="ask-card offer" style={{ '--i': 0 } as CSSProperties}>
                  {offer === 'accepted' ? (
                    <p className="swap">Done. I’ll remind you before each of them. Tap any bell to change one.</p>
                  ) : (
                    <>
                      <p>
                        Four of your to-dos name a time. Want me to remind you before each? I’ve marked my times with{' '}
                        <SparkleIcon className="material-icon spark" />.
                      </p>
                      <div className="pill-row pill-wrap">
                        <AskPill
                          label="Remind me for all four"
                          icon={NotificationsIcon}
                          filled
                          onClick={() => {
                            setOffer('accepted');
                            setSetAt(TODOS.map((_, i) => i));
                          }}
                        />
                        <AskPill label="Not now" onClick={() => setOffer('dismissed')} />
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="app-head big" style={{ '--i': 1 } as CSSProperties}>
                <div>
                  <h4>Today</h4>
                  <span className="swap" key={left}>
                    {left === 0 ? `All ${TODOS.length + EARLIER} done` : `${left} left${nextAt ? ` · next at ${nextAt}` : ''}`}
                  </span>
                </div>
                <ProgressRing done={done.length + EARLIER} total={TODOS.length + EARLIER} />
              </div>
              <div className="todo-list" style={{ '--i': 2 } as CSSProperties}>
                {TODOS.map((t, i) =>
                  gone.includes(i) ? null : (
                    <div key={t.title} className={`todo-line ${done.includes(i) ? 'done' : ''} ${leaving.includes(i) ? 'leaving' : ''}`}>
                      <div className="todo-in">
                        <TodoCheck done={done.includes(i)} onClick={() => tick(i)} label={`Mark “${t.title}” done`} />
                        <div className="todo-text">
                          <div className="todo-t">{t.title}</div>
                          <div className="todo-m"><b>{t.when}</b> · {t.who}</div>
                        </div>
                        {!done.includes(i) && <ReminderChip at={t.at} set={setAt.includes(i)} onClick={() => toggleReminder(i)} />}
                      </div>
                    </div>
                  )
                )}
                {gone.length === TODOS.length && (
                  <div className="all-done swap">
                    <CheckCircleIcon className="material-icon" />
                    That’s everything for today
                  </div>
                )}
              </div>
              <div className="app-head" style={{ '--i': 3 } as CSSProperties}>
                <div>
                  <h4 className="small">Tomorrow</h4>
                  <span>7 things, starting with the design review</span>
                </div>
              </div>
            </div>
            <div className="cap"><b>A reminder on every to-do.</b><span>Tick one off, or set them all.</span></div>
          </Reveal>
          <Reveal className="pair-item">
            <div className="card reminder">
              <div className="lock">
                <div className="lock-time">9:00</div>
                <div className="lock-date">Sunday, 4 October</div>
                {note === 'chat' ? (
                  <div className="chatview">
                    <div className="ch-head">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/icons/Slack.png" alt="" width={24} height={24} />
                      Karan
                    </div>
                    <div className="bub">Morning! Review is tomorrow at 11.</div>
                    <div className="bub glow">Can you send me the deck before the review?</div>
                    <div className="ch-input">Message Karan</div>
                  </div>
                ) : (
                  <div className={`notif ${note}`}>
                    <div className="n-head">
                      <AlarmIcon className="material-icon" />
                      Echo · now · reminder
                    </div>
                    <b>Send Karan the deck</b>
                    <p>Karan: “Can you send me the deck before the review?”</p>
                    {note === 'snoozed' ? (
                      <div className="n-state">Snoozed until 9:10 PM</div>
                    ) : note === 'done' ? (
                      <div className="n-state">Ticked off your list</div>
                    ) : (
                      <div className="n-acts">
                        <button onClick={() => setNote('chat')}>Open chat</button>
                        <button onClick={() => setNote('snoozed')}>Snooze 10 min</button>
                        <button onClick={() => setNote('done')}>Done</button>
                      </div>
                    )}
                  </div>
                )}
                {note !== 'idle' && (
                  <button className="again" onClick={() => setNote('idle')}>Show the reminder again</button>
                )}
              </div>
            </div>
            <div className="cap"><b>Reminders that open the right chat.</b><span>Tap Open chat and see where it takes you.</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
