import Reveal from './Reveal';
import Mascot from './Mascot';
import PlayBadge from './PlayBadge';
import DownloadButton from './DownloadButton';

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="final-glow" aria-hidden="true" />
      <div className="wrap">
        <Mascot className="final-mascot float-orb" />
        <Reveal as="h2">Start every morning a step ahead.</Reveal>
        <Reveal as="p">
          Install Echo and set your first briefing in under a minute. Free, private, and quietly
          yours.
        </Reveal>
        <Reveal className="cta-actions">
          <PlayBadge height={56} />
          <DownloadButton className="btn btn-ghost" ariaLabel="How to install Echo">
            How to install
          </DownloadButton>
        </Reveal>
      </div>
    </section>
  );
}
