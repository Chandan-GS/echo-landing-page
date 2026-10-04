'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';
import { ArrowUpIcon, ExpandIcon, InventoryIcon } from '../icons';
import { AskPill, DraftBody } from './parts';

/** The answer as the app writes it: words, and [n] where a source backs them. */
const ANSWER =
  'Launch is still on for Tuesday. [1] Mahesh fixed the Android blocker and his PR is waiting for your review, [2] and Vikram needs your sign-off on the release notes before 5. [3]';
const TOKENS = ANSWER.split(' ');

const SOURCES = [
  { icon: 'Slack', who: 'Neha', where: '#launch', at: '9:12 AM', what: 'Launch is still on for Tuesday 🚀 QA signed off last night.' },
  { icon: 'GitHub', who: 'Mahesh', where: 'echo-app', at: '9:20 AM', what: 'Requested your review on “Fix sync on resume”' },
  { icon: 'Slack', who: 'Vikram', where: '#launch', at: '9:34 AM', what: 'Can you sign off the release notes before 5?' },
];

const DRAFT = 'I’m in! Happy to split fuel. See you early 🚗';

function Dot({ n }: { n: number }) {
  return <span className="cite">{n}</span>;
}

export default function Ask() {
  const chat = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<number | null>(null); // null = show it all
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<'none' | 'ready' | 'sent'>('none');

  // The answer is there from the start, and streams in once when you reach it.
  useEffect(() => {
    const el = chat.current;
    if (!el || !('IntersectionObserver' in window)) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let i = 0;
        const step = () => {
          i += 1;
          setWords(i >= TOKENS.length ? null : i);
          if (i < TOKENS.length) timer = window.setTimeout(step, 55);
        };
        step();
      },
      { threshold: 0.7 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const render = (tokens: string[]) =>
    tokens.map((t, i) => {
      const m = t.match(/^\[(\d)\]$/);
      return <Fragment key={i}>{m ? <Dot n={+m[1]} /> : t}{i < tokens.length - 1 ? ' ' : ''}</Fragment>;
    });
  const shown = words === null ? TOKENS : TOKENS.slice(0, words);

  return (
    <section className="section">
      <div className="wrap split">
        <Reveal className="phone ask-phone">
          <video src="/media/phone-reel.mp4" poster="/media/phone-reel-poster.jpg" autoPlay muted loop playsInline aria-label="Echo on a phone: asking what is going on with the launch, the answer with its sources, then Echo drafting a reply to Rohan and sending it" />
        </Reveal>
        <Reveal>
          <p className="kicker">Ask anything</p>
          <h2>Ask Echo. Then let it reply.</h2>
          <p className="body">Echo answers from your own notifications and shows exactly which ones it used. Ask it to draft a reply, and you decide when it goes.</p>
          <div className="chat" ref={chat}>
            <div className="you">What is going on with the launch?</div>
            <div className="echo-turn">
              <div className={`checked ${open ? 'open' : ''}`}>
                <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                  <InventoryIcon className="material-icon" />
                  Checked 63 messages · used 3
                  <ExpandIcon className="material-icon chev" />
                </button>
                <div className="checked-list">
                  <div>
                    {SOURCES.map((s, i) => (
                      <div className="checked-src" key={s.who}>
                        <Dot n={i + 1} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/icons/${s.icon}.png`} alt={s.icon} width={20} height={20} />
                        <div>
                          <span className="who"><b>{s.who}</b> · {s.where}</span>
                          <span className="what">{s.what}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="answer">
                <span className="answer-ghost" aria-hidden="true">{render(TOKENS)}</span>
                <span className="answer-live">{render(shown)}</span>
              </p>
              <div className="src-cards">
                {SOURCES.map((s, i) => (
                  <div className="src-card" key={s.who}>
                    <div className="src-top">
                      <Dot n={i + 1} />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icons/${s.icon}.png`} alt={s.icon} width={18} height={18} />
                      <span className="who"><b>{s.who}</b> · {s.at}</span>
                    </div>
                    <span className="what">{s.what}</span>
                  </div>
                ))}
              </div>
            </div>
            {draft === 'none' ? (
              <div className="pill-row">
                <AskPill label="Draft a reply to Rohan" onClick={() => setDraft('ready')} />
              </div>
            ) : (
              <>
                <div className="you swap">Draft a reply to Rohan</div>
                <div className="ask-card draft-card swap">
                  <div className="who-row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/WhatsApp.png" alt="" width={24} height={24} />
                    <span className="who">Reply to <b>Rohan</b></span>
                  </div>
                  <DraftBody
                    text={DRAFT}
                    to="Rohan"
                    sent={draft === 'sent'}
                    onSend={() => {
                      setDraft('sent');
                      window.dispatchEvent(new Event('echo:happy'));
                    }}
                  />
                </div>
              </>
            )}
            <div className="ask-bar" aria-hidden="true">
              <span className="ph">Ask a follow-up…</span>
              <span className="send"><ArrowUpIcon className="material-icon" /></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
