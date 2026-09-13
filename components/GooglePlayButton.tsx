import { GooglePlayGlyph } from './icons';

// Placeholder — swap for the real Play Store URL once the app is published.
export const PLAY_STORE_URL = '#';

export default function GooglePlayButton({ className = '' }: { className?: string }) {
  return (
    <a className={`gplay ${className}`.trim()} href={PLAY_STORE_URL} aria-label="Get Echo on Google Play">
      <GooglePlayGlyph />
      <span className="txt">
        <small>GET IT ON</small>
        <b>Google Play</b>
      </span>
    </a>
  );
}
