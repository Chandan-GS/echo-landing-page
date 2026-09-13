'use client';

import { useEffect, useRef, type ReactNode, type ElementType } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Progressive-enhancement scroll reveal. Elements start hidden (`.reveal`) and
 * fade up when scrolled into view. Honors prefers-reduced-motion and degrades
 * gracefully when IntersectionObserver is unavailable.
 */
export default function Reveal({ children, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      el.style.opacity = '1';
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
