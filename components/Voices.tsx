import Reveal from './Reveal';

const voices = [
  { name: 'Aria', desc: 'Warm · bright' },
  { name: 'Sage', desc: 'Calm · measured' },
  { name: 'Atlas', desc: 'Deep · steady' },
  { name: 'Nova', desc: 'Crisp · lively' },
];

export default function Voices() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your voice</span>
          <h2>Pick a voice that sounds like your morning.</h2>
          <p>
            Four distinct personas across a range of English accents — with adjustable speed, so the
            briefing lands at your pace.
          </p>
        </Reveal>
        <div className="voices">
          {voices.map((voice) => (
            <Reveal className="voice" key={voice.name}>
              <div className="ring" aria-hidden="true" />
              <b>{voice.name}</b>
              <span>{voice.desc}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
