import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeatureRow from '@/components/FeatureRow';
import EngineChoice from '@/components/EngineChoice';
import FeatureGrid from '@/components/FeatureGrid';
import Voices from '@/components/Voices';
import ScreenshotShowcase from '@/components/ScreenshotShowcase';
import PrivacyBand from '@/components/PrivacyBand';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />

        {/* FEATURE 1: Daily audio briefing — the signature waveform screen */}
        <section className="sec" id="briefing">
          <div className="wrap">
            <FeatureRow
              eyebrow="The daily briefing"
              title="Your whole day, in four calm minutes."
              body="No scrolling. No dozens of notifications to triage. Set a time — 7 AM, say — and Echo delivers one spoken briefing that ties together what actually happened: the meetings, the messages that mattered, the reminders you'd have missed."
              points={[
                'A calm audio waveform plays your day while the transcript scrolls below.',
                'Wake up already caught up — before you’ve unlocked your phone.',
                'Regenerate any time to fold in what just came in.',
              ]}
              image={{
                src: '/brief.jpeg',
                alt: 'Echo’s Morning Briefing screen on a dark background: a green Siri-style audio waveform at the top and the spoken transcript below, with dates and times such as "Saturday", "10:30 AM" and "9:30 AM" highlighted in green.',
              }}
            />
          </div>
        </section>

        <EngineChoice />

        {/* FEATURE 2: Ask Echo */}
        <section className="sec" id="ask" style={{ background: '#FBFAF7' }}>
          <div className="wrap">
            <FeatureRow
              reversed
              eyebrow="Ask Echo"
              title="Ask a question. Get a real answer."
              body="Everything Echo has captured is searchable in plain language. Type or speak — “Do I have any meetings tonight?”, “Any messages from work I missed?” — and Echo answers from your own history, showing exactly which notifications it drew from."
              points={[
                'Type or use voice input — hands-free while you get ready.',
                'Every answer shows the notifications it used, so you can trust it.',
                'Grounded in your data — no made-up details.',
              ]}
              image={{
                src: '/ai.jpeg',
                alt: 'The Ask Echo chat screen on a dark background: the user asks "Do I have any meetings scheduled tonight?" and Echo replies in serif prose that there are none, referencing the HCLTech talk and AICTE activity, with a "2 local notifications used" chip.',
              }}
            />
          </div>
        </section>

        {/* FEATURE 3: The Vault */}
        <section className="sec">
          <div className="wrap">
            <FeatureRow
              eyebrow="The Vault"
              title="Every notification, organized and yours."
              body="Echo keeps a private, on-device history of everything it captured. Browse it by app, scrub an interactive breakdown of your day, and rename, block or clear any source — all without anything leaving your phone."
              points={[
                'Scrub an interactive ring chart to explore your day by category.',
                'Group by app and rename, block or clear a source in a tap.',
                'Auto-delete older items after a period you choose.',
              ]}
              image={{
                src: '/vault.jpeg',
                alt: 'The Vault screen on a dark background: a serif "The Vault" heading, an All / Categories toggle, and a large multi-colored ring chart with a "Scrub to explore" prompt in the center.',
              }}
            />
          </div>
        </section>

        <FeatureGrid />
        <Voices />
        <ScreenshotShowcase />
        <PrivacyBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
