import Reveal from './Reveal';

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap section">
        <div className="problem-inner">
          <Reveal>
            <span className="eyebrow">The problem</span>
            <h2>Your phone buzzed 100+ times today. You read maybe ten of them.</h2>
            <p>
              Notifications pile up faster than anyone can triage. The one message that mattered gets
              buried under delivery updates and group chats — so you either lose an hour scrolling to
              catch up, or you miss it entirely. Echo fixes that without adding one more thing to
              check.
            </p>
          </Reveal>
          <Reveal className="problem-stats">
            <div className="pstat">
              <div className="num">100+</div>
              <div className="lbl">Notifications captured on a typical day</div>
            </div>
            <div className="pstat">
              <div className="num">2 min</div>
              <div className="lbl">To hear your whole day, instead of scrolling for an hour</div>
            </div>
            <div className="pstat">
              <div className="num">0</div>
              <div className="lbl">Interruptions while Echo works in the background</div>
            </div>
            <div className="pstat">
              <div className="num">1</div>
              <div className="lbl">Calm briefing, at the time you choose</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
