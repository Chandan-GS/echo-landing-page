'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';
import { PlayIcon } from '../icons';

/** The launch film. Plays in place, from its own button or the hero's. */
export default function Film() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    video.current?.play().catch(() => {});
    window.dispatchEvent(new Event('echo:happy'));
  };

  useEffect(() => {
    const onFilm = () => {
      section.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      play();
    };
    window.addEventListener('echo:film', onFilm);
    return () => window.removeEventListener('echo:film', onFilm);
  }, []);

  return (
    <section className="film" id="film" ref={section}>
      <Reveal className="wrap film-wrap">
        <div className="film-frame">
          <video
            ref={video}
            src="/media/echo-film.mp4"
            poster="/media/echo-film-poster.jpg"
            preload="metadata"
            playsInline
            controls={playing}
          />
          {!playing && (
            <button className="film-play" onClick={play} aria-label="Play the Echo film">
              <span className="dot">
                <PlayIcon className="material-icon" />
              </span>
            </button>
          )}
        </div>
        <p className="film-cap">Echo in two minutes, filmed on the real app.</p>
      </Reveal>
    </section>
  );
}
