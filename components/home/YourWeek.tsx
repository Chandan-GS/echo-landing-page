import Reveal from '../Reveal';

/*
 * Profile's week, drawn as the app draws it (dark theme):
 * lib/features/profile/presentation/widgets/streak_calendar.dart and the
 * week tiles and chart in profile_screen.dart.
 */
const READ = [37, 47, 49, 40, 54, 43, 48];
const LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const DONE = [2, 3, 4]; // October days with a briefing heard
const MISSED = [1];
const BAR_MAX = 92;

type Day = { d: number; state: 'done' | 'missed' | 'plain' } | null;

/** October 2026 starts on a Thursday. */
const weeks = (() => {
  const cells: Day[] = [null, null, null];
  for (let d = 1; d <= 31; d++) cells.push({ d, state: DONE.includes(d) ? 'done' : MISSED.includes(d) ? 'missed' : 'plain' });
  while (cells.length % 7) cells.push(null);
  const out: Day[][] = [];
  for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
  return out;
})();

/** Runs of consecutive done days in a week → one trail each, as [start, end). */
const trails = (week: Day[]) => {
  const out: [number, number][] = [];
  let start: number | null = null;
  for (let i = 0; i <= 7; i++) {
    const done = i < 7 && week[i]?.state === 'done';
    if (done && start === null) start = i;
    if (!done && start !== null) {
      out.push([start, i]);
      start = null;
    }
  }
  return out;
};

export default function YourWeek() {
  const most = Math.max(...READ);
  return (
    <section className="section">
      <Reveal className="wrap center">
        <p className="kicker">Your week</p>
        <h2>See what Echo did for you.</h2>
        <p className="body">A streak for every morning you listen, and the week in three numbers: to-dos done, replies sent and messages Echo read so you didn’t have to.</p>
      </Reveal>
      <div className="wrap pair">
        <Reveal className="pair-item">
          <div className="streak-card">
            <div className="st-hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="st-flame" src="/fire.gif" alt="" width={48} height={48} />
              <div className="st-main">
                <div className="st-n">3</div>
                <div className="st-l">day streak</div>
              </div>
              <div className="st-best">
                <small>LONGEST</small>
                12 days
              </div>
            </div>
            <div className="st-cal">
              <div className="st-month">October 2026</div>
              <div className="st-row st-letters">
                {LETTERS.map((l, i) => <span key={i}>{l}</span>)}
              </div>
              {weeks.map((week, w) => (
                <div className="st-row st-week" key={w}>
                  {trails(week).map(([a, b]) => (
                    <i key={a} className="st-trail" style={{ left: `calc(${(a / 7) * 100}% + var(--hp))`, width: `calc(${((b - a) / 7) * 100}% - 2 * var(--hp))` }} />
                  ))}
                  {week.map((day, i) => (
                    <span key={i} className="st-cell">
                      {day && <span className={`st-dot ${day.state}`}>{day.d}</span>}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="cap"><b>A streak, for listening.</b><span>Every morning you hear your briefing counts.</span></div>
        </Reveal>
        <Reveal className="pair-item">
          <div className="week-col">
            <div className="wk-tiles">
              <div className="wk-tile"><b className="acc">12</b><span>to-dos done</span></div>
              <div className="wk-tile"><b>26</b><span>replies through Echo</span></div>
              <div className="wk-tile"><b>318</b><span>messages read for you</span></div>
            </div>
            <div className="wk-chart">
              <div className="wk-chart-h"><b>Messages Echo read</b><span>a day</span></div>
              <div className="wk-bars" aria-hidden="true">
                {READ.map((n, i) => (
                  <div className={`wk-bar ${i === READ.length - 1 ? 'today' : ''}`} key={i}>
                    <small>{n}</small>
                    <i style={{ height: Math.max(3, (BAR_MAX * n) / most) }} />
                    <span>{LETTERS[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="cap"><b>Your week, in numbers.</b><span>Kept on your phone, as counts only.</span></div>
        </Reveal>
      </div>
    </section>
  );
}
