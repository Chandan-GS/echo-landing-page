import Image from 'next/image';
import Reveal from './Reveal';

const shots = [
  {
    src: '/home.jpeg',
    alt: 'Echo Home screen on a dark background: a serif "Good evening, Chandan" greeting, "101 notifications captured today", a live "Next Briefing in 10:02:54 at 7:00 AM" countdown, a white "Play Today\'s Briefing" card, and Ask Echo and Regenerate tiles.',
    title: 'Home',
    sub: 'Your briefing & countdown',
  },
  {
    src: '/ai.jpeg',
    alt: 'Ask Echo chat on a dark screen: the user asks "Do I have any meetings scheduled tonight?" and Echo answers in serif prose, with a "2 local notifications used" expandable chip below.',
    title: 'Ask Echo',
    sub: 'Chat with your day',
  },
  {
    src: '/brief.jpeg',
    alt: 'The Morning Briefing screen on a dark background: a green Siri-style audio waveform at the top with the spoken transcript below, dates and times highlighted in green.',
    title: 'Morning Briefing',
    sub: 'Your day, spoken aloud',
  },
];

export default function ScreenshotShowcase() {
  return (
    <section className="sec" style={{ background: '#FBFAF7' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">See it in motion</span>
          <h2>Designed to feel calm in the hand.</h2>
          <p>Warm, editorial, and quietly premium — the same care in every screen.</p>
        </Reveal>
        <div className="shots">
          {shots.map((shot) => (
            <Reveal as="figure" key={shot.title}>
              <div className="device glow">
                <div className="frame">
                  <Image src={shot.src} alt={shot.alt} width={720} height={1560} />
                </div>
              </div>
              <figcaption>
                {shot.title}
                <small>{shot.sub}</small>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
