'use client';

import { useEffect, useState, type ReactNode } from 'react';

type Props = {
  className?: string;
  /** What it says once pressed. */
  soon: string;
  children: ReactNode;
};

/**
 * A download button for an app that isn't out yet: pressing it says it's
 * coming soon, for a few seconds, instead of downloading anything.
 */
export default function ComingSoon({ className, soon, children }: Props) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!shown) return;
    const t = setTimeout(() => setShown(false), 2600);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <button type="button" className={className} onClick={() => setShown(true)} aria-live="polite">
      {shown ? soon : children}
    </button>
  );
}
