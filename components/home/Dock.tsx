'use client';

import { useEffect, useState } from 'react';
import { DownloadIcon, HomeIcon, LaptopIcon, LockIcon, SparkleIcon } from '../icons';

const TABS = [
  { id: 'top', label: 'Home', icon: HomeIcon },
  { id: 'features', label: 'Features', icon: SparkleIcon },
  { id: 'desktop', label: 'Desktop', icon: LaptopIcon },
  { id: 'privacy', label: 'Privacy', icon: LockIcon },
];

/** The app's floating nav dock, as the site's section nav. */
export default function Dock() {
  const [show, setShow] = useState(false);
  const [cur, setCur] = useState('top');

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      setShow(!!hero && hero.getBoundingClientRect().bottom < 40);
      let c = 'top';
      for (const id of [...TABS.map((t) => t.id), 'faq']) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) c = id;
      }
      setCur(c);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`dock ${show ? '' : 'hide'}`} aria-label="Sections">
      <div className="dock-pill">
        {TABS.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className={cur === id ? 'on' : ''} aria-label={label}>
            <Icon className="material-icon" />
            <span className="lbl">{label}</span>
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
