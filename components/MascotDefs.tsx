/**
 * Shared gradient/filter definitions for the Echo mascot ("the sound sprite").
 * Rendered once, hidden, and referenced by url(#id) from every mascot instance.
 */
export default function MascotDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="g-orb" cx="45%" cy="57%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F4F9F0" />
          <stop offset="60%" stopColor="#D9E8DB" />
          <stop offset="84%" stopColor="#B4D1BA" />
          <stop offset="100%" stopColor="#9EC0A6" />
        </radialGradient>
        <radialGradient id="g-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D6EBDA" stopOpacity=".9" />
          <stop offset="100%" stopColor="#D6EBDA" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-spec" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-bs" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#5E8568" stopOpacity="0" />
          <stop offset="72%" stopColor="#5E8568" stopOpacity="0" />
          <stop offset="100%" stopColor="#5E8568" stopOpacity=".3" />
        </radialGradient>
        <linearGradient id="g-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity=".92" />
          <stop offset="46%" stopColor="#D8EADC" stopOpacity=".6" />
          <stop offset="100%" stopColor="#98BEA2" stopOpacity=".3" />
        </linearGradient>
        <filter id="g-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="g-soft2" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
      </defs>
    </svg>
  );
}
