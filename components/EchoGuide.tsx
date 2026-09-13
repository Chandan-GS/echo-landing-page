'use client';

import { useEffect, useRef } from 'react';
import Mascot from './Mascot';

/**
 * Echo as a scroll companion. It starts large in the hero, then shrinks and
 * glides down the page along a gentle serpentine path as you scroll — a single
 * fixed element that never blocks clicks. Motion is disabled (Echo just rests
 * in the hero) under prefers-reduced-motion.
 */
export default function EchoGuide() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const smooth = (t: number) => t * t * (3 - 2 * t);

    const update = () => {
      raf = 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const y = window.scrollY;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

      const big = Math.min(320, vw * 0.6);
      const small = Math.min(140, vw * 0.34);

      // Serpentine viewport path used through the middle of the journey.
      const amp = vw < 760 ? 0.18 : 0.3;
      const path = (q: number) => ({
        x: vw * (0.54 + amp * Math.sin(q * Math.PI * 3)),
        y: vh * (0.5 + 0.16 * Math.sin(q * Math.PI * 5 + 0.8)),
      });

      // Fixed endpoints: Echo starts on the hero's original spot and docks onto
      // the final-CTA's original spot; it only weaves in between.
      const start = { x: vw * 0.72, y: vh * 0.42, size: big };
      let end = { x: vw * 0.5, y: vh * 0.52, size: Math.min(150, vw * 0.34) };
      const anchor = document.querySelector('.final-echo-anchor');
      if (anchor) {
        const r = anchor.getBoundingClientRect();
        end = { x: r.left + r.width / 2, y: r.top + r.height / 2, size: Math.max(104, r.width) };
      }

      const a = 0.14; // leave the hero over the first stretch
      const b = 0.86; // dock into the final CTA over the last stretch
      let cx: number, cy: number, size: number;
      if (reduce || p <= a) {
        const t = reduce ? 0 : smooth(p / a);
        const P = path(a);
        cx = lerp(start.x, P.x, t);
        cy = lerp(start.y, P.y, t);
        size = lerp(start.size, small, t);
      } else if (p >= b) {
        const t = smooth((p - b) / (1 - b));
        const P = path(b);
        cx = lerp(P.x, end.x, t);
        cy = lerp(P.y, end.y, t);
        size = lerp(small, end.size, t);
      } else {
        const P = path(p);
        cx = P.x;
        cy = P.y;
        size = small;
      }

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.transform = `translate3d(${cx - size / 2}px, ${cy - size / 2}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="echo-guide" aria-hidden="true">
      <Mascot className="float-orb" />
    </div>
  );
}
