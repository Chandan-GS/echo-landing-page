'use client';

import { useEffect, useRef } from 'react';

const NOTIFS = [
  'WhatsApp · 3 new messages',
  'Gmail · Invoice received',
  'Calendar · Meeting at 3 PM',
  'Slack · @mentioned in #design',
  'Google · 27° Bengaluru',
  'Twitter · 12 new likes',
  'YouTube · New video from channel',
  'LinkedIn · 5 connection requests',
  'Amazon · Your order shipped',
  'Spotify · New release Friday',
  'HCLTech · Pre-placement talk',
  'AICTE · Activity points alert',
];

/**
 * The hero's ambient "notifications floating up" motion. Spawns a burst of
 * pills that drift upward and fade, then settles. Fully skipped when the user
 * prefers reduced motion.
 */
export default function FloatingPills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = ref.current;
    if (!ticker) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const timers: number[] = [];

    const spawnPill = () => {
      const pill = document.createElement('div');
      pill.className = 'notif-pill';
      const dot = document.createElement('span');
      dot.className = 'dot';
      pill.appendChild(dot);
      pill.appendChild(
        document.createTextNode(NOTIFS[Math.floor(Math.random() * NOTIFS.length)])
      );

      // Keep pills within a comfortable band so they don't push past the edge
      // on narrow screens (the ticker also clips overflow).
      const narrow = window.innerWidth < 560;
      const x = narrow ? 4 + Math.random() * 40 : 5 + Math.random() * 46;
      const duration = 5 + Math.random() * 5;
      const delay = Math.random() * 2;
      const startY = 55 + Math.random() * 32;

      pill.style.left = `${x}%`;
      pill.style.top = `${startY}%`;
      pill.style.animation = `floatUp ${duration}s linear ${delay}s`;

      ticker.appendChild(pill);
      const t = window.setTimeout(() => pill.remove(), (duration + delay + 1) * 1000);
      timers.push(t);
    };

    for (let i = 0; i < 6; i++) spawnPill();

    let count = 0;
    const interval = window.setInterval(() => {
      spawnPill();
      count += 1;
      if (count >= 12) window.clearInterval(interval);
    }, 1400);

    return () => {
      window.clearInterval(interval);
      timers.forEach((t) => window.clearTimeout(t));
      ticker.replaceChildren();
    };
  }, []);

  return <div className="notif-ticker" ref={ref} aria-hidden="true" />;
}
