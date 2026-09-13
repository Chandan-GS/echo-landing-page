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
        <radialGradient id="m-orb" cx="44%" cy="40%" r="64%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="34%" stopColor="#E8F7EC" />
          <stop offset="64%" stopColor="#AECFB4" />
          <stop offset="86%" stopColor="#6EBC76" />
          <stop offset="100%" stopColor="#49884F" />
        </radialGradient>
        <radialGradient id="m-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6EBC76" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6EBC76" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="m-spec" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="m-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* sonar ripple rings */}
      <g fill="none" stroke="#6EBC76" strokeWidth="3">
        <circle className="ring-a" cx="120" cy="120" r="72" opacity="0.6" />
        <circle className="ring-b" cx="120" cy="120" r="72" opacity="0.6" />
        <circle className="ring-c" cx="120" cy="120" r="72" opacity="0.6" />
      </g>

      <g className="orb-core">
        <circle cx="120" cy="122" r="98" fill="url(#m-glow)" filter="url(#m-soft)" />
        <circle cx="120" cy="120" r="60" fill="url(#m-orb)" />
        <ellipse cx="102" cy="98" rx="22" ry="14" fill="url(#m-spec)" transform="rotate(-24 102 98)" />
        <circle cx="99" cy="94" r="4.5" fill="#fff" opacity="0.9" />
        {/* two-eye face */}
        <ellipse cx="108" cy="122" rx="5" ry="8" fill="#16301B" />
        <ellipse cx="132" cy="122" rx="5" ry="8" fill="#16301B" />
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
