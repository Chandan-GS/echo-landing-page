import type { SVGProps } from 'react';

/**
 * Material Symbols (Rounded) style icons, drawn as filled/rounded glyphs to
 * match the app's Material 3 icon set. `currentColor` fills so they inherit
 * their container's color. 24x24 viewBox.
 */
type IconProps = SVGProps<SVGSVGElement>;
const svg = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  ...props,
});

export function MicIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a1 1 0 1 1 2 0 7 7 0 0 1-6 6.93V21a1 1 0 1 1-2 0v-3.07A7 7 0 0 1 5 11a1 1 0 1 1 2 0 5 5 0 0 0 10 0Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8Z" />
    </svg>
  );
}

export function InventoryIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M5 3h14a2 2 0 0 1 2 2v2a2 2 0 0 1-1 1.73V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.73A2 2 0 0 1 3 7V5a2 2 0 0 1 2-2Zm1 6v10h12V9H6Zm-1-4v2h14V5H5Zm5 6h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2Z" />
    </svg>
  );
}

export function GraphicEqIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M6 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm4-4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm4 6a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm4-3a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function NotificationsIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5-1.6-1.6V10a5.4 5.4 0 0 0-4-5.22V4a1.4 1.4 0 1 0-2.8 0v.78A5.4 5.4 0 0 0 6.6 10v5.4L5 17a1 1 0 0 0 .7 1.7h12.6A1 1 0 0 0 19 17Z" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8l-3.3 3.3A1 1 0 0 1 3 20.6V5a2 2 0 0 1 2-2Zm4 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H8Z" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M6.5 20A4.5 4.5 0 0 1 6 11.06a6 6 0 0 1 11.6-1.18A4.5 4.5 0 0 1 17.5 20h-11Z" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4v12h10V6H7Zm5 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 2a5 5 0 0 1 5 5v2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3V7a5 5 0 0 1 5-5Zm3 7V7a3 3 0 1 0-6 0v2h6Zm-3 4a1.5 1.5 0 0 0-.75 2.8V18a.75.75 0 0 0 1.5 0v-2.2A1.5 1.5 0 0 0 12 13Z" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M13 2 4.4 12.5a1 1 0 0 0 .77 1.63H10l-1.4 7.2a.6.6 0 0 0 1.06.5L19.6 11.3a1 1 0 0 0-.78-1.63H14l1-7.2A.6.6 0 0 0 13 2Z" />
    </svg>
  );
}

export function ScheduleIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10V7a1 1 0 1 0-2 0v5.4a1 1 0 0 0 .3.71l3.2 3.2a1 1 0 0 0 1.42-1.42L13 12Z" />
    </svg>
  );
}

export function VisibilityOffIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M3.3 2.3a1 1 0 0 0-1.4 1.4l2.6 2.6A12.9 12.9 0 0 0 1 12s3.5 7 11 7a11 11 0 0 0 4.3-.88l3.4 3.39a1 1 0 0 0 1.4-1.42ZM12 17a5 5 0 0 1-4.53-7.1l1.57 1.57a3 3 0 0 0 3.5 3.5l1.56 1.57A4.9 4.9 0 0 1 12 17Zm0-10c7.5 0 11 7 11 7a13.4 13.4 0 0 1-2.16 3l-3.12-3.13A5 5 0 0 0 11.13 8l-2-2A11 11 0 0 1 12 7Z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M9.55 17.6 4.3 12.35a1 1 0 0 1 1.4-1.42l3.85 3.84 8.75-8.75a1 1 0 0 1 1.42 1.42l-9.46 9.46a1 1 0 0 1-1.42 0Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M13.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L18.58 13H3a1 1 0 1 1 0-2h15.58l-5.3-5.3a1 1 0 0 1 .02-1.4Z" />
    </svg>
  );
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 15.5a1 1 0 0 1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4l4.3 4.29 4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

/**
 * Official "Get it on Google Play" badge (dark). Self-contained SVG.
 * NOTE: the store link is a `#` placeholder — swap for the real URL at launch
 * (see PLAY_STORE_URL in components/download.ts).
 */
export function GooglePlayBadge({ className, height = 52 }: { className?: string; height?: number }) {
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 646 200"
      role="img"
      aria-label="Get it on Google Play"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="1.5" width="643" height="197" rx="30" fill="#49884F" stroke="#6EBC76" strokeWidth="3" />
      {/* Play triangle logo */}
      <g transform="translate(40 54)">
        <path d="M2 4C.8 5.2.2 6.9.2 9v74c0 2.1.6 3.8 1.8 5l.4.3 41.5-41.5v-1L2.4 3.7 2 4Z" fill="#00D2FF" />
        <path d="M59 60.9 45.2 47.1v-1L59 32.3l.3.2L75.7 42c4.7 2.7 4.7 7 0 9.7L59.3 60.7l-.3.2Z" fill="#FFD500" />
        <path d="M59.3 60.7 45.2 46.6 2.2 89.6c1.6 1.7 4.2 1.9 7.1.2l50-28.9" fill="#FF3A44" />
        <path d="M59.3 32.5 16.3 8.1c-2.9-1.7-5.5-1.5-7.1.2l43 43 7.1-7.1Z" fill="#00E676" />
      </g>
      {/* Text */}
      <text x="150" y="70" fill="#16301B" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" letterSpacing="1">GET IT ON</text>
      <text x="148" y="140" fill="#16301B" fontFamily="Arial, Helvetica, sans-serif" fontSize="58" fontWeight="500">Google Play</text>
    </svg>
  );
}
