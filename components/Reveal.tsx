'use client';

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
};

/**
 * Scroll-triggered reveal: adds `.visible` when the element scrolls into view.
 * Elements start as `.fade-in` (hidden, offset) and animate in once. Honors
 * prefers-reduced-motion (CSS forces them visible with no transition). A small
 * rootMargin reveals slightly before the element fully enters, and elements
 * already in view on mount are revealed immediately.
 */
export default function Reveal({ children, className = '', as: Tag = 'div', style, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    // Reveal immediately if the element is already at/above the viewport on mount
    // (e.g. above-the-fold content, or restored scroll position).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add('visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`fade-in ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
