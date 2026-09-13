'use client';

import type { ReactNode } from 'react';
import { openDownloadModal } from './download';

type Props = {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

/** A button that opens the install modal. Used in the nav and CTAs. */
export default function DownloadButton({ className, children, ariaLabel }: Props) {
  return (
    <button type="button" className={className} onClick={openDownloadModal} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
