import type { SVGProps } from 'react';

/** A checkmark used in feature lists and tick badges. */
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <path d="M5 12l4 4 10-11" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function WaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function PieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3a9 9 0 1 0 9 9h-9z" />
      <path d="M12 3v9l7-4a9 9 0 0 0-7-5z" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" strokeLinejoin="round" />
    </svg>
  );
}

export function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function PhoneLockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M10 18h4" />
    </svg>
  );
}

export function NoAdsLockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 8h-1V6a5 5 0 0 0-10 0" />
      <rect x="4" y="8" width="16" height="12" rx="3" />
    </svg>
  );
}

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 6h18M8 6V4h8v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
    </svg>
  );
}

/** The official Google Play badge glyph. */
export function GooglePlayGlyph({ width = 26, height = 28 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 512 555" aria-hidden="true">
      <path
        fill="#00D2FF"
        d="M23 15C15 24 11 38 11 55v445c0 17 4 31 12 40l1 1 249-249v-6L24 14z"
      />
      <path
        fill="#FFD500"
        d="M356 356l-83-83v-6l83-83 2 1 98 56c28 16 28 42 0 58l-98 56z"
      />
      <path fill="#FF3A44" d="M358 355l-85-85L23 520c9 10 25 11 42 1l293-166" />
      <path fill="#00E676" d="M358 185L65 19C48 9 32 10 23 20l250 250z" />
    </svg>
  );
}
