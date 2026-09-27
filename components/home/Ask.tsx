'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';
import { ArrowUpIcon, ExpandIcon, InventoryIcon } from '../icons';

const ANSWER =
  'Rohan booked Toit for tomorrow at 8:30 PM. Karan asked for the Q3 deck before tomorrow’s 11 AM review, and your mom reminded you the electricity bill is due tomorrow.';

const SOURCES = [
  { icon: 'WhatsApp', who: 'Rohan', what: 'Booked Toit for tomorrow at 8:30 PM. You in?' },
  { icon: 'Slack', who: 'Karan', what: 'Can you send me the Q3 deck before the review tomorrow?' },
  { icon: 'WhatsApp', who: 'Mom', what: 'Did you pay the electricity bill? It’s due tomorrow.' },
];

export default function Ask() {
  const chat = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<number | null>(null); // null = show it all
  const [open, setOpen] = useState(false);

  // The answer is there from the start, and streams in once when you reach it.
  useEffect(() => {
    const el = chat.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const all = ANSWER.split(' ').length;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let i = 0;
        const step = () => {
          i += 1;
          setWords(i >= all ? null : i);
          if (i < all) timer = window.setTimeout(step, 55);
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

  const text = words === null ? ANSWER : ANSWER.split(' ').slice(0, words).join(' ');

  return (
    <section className="section">
      <div className="wrap split">
        <Reveal className="phone ask-phone">
          <video src="/media/phone-reel.mp4" poster="/media/phone-reel-poster.jpg" autoPlay muted loop playsInline aria-label="Echo on a phone: the home screen, making and ticking off a to-do list, the home screen widget, asking Echo a question, the Vault and the apps it hears" />
        </Reveal>
        <Reveal>
          <p className="kicker">Ask anything</p>
          <h2>Tap Echo. Ask what you missed.</h2>
          <p className="body">Echo answers from your own notifications, and shows exactly which ones it used.</p>
          <div className="chat" ref={chat}>
            <div className="q">What did I miss today?</div>
            <div className="a">
              <p>
                <span className="answer-ghost" aria-hidden="true">{ANSWER}</span>
                <span className="answer-live">{text}</span>
              </p>
              <button className={`src-chip ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                <InventoryIcon className="material-icon" />3 local notifications used
                <ExpandIcon className="material-icon chev" />
              </button>
              <div className={`sources ${open ? 'open' : ''}`}>
                {SOURCES.map((s) => (
                  <div className="src" key={s.who}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/icons/${s.icon}.png`} alt={s.icon} width={24} height={24} />
                    <div><b>{s.who}</b><span>{s.what}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ask-bar" aria-hidden="true">
              <span className="ph">Ask Echo anything</span>
              <span className="send"><ArrowUpIcon className="material-icon" /></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
