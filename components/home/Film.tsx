'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';
import { PlayIcon } from '../icons';

/** The launch film on YouTube (youtu.be/-OP1nj22nzs). */
const YOUTUBE_ID = '-OP1nj22nzs';

/**
 * The launch film. The poster and play button are ours; YouTube's player
 * (privacy-enhanced, no cookies until it plays) only loads once someone
 * presses play, from its own button or the hero's.
 */
export default function Film() {
  const section = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
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
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&playsinline=1`}
              title="Meet Echo"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <>
              <img src="/media/echo-film-poster.jpg" alt="" />
              <button className="film-play" onClick={play} aria-label="Play the Echo film">
                <span className="dot">
                  <PlayIcon className="material-icon" />
                </span>
              </button>
            </>
          )}
        </div>
        <p className="film-cap">Echo in two minutes, filmed on the real app.</p>
      </Reveal>
    </section>
  );
}
