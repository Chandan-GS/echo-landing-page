'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { MicIcon } from './icons';

type Persona = {
  id: string;
  name: string;
  desc: string;
  rate: number;
  pitch: number;
  /** Preference order of voice-name substrings to match against system voices. */
  prefer: string[];
  /** Preferred language tags. */
  langs: string[];
};

const PERSONAS: Persona[] = [
  { id: 'aria', name: 'Aria', desc: 'Warm · bright', rate: 1.02, pitch: 1.18, prefer: ['Samantha', 'Jenny', 'Aria', 'Female', 'Zira'], langs: ['en-US'] },
  { id: 'sage', name: 'Sage', desc: 'Calm · measured', rate: 0.9, pitch: 0.95, prefer: ['Daniel', 'Sonia', 'Libby', 'Arthur', 'Google UK English Male'], langs: ['en-GB'] },
  { id: 'atlas', name: 'Atlas', desc: 'Deep · steady', rate: 0.94, pitch: 0.7, prefer: ['Google US English', 'Alex', 'Guy', 'Male', 'David'], langs: ['en-US'] },
  { id: 'nova', name: 'Nova', desc: 'Crisp · lively', rate: 1.12, pitch: 1.05, prefer: ['Google UK English Female', 'Karen', 'Moira', 'Tessa', 'Female'], langs: ['en-AU', 'en-GB', 'en-US'] },
];

const SAMPLE = "Good morning — here's your briefing for today.";

const NUM_BARS = 28;

export default function Voices() {
  const [supported, setSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [status, setStatus] = useState('Tap a persona to hear a sample briefing.');

  const rafRef = useRef<number | null>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  // Detect support + populate voices (async via voiceschanged).
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }
    const synth = window.speechSynthesis;
    const load = () => setVoices(synth.getVoices());
    load();
    synth.addEventListener('voiceschanged', load);
    return () => {
      synth.removeEventListener('voiceschanged', load);
      synth.cancel();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stopWave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    const bars = barsRef.current;
    if (bars) {
      Array.from(bars.children).forEach((b) => {
        (b as HTMLElement).style.height = '6px';
      });
    }
  };

  const animateWave = () => {
    const bars = barsRef.current;
    if (!bars) return;
    const children = Array.from(bars.children) as HTMLElement[];
    const tick = () => {
      const t = Date.now() / 140;
      children.forEach((bar, i) => {
        // pseudo-random-yet-smooth envelope, tallest in the middle
        const center = 1 - Math.abs(i - NUM_BARS / 2) / (NUM_BARS / 2);
        const h = 6 + (Math.sin(t + i * 0.7) * 0.5 + 0.5) * 40 * (0.4 + center * 0.6);
        bar.style.height = `${h}px`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
  };

  const pickVoice = (persona: Persona): SpeechSynthesisVoice | undefined => {
    if (!voices.length) return undefined;
    // 1) preferred name match
    for (const want of persona.prefer) {
      const v = voices.find((voice) => voice.name.toLowerCase().includes(want.toLowerCase()));
      if (v) return v;
    }
    // 2) preferred language
    for (const lang of persona.langs) {
      const v = voices.find((voice) => voice.lang.replace('_', '-').startsWith(lang));
      if (v) return v;
    }
    // 3) any English voice
    return voices.find((voice) => voice.lang.toLowerCase().startsWith('en')) ?? voices[0];
  };

  const play = (persona: Persona) => {
    const synth = window.speechSynthesis;
    // Cancel anything already speaking (one at a time).
    synth.cancel();
    stopWave();

    if (playingId === persona.id) {
      // Toggle off if tapping the active persona.
      setPlayingId(null);
      setStatus('Tap a persona to hear a sample briefing.');
      return;
    }

    const utter = new SpeechSynthesisUtterance(SAMPLE);
    const voice = pickVoice(persona);
    if (voice) utter.voice = voice;
    utter.rate = persona.rate;
    utter.pitch = persona.pitch;

    utter.onstart = () => {
      setPlayingId(persona.id);
      setStatus(`${persona.name} is speaking…`);
      animateWave();
    };
    utter.onend = () => {
      setPlayingId(null);
      setStatus('Tap a persona to hear a sample briefing.');
      stopWave();
    };
    utter.onerror = () => {
      setPlayingId(null);
      setStatus('Playback was interrupted. Try again.');
      stopWave();
    };

    // Some browsers need a tick after cancel() before speaking.
    setTimeout(() => synth.speak(utter), 60);
  };

  return (
    <section className="section voices-section" id="voices">
      <div className="wrap">
      <Reveal className="section-head center">
        <h2 className="section-h2">Pick a voice for your morning</h2>
        <p className="section-desc">
          Four personas across a range of English accents. Tap one to hear a sample briefing spoken
          right here in your browser.
        </p>
      </Reveal>

      {supported ? (
        <Reveal>
          <div className={`voice-wave ${playingId ? 'speaking' : ''}`.trim()} ref={barsRef} aria-hidden="true">
            {Array.from({ length: NUM_BARS }).map((_, i) => (
              <span className="vb" key={i} />
            ))}
          </div>

          <div className="voices-grid">
            {PERSONAS.map((persona) => (
              <button
                type="button"
                key={persona.id}
                className={`voice-card ${playingId === persona.id ? 'playing' : ''}`.trim()}
                onClick={() => play(persona)}
                aria-pressed={playingId === persona.id}
                aria-label={`Play a sample in the ${persona.name} voice (${persona.desc})`}
              >
                <span className="voice-orb" aria-hidden="true">
                  <MicIcon className="material-icon" />
                </span>
                <span className="voice-name">{persona.name}</span>
                <span className="voice-desc">{persona.desc}</span>
              </button>
            ))}
          </div>

          <p className="voice-status" role="status" aria-live="polite">
            {status}
          </p>
        </Reveal>
      ) : (
        <Reveal>
          <div className="voice-fallback" role="note">
            Your browser doesn&apos;t support in-page voice preview (the Web Speech API is
            unavailable). In the Echo app you can still choose from{' '}
            <strong style={{ color: 'var(--text)' }}>Aria, Sage, Atlas and Nova</strong> across
            multiple English accents, with adjustable speaking speed.
          </div>
        </Reveal>
      )}
      </div>
    </section>
  );
}
