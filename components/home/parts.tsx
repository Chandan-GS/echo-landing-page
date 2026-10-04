'use client';

/*
 * The app's small pieces, drawn as the app draws them in dark mode:
 * AskPill, the round pills and QuickReactions (ask_parts.dart, for_you_view.dart),
 * DraftCard (action_cards.dart), TodoCheck, ProgressRing and the reminder chip
 * (todo_parts.dart, todo_screen.dart). Sizes, colours and timings are the app's.
 */
import { useEffect, useState, type ComponentType, type ReactNode, type SVGProps } from 'react';
import { CheckCircleIcon, CheckIcon, CloseIcon, SendIcon, SparkleIcon, NotificationsSetIcon } from '../icons';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** A stadium button: filled (light in dark mode), outlined, or set (green). */
export function AskPill({
  label,
  icon: I,
  filled,
  set,
  onClick,
}: {
  label: ReactNode;
  icon?: Icon;
  filled?: boolean;
  set?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={`ask-pill ${filled ? 'filled' : ''} ${set ? 'set' : ''}`} onClick={onClick}>
      {I && <I className="material-icon" />}
      {label}
    </button>
  );
}

/** A round outlined button the height of a pill, holding just an icon. */
export function RoundPill({ icon: I, label, onClick }: { icon: Icon; label: string; onClick: () => void }) {
  return (
    <button className="round-pill" onClick={onClick} aria-label={label}>
      <I className="material-icon" />
    </button>
  );
}

export const REACTIONS = ['👍', '❤️', '😂', '🙏'];

/** The emoji a reply can be, in one tap, behind a Close pill. */
export function Reactions({ onPick, onClose }: { onPick: (e: string) => void; onClose: () => void }) {
  return (
    <div className="pill-row swap">
      <RoundPill icon={CloseIcon} label="Close" onClick={onClose} />
      <span className="reactions">
        {REACTIONS.map((e) => (
          <button key={e} className="reaction" onClick={() => onPick(e)} aria-label={`Send ${e}`}>
            {e}
          </button>
        ))}
      </span>
    </div>
  );
}

/** "Sent ❤️ to Priya", in green with a filled check. */
export function SentLine({ children }: { children: ReactNode }) {
  return (
    <div className="sent-line swap">
      <CheckCircleIcon className="material-icon" />
      {children}
    </div>
  );
}

/**
 * The reply Echo drafted, in a recessed box: "Writing a reply…" for a moment,
 * then the words with Send. Nothing goes until Send is tapped.
 */
export function DraftBody({
  text,
  to,
  onSend,
  onDismiss,
  sent,
}: {
  text: string;
  to: string;
  onSend: () => void;
  onDismiss?: () => void;
  sent: boolean;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <>
      <div className={`draft-box ${ready ? '' : 'writing'}`}>{ready ? text : 'Writing a reply…'}</div>
      {sent ? (
        <SentLine>Sent to {to}</SentLine>
      ) : (
        ready && (
          <div className="pill-row swap">
            <AskPill label="Send" icon={SendIcon} filled onClick={onSend} />
            {onDismiss && <AskPill label="Not now" onClick={onDismiss} />}
          </div>
        )
      )}
    </>
  );
}

/** The round check: fills green, pops a little, and its tick draws itself. */
export function TodoCheck({ done, label, onClick }: { done: boolean; label: string; onClick: () => void }) {
  return (
    <button className={`todo-check ${done ? 'done' : ''}`} onClick={onClick} aria-label={label} aria-pressed={done}>
      <svg viewBox="0 0 26 26" aria-hidden="true">
        <path d="M7.28 13.52 L11.44 17.42 L18.72 9.36" pathLength={1} />
      </svg>
    </button>
  );
}

/** Today's ring: green arc on a faint green track, the count in the middle. */
export function ProgressRing({ done, total }: { done: number; total: number }) {
  const r = 23;
  const c = 2 * Math.PI * r;
  const all = total > 0 && done === total;
  return (
    <span className="pring">
      <svg viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={r} className="pring-track" />
        <circle cx="26" cy="26" r={r} className="pring-fill" strokeDasharray={c} strokeDashoffset={c * (1 - (total ? done / total : 0))} transform="rotate(-90 26 26)" />
      </svg>
      <span className="pring-n pop" key={all ? 'all' : 'n'}>
        {all ? <CheckIcon className="material-icon" /> : done}
      </span>
    </span>
  );
}

/** A to-do's reminder: Echo's suggestion (dashed, ✦) or set (green, bell). */
export function ReminderChip({ at, set, onClick }: { at: string; set: boolean; onClick: () => void }) {
  return (
    <button
      key={set ? 'set' : 'offer'}
      className={`rem-chip pop ${set ? 'set' : 'offer'}`}
      onClick={onClick}
      aria-label={set ? `Reminder at ${at}. Remove it` : `Remind me at ${at}`}
    >
      {set ? <NotificationsSetIcon className="material-icon" /> : <SparkleIcon className="material-icon" />}
      {at}
    </button>
  );
}
