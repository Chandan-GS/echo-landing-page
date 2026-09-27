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
            Good evening. Rohan has booked Toit for tomorrow at <b>8:30 PM</b>, on the terrace, so bring
            something warm. Tomorrow the design review moves to <b>11 AM</b> on Google Meet, and Karan wants
            the Q3 deck before then. Your mom says the electricity bill is due the same day. Arjun lands at{' '}
            <b>10 PM</b> and asked if you can pick him up.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
