import { Fragment } from 'react';
import Reveal from './Reveal';

const steps = [
  {
    n: '01 — CAPTURES',
    title: 'It listens',
    body: 'Notifications, SMS and calendar events are collected quietly, all day.',
  },
  {
    n: '02 — SYNTHESIZES',
    title: 'It understands',
    body: 'AI sorts the noise from the signal and writes a short, human summary.',
  },
  {
    n: '03 — SPEAKS',
    title: 'It briefs you',
    body: 'At the time you pick, Echo reads your day aloud in a voice you chose.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <Reveal className="how-card">
          {steps.map((step, i) => (
            <Fragment key={step.n}>
              <div className="how-step">
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="how-arrow" aria-hidden="true">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
