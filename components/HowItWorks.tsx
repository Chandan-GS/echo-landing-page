import Reveal from './Reveal';
import { NotificationsIcon, GraphicEqIcon, ScheduleIcon } from './icons';

const steps = [
  {
    n: 'Step 01',
    icon: <NotificationsIcon className="material-icon" />,
    title: 'Echo listens, quietly',
    body: 'In the background, Echo captures your notifications, texts and calendar events all day — even when the app is closed. Nothing to open, nothing to check.',
  },
  {
    n: 'Step 02',
    icon: <GraphicEqIcon className="material-icon" />,
    title: 'It sorts signal from noise',
    body: "On-device AI reads everything, drops the junk, and writes a short, human summary of what actually happened and what's coming up.",
  },
  {
    n: 'Step 03',
    icon: <ScheduleIcon className="material-icon" />,
    title: 'You wake up briefed',
    body: 'At the time you pick — 7 AM, say — Echo reads your day aloud in the voice you chose. Two minutes, and you are caught up.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-h2">Set it once. It runs every day.</h2>
        </Reveal>
        <div className="steps">
          {steps.map((s) => (
            <Reveal className="step" key={s.n}>
              <div className="step-n">{s.n}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
