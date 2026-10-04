'use client';

import { useEffect, useRef, useState } from 'react';
import { DownloadIcon, HomeIcon, LaptopIcon, LockIcon, SparkleIcon } from '../icons';

const TABS = [
  { id: 'top', label: 'Home', icon: HomeIcon },
  { id: 'features', label: 'Features', icon: SparkleIcon },
  { id: 'desktop', label: 'Desktop', icon: LaptopIcon },
  { id: 'privacy', label: 'Privacy', icon: LockIcon },
];

/**
 * The app's nav dock (lib/core/presentation/widgets/nav_dock.dart) as the
 * site's section nav: icon tabs in one floating pill, and a green pill under
 * the current one that stretches to the next, the leading edge first and the
 * other catching up, while the new icon squashes in.
 */
export default function Dock() {
  const [show, setShow] = useState(false);
  const [cur, setCur] = useState(0);
  const [right, setRight] = useState(true);
  const prev = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      setShow(!!hero && hero.getBoundingClientRect().bottom < 40);
      let c = 0;
      TABS.forEach((t, i) => {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) c = i;
      });
      if (c !== prev.current) {
        setRight(c > prev.current);
        prev.current = c;
        setCur(c);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // As in the app: the leading edge moves in 240 ms, the trailing one in 420 ms.
  const lead = '240ms cubic-bezier(0.3, 1.2, 0.4, 1)';
  const trail = '420ms cubic-bezier(0.3, 1.2, 0.4, 1)';
  return (
    <nav className={`dock ${show ? '' : 'hide'}`} aria-label="Sections">
      <div className="dock-pill">
        <i
          className="dock-sel"
          style={{
            left: `calc(6px + ${cur} * var(--tab))`,
            right: `calc(6px + ${TABS.length - 1 - cur} * var(--tab))`,
            transition: `left ${right ? trail : lead}, right ${right ? lead : trail}`,
          }}
          aria-hidden="true"
        />
        {TABS.map(({ id, label, icon: Icon }, i) => (
          <a key={id} href={`#${id}`} className={cur === i ? 'on' : ''} aria-label={label} aria-current={cur === i ? 'true' : undefined}>
            <Icon className="material-icon" key={cur === i ? `on-${id}` : id} />
          </a>
        ))}
      </div>
      <a className="dock-get" href="#get">
        <DownloadIcon className="material-icon" />
        <span>Get Echo</span>
      </a>
    </nav>
  );
}
