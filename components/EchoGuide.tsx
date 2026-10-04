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
    const gutterOf = (vw: number) => Math.max(0, (vw - 1160) / 2);
    const smooth = (t: number) => t * t * (3 - 2 * t);

    const update = () => {
      raf = 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const y = window.scrollY;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

      const big = Math.min(320, vw * 0.6);
      const small = vw < 760 ? 72 : Math.max(96, Math.min(130, gutterOf(vw) * 0.8));

      // Through the middle, Echo weaves from one side margin to the other,
      // resting in the margins and only crossing the content in passing.
      const gutter = Math.max(0, (vw - 1160) / 2);
      const edge = Math.max(small / 2 + 12, gutter / 2);
      const path = (q: number) => {
        const side = 0.5 + 0.5 * Math.tanh(3.5 * Math.sin(q * Math.PI * 3));
        return {
          x: lerp(edge, vw - edge, side),
          y: vh * (0.5 + 0.18 * Math.sin(q * Math.PI * 5 + 0.8)),
        };
      };

      // Fixed endpoints: Echo starts on the hero's original spot and docks onto
      // the final-CTA's original spot; it only weaves in between.
      let start = { x: vw * 0.72, y: vh * 0.42, size: big };
      const heroAnchor = document.querySelector('.hero-echo-anchor');
      if (heroAnchor) {
        // The hero spot, as it sits at the top of the page.
        const r = heroAnchor.getBoundingClientRect();
        start = { x: r.left + r.width / 2, y: r.top + y + r.height / 2, size: Math.min(big, r.width) };
      }
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

      // On phones there are no margins to rest in (and with reduced motion he
      // shouldn't travel), so Echo stays in his two spots: he scrolls away with
      // the hero, and is waiting at the ending.
      let opacity = 1;
      if (reduce || vw < 760) {
        const spots = [heroAnchor, anchor].map((n) => n?.getBoundingClientRect());
        const seen = spots.find((r) => r && r.bottom > 0 && r.top < vh);
        if (seen) {
          size = seen.width;
          cx = seen.left + seen.width / 2;
          cy = seen.top + seen.height / 2;
        } else {
          opacity = 0;
        }
      }
      el.style.opacity = String(opacity);
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
      <Mascot className="echo-canvas" />
    </div>
  );
}
