'use client';

import { useEffect, useState } from 'react';

/**
 * The Echo "sound sprite" mascot — a pearlescent orb matching the app's
 * EchoMascot. It loops seamlessly through the app's phases (idle → listening →
 * thinking → speaking), crossfading its eyes, a thinking arc, and its glow so
 * it reads as alive. All motion is disabled under prefers-reduced-motion.
 */
type Phase = 'idle' | 'listening' | 'thinking' | 'speaking';
// Per-phase dwell times give a natural, unforced rhythm; the sequence repeats
// forever, and every transition is a CSS crossfade, so the loop never jumps.
const CYCLE: { name: Phase; dur: number }[] = [
  { name: 'idle', dur: 2600 },
  { name: 'listening', dur: 2200 },
  { name: 'thinking', dur: 3000 },
  { name: 'speaking', dur: 3400 },
];

export default function Mascot({ className = 'hero-mascot float-orb' }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0;
    let timer: number;
    const next = () => {
      i = (i + 1) % CYCLE.length;
      setPhase(CYCLE[i].name);
      timer = window.setTimeout(next, CYCLE[i].dur);
    };
    timer = window.setTimeout(next, CYCLE[0].dur);
    return () => window.clearTimeout(timer);
  }, []);

  const happy = phase === 'thinking' || phase === 'speaking';
  const label = `Echo, the sound sprite — currently ${phase}`;

  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label={label}
      className={className}
      data-phase={phase}
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

      {/* soft green glow — brightens a touch while speaking */}
      <circle
        className="m-glow-c"
        cx="120"
        cy="122"
        r="100"
        fill="url(#m-glow)"
        filter="url(#m-soft)"
        opacity={phase === 'speaking' ? 1 : phase === 'listening' ? 0.85 : 0.7}
      />

      <g className="orb-core">
        <circle cx="120" cy="120" r="60" fill="url(#m-orb)" />
        <circle cx="120" cy="120" r="60" fill="url(#m-shade)" />
        <ellipse cx="102" cy="98" rx="22" ry="14" fill="url(#m-spec)" transform="rotate(-24 102 98)" />
        <circle cx="99" cy="94" r="4.5" fill="#fff" opacity="0.9" />

        {/* the face tilts/perks up per phase for personality */}
        <g className="m-face">
          {/* blush cheeks warm up when Echo is content (thinking/speaking) */}
          <g className="m-cheeks" style={{ opacity: happy ? 0.5 : 0 }}>
            <circle cx="98" cy="132" r="5.5" fill="#F2A399" />
            <circle cx="142" cy="132" r="5.5" fill="#F2A399" />
          </g>
          {/* eyes crossfade between open (idle/listening) and content (thinking/speaking) */}
          <g className="m-eyes">
            <g className="eyes-open" style={{ opacity: happy ? 0 : 1 }}>
              <ellipse cx="108" cy="122" rx="5" ry={phase === 'listening' ? 9 : 8} fill="#222F27" />
              <ellipse cx="132" cy="122" rx="5" ry={phase === 'listening' ? 9 : 8} fill="#222F27" />
            </g>
            <g
              className="eyes-happy"
              style={{ opacity: happy ? 1 : 0 }}
              fill="none"
              stroke="#222F27"
              strokeWidth="3.4"
              strokeLinecap="round"
            >
              <path d="M101 124 Q108 116 115 124" />
              <path d="M125 124 Q132 116 139 124" />
            </g>
          </g>
          {/* a little mouth that opens and closes while speaking */}
          <ellipse
            className="m-mouth"
            cx="120"
            cy="139"
            rx="6"
            ry="4.5"
            fill="#222F27"
            style={{ opacity: phase === 'speaking' ? 1 : 0 }}
          />
        </g>
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
