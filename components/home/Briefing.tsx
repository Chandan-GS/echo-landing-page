import Reveal from '../Reveal';

export default function Briefing() {
  return (
    <section className="section" id="features">
      <Reveal className="wrap center">
        <p className="kicker">Your briefing</p>
        <h2>Two minutes, and you’re caught up.</h2>
        <p className="body">
          Echo reads the whole day for you, drops the noise, and speaks the rest out loud, covering
          today and tomorrow. It arrives at the time you choose, in the voice you choose.
        </p>
      </Reveal>
      <Reveal className="wrap brief">
        {/* The app's own briefing waveform, recorded from the phone. */}
        <video className="wave" src="/media/waveform.mp4" poster="/media/waveform-poster.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        <div className="card">
          <h4>Transcript</h4>
          <p className="transcript">
            Good morning. Rohan is driving to Coorg on <b>Friday</b> and wants to know if you’re in. On
            Slack, Karan needs the deck before tomorrow’s review, and Vikram wants your sign-off on the
            release notes before <b>5</b>. Neha moved the demo to <b>tomorrow evening</b>, and Mahesh asked
            for your review on GitHub. Priya landed safely, and the college group has the trip sorted.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
