type MascotProps = {
  className?: string;
  ariaLabel?: string;
};

/**
 * A small, static glossy mascot orb (face only) used in the header brand
 * and footer. Relies on the shared gradients from <MascotDefs />.
 */
export function BrandOrb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true" className={className}>
      <circle cx="120" cy="120" r="88" fill="url(#g-glow)" filter="url(#g-soft)" />
      <circle cx="120" cy="120" r="56" fill="url(#g-orb)" />
      <circle cx="120" cy="120" r="56" fill="url(#g-bs)" />
      <ellipse
        cx="100"
        cy="94"
        rx="24"
        ry="15"
        fill="url(#g-spec)"
        filter="url(#g-soft2)"
        transform="rotate(-24 100 94)"
      />
      <ellipse cx="108" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
      <ellipse cx="132" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
    </svg>
  );
}

/**
 * The full animated hero mascot: floating orb core with three sonar ripple
 * rings plus static sheen rings. Animations honor prefers-reduced-motion via
 * CSS in globals.css.
 */
export function HeroMascot({
  className = 'hero-orb float-orb',
  ariaLabel = 'Echo, the sound sprite mascot — a calm luminous orb with a two-eye face and glowing rings',
}: MascotProps) {
  return (
    <svg viewBox="0 0 240 240" role="img" aria-label={ariaLabel} className={className}>
      <g fill="none" stroke="url(#g-sheen)" filter="url(#g-soft2)" strokeWidth="7">
        <circle className="ring-a" cx="120" cy="120" r="82" />
        <circle className="ring-b" cx="120" cy="120" r="82" />
        <circle className="ring-c" cx="120" cy="120" r="82" />
      </g>
      <g fill="none" stroke="url(#g-sheen)" filter="url(#g-soft2)">
        <circle cx="120" cy="120" r="72" strokeWidth="11" opacity=".8" />
        <circle cx="120" cy="120" r="88" strokeWidth="11" opacity=".5" />
        <circle cx="120" cy="120" r="104" strokeWidth="11" opacity=".3" />
      </g>
      <g className="orb-core">
        <circle cx="120" cy="122" r="98" fill="url(#g-glow)" filter="url(#g-soft)" />
        <circle cx="120" cy="120" r="56" fill="url(#g-orb)" />
        <circle cx="120" cy="120" r="56" fill="url(#g-bs)" />
        <ellipse
          cx="100"
          cy="94"
          rx="24"
          ry="15"
          fill="url(#g-spec)"
          filter="url(#g-soft2)"
          transform="rotate(-24 100 94)"
        />
        <circle cx="98" cy="90" r="5" fill="#fff" opacity=".95" filter="url(#g-soft2)" />
        <ellipse cx="108" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
        <ellipse cx="132" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
      </g>
    </svg>
  );
}

/**
 * A compact animated mascot for the final CTA (fewer rings, no ripple).
 */
export function CtaMascot() {
  return (
    <svg
      className="orb float-orb"
      viewBox="0 0 240 240"
      role="img"
      aria-label="Echo mascot"
    >
      <g fill="none" stroke="url(#g-sheen)" filter="url(#g-soft2)">
        <circle cx="120" cy="120" r="72" strokeWidth="11" opacity=".7" />
        <circle cx="120" cy="120" r="90" strokeWidth="11" opacity=".4" />
      </g>
      <g className="orb-core">
        <circle cx="120" cy="122" r="98" fill="url(#g-glow)" filter="url(#g-soft)" />
        <circle cx="120" cy="120" r="56" fill="url(#g-orb)" />
        <circle cx="120" cy="120" r="56" fill="url(#g-bs)" />
        <ellipse
          cx="100"
          cy="94"
          rx="24"
          ry="15"
          fill="url(#g-spec)"
          filter="url(#g-soft2)"
          transform="rotate(-24 100 94)"
        />
        <ellipse cx="108" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
        <ellipse cx="132" cy="120" rx="5.5" ry="8.5" fill="#222f27" />
      </g>
    </svg>
  );
}

/** Decorative concentric rings used behind dark bands. */
export function DecoRings({ className = 'rings' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" aria-hidden="true">
      <g fill="none" stroke="#6EBC76" strokeWidth="1.4">
        <circle cx="120" cy="120" r="60" />
        <circle cx="120" cy="120" r="90" />
        <circle cx="120" cy="120" r="118" />
      </g>
    </svg>
  );
}
