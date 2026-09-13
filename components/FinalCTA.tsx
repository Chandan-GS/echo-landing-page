import Reveal from './Reveal';
import { CtaMascot, DecoRings } from './Mascot';
import GooglePlayButton from './GooglePlayButton';

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="wrap">
        <Reveal className="box">
          <DecoRings />
          <CtaMascot />
          <h2>Start every morning a step ahead.</h2>
          <p>
            Install Echo and set your first briefing in under a minute. Free, private, and quietly
            yours.
          </p>
          <div className="cta-row">
            <GooglePlayButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
