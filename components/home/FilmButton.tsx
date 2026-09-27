'use client';

import { PlayIcon } from '../icons';

/** The app's white "Play Today's Briefing" card, here playing the film. */
export default function FilmButton() {
  return (
    <button className="play-card" onClick={() => window.dispatchEvent(new Event('echo:film'))}>
      <span>
        <span className="t">Watch the film</span>
        <span className="s">84 seconds, sound on</span>
      </span>
      <PlayIcon className="material-icon" />
    </button>
  );
}
