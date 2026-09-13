import FeatureRow from './FeatureRow';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <FeatureRow
          eyebrow="The morning briefing"
          title="Your whole day, spoken in two calm minutes."
          body="Echo's signature moment: a green audio waveform plays your briefing aloud while the transcript scrolls below, with the times and dates that matter highlighted. It's the one thing to hear before you've even unlocked your phone."
          points={[
            'A natural spoken summary — not another screen to read.',
            'A live countdown shows exactly when the next briefing lands.',
            'Regenerate any time to fold in what just came in.',
          ]}
          image={{
            src: '/brief.jpeg',
            alt: "Echo's Morning Briefing on a dark screen: a green Siri-style audio waveform above the spoken transcript, with dates and times such as 'Saturday', '10:30 AM' and '9:30 AM' highlighted in green.",
          }}
        />

        <FeatureRow
          reverse
          eyebrow="Ask Echo"
          title="Ask a question. Get a real answer from your own day."
          body="Everything Echo captured is searchable in plain language. Ask “Do I have any meetings tonight?” or “Any messages from work I missed?” and Echo answers from your history — and shows exactly which notifications it used."
          points={[
            'Grounded in your data, so answers are specific — not made up.',
            'Every reply shows its sources, right there in the chat.',
            'Type it, or ask out loud, hands-free while you get ready.',
          ]}
          image={{
            src: '/ai.jpeg',
            alt: 'The Ask Echo chat on a dark screen: the user asks "Do I have any meetings scheduled tonight?" and Echo answers in serif prose that there are none, with a "2 local notifications used" chip.',
          }}
        />

        <FeatureRow
          eyebrow="The Vault"
          title="Every notification, kept and organized — on your phone."
          body="Nothing slips through. Echo logs each notification in a private, on-device Vault you can browse by app, category or time. Scrub the interactive ring to explore your day, and rename, block or clear any noisy source."
          points={[
            'Scrub a category ring to see where your day actually went.',
            'Group by app and rename, block or clear a source in a tap.',
            'Auto-delete older items after a period you choose.',
          ]}
          image={{
            src: '/vault.jpeg',
            alt: "The Vault on a dark screen: a serif 'The Vault' heading, an All / Categories toggle, and a large multi-colored ring chart with a 'Scrub to explore' prompt in the center.",
          }}
        />
      </div>
    </section>
  );
}
