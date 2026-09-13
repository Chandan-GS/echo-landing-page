import { PLAY_STORE_URL } from './download';
import { GooglePlayBadge } from './icons';

/**
 * Official-look "Get it on Google Play" badge. The link is a `#` placeholder
 * (PLAY_STORE_URL) — swap for the real store URL at launch.
 */
export default function PlayBadge({ height = 52, className }: { height?: number; className?: string }) {
  return (
    <a
      className={`play-badge ${className ?? ''}`.trim()}
      href={PLAY_STORE_URL}
      aria-label="Get it on Google Play"
    >
      <GooglePlayBadge height={height} />
    </a>
  );
}
