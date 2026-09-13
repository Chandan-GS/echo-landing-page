'use client';

import { useEffect, useState } from 'react';
import { DOWNLOAD_URL, OPEN_DOWNLOAD_EVENT } from './download';
import { DownloadIcon } from './icons';
import { GooglePlayBadge } from './icons';

const steps = [
  {
    n: 1,
    h: 'Download & Play Protect',
    body: (
      <>
        When you download the file, Android may show a <strong>&lsquo;Play Protect&rsquo;</strong>{' '}
        warning. Tap <strong>&lsquo;More details&rsquo;</strong> and then{' '}
        <strong>&lsquo;Install anyway&rsquo;</strong> OR go to Play Store → profile → Play Protect →
        settings → turn off.
      </>
    ),
  },
  {
    n: 2,
    h: 'Enable Restricted Settings',
    body: (
      <>
        After installation, open the app. If your phone blocks the Notification Access permission, go
        to <strong>Settings &gt; Apps &gt; Echo</strong>, tap the three-dot menu (
        <strong>⋮</strong>) in the top right, and select{' '}
        <strong>&lsquo;Allow restricted settings&rsquo;</strong>.
      </>
    ),
  },
  {
    n: 3,
    h: 'Complete Setup',
    body: <>Return to the app to enable the final permissions.</>,
  },
];

export default function DownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_DOWNLOAD_EVENT, handler);
    return () => window.removeEventListener(OPEN_DOWNLOAD_EVENT, handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div
      className={`modal-overlay ${open ? 'active' : ''}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-label="Installing Echo"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
          ×
        </button>
        <div className="modal-title">
          <DownloadIcon className="material-icon" /> Installing Echo
        </div>
        <div className="modal-steps">
          {steps.map((s) => (
            <div className="modal-step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-content">
                <h4>{s.h}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="play-badge"
            onClick={() => setOpen(false)}
            aria-label="Proceed to download Echo for Android"
          >
            <GooglePlayBadge height={54} />
          </a>
          <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', margin: 0 }}>
            Proceed to the current Android download.
          </p>
        </div>
      </div>
    </div>
  );
}
