/**
 * The Echo "sound sprite" mascot — a pearlescent orb, used as a tasteful
 * animated hero accent (NOT the brand mark; the logo.png waveform is the brand).
 * Floats gently with a slow sonar-ripple. Animations disable under
 * prefers-reduced-motion via CSS. Palette matches the app's pearlescent green.
 */
export default function Mascot({ className = 'hero-mascot float-orb' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="Echo, the sound sprite — a glowing pearlescent orb that listens"
      className={className}
    >
      <defs>
        {/* Pearlescent orb body — matches the app's EchoMascot exactly. */}
        <radialGradient id="m-orb" cx="45%" cy="52%" r="62%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F4F9F0" />
          <stop offset="60%" stopColor="#D9E8DB" />
          <stop offset="84%" stopColor="#B4D1BA" />
          <stop offset="100%" stopColor="#9EC0A6" />
        </radialGradient>
        <radialGradient id="m-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D6EBDA" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D6EBDA" stopOpacity="0" />
        </radialGradient>
        {/* soft green bottom shade for depth */}
        <radialGradient id="m-shade" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#5E8568" stopOpacity="0" />
          <stop offset="72%" stopColor="#5E8568" stopOpacity="0" />
          <stop offset="100%" stopColor="#5E8568" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="m-spec" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="m-soft" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* soft green glow + sonar ripple rings (app palette) */}
      <circle cx="120" cy="122" r="100" fill="url(#m-glow)" filter="url(#m-soft)" />
      <g fill="none" stroke="#8FE0A6" strokeWidth="3">
        <circle className="ring-a" cx="120" cy="120" r="72" opacity="0.6" />
        <circle className="ring-b" cx="120" cy="120" r="72" opacity="0.6" />
        <circle className="ring-c" cx="120" cy="120" r="72" opacity="0.6" />
      </g>

      <g className="orb-core">
        <circle cx="120" cy="120" r="60" fill="url(#m-orb)" />
        <circle cx="120" cy="120" r="60" fill="url(#m-shade)" />
        <ellipse cx="102" cy="98" rx="22" ry="14" fill="url(#m-spec)" transform="rotate(-24 102 98)" />
        <circle cx="99" cy="94" r="4.5" fill="#fff" opacity="0.9" />
        {/* two-eye face */}
        <ellipse cx="108" cy="122" rx="5" ry="8" fill="#222F27" />
        <ellipse cx="132" cy="122" rx="5" ry="8" fill="#222F27" />
      </g>
    </svg>
  );
}

/** Decorative concentric rings for dark green bands. */
export function DecoRings({ className = 'rings' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" aria-hidden="true">
      <g fill="none" stroke="#8FE0A6" strokeWidth="1.4">
        <circle cx="120" cy="120" r="60" />
        <circle cx="120" cy="120" r="90" />
        <circle cx="120" cy="120" r="118" />
      </g>
    </svg>
  );
}
