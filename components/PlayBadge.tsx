import { PLAY_STORE_URL } from './download';

/**
 * Google's official "Get it on Google Play" badge, used as supplied
 * (play.google.com/intl/en_us/badges). The link is a `#` placeholder
 * (PLAY_STORE_URL) until the store listing is live.
 */
export default function PlayBadge({ height = 52, className }: { height?: number; className?: string }) {
  return (
    <a className={`play-badge ${className ?? ''}`.trim()} href={PLAY_STORE_URL} aria-label="Get it on Google Play">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/play-badge.png" alt="Get it on Google Play" width={Math.round((height * 564) / 168)} height={height} style={{ display: 'block', height, width: 'auto' }} />
    </a>
  );
}
