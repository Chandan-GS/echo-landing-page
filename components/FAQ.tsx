import Reveal from './Reveal';
import { ExpandIcon } from './icons';

const faqs = [
  {
    q: 'Is Echo really free?',
    a: 'Yes. The on-device engine is free, with no subscription and no account. If you opt into the Google Gemini cloud engine, that uses your own API access. Echo itself stays free.',
  },
  {
    q: 'Does my data leave my phone?',
    a: 'Never to us. By default your notifications and calendar are processed on your own devices. Text goes to Google Gemini only if you turn on the cloud engine with your own key, and to your desktop only if you pair one, directly over your Wi‑Fi.',
  },
  {
    q: 'How does Echo see my notifications?',
    a: 'With your permission, Echo uses Android’s notification access. You choose which apps it hears, and you can revoke notification, calendar and microphone access any time in system settings.',
  },
  {
    q: 'Which apps does Echo work with?',
    a: 'Any app that shows notifications on your phone: WhatsApp, Slack, Teams, Gmail, Outlook, Calendar, GitHub, Jira, Notion, Telegram and more. You switch each one on or off in Apps Echo hears.',
  },
  {
    q: 'Can Echo reply for me?',
    a: 'Only when you say so. Echo suggests or drafts a reply, and nothing is sent until you tap Send. Replies go through the app’s own notification reply, from your account. Replies written on your desktop are sent by your phone.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. Install Echo, set your briefing time and voice, and you’re ready. Your Vault and settings live on your device.',
  },
  {
    q: 'Which platforms is Echo on?',
    a: 'Android, from Google Play. A desktop app for Mac and Windows is coming soon: on the same Wi‑Fi, your phone will share your day with your desktop automatically.',
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal as="h2" className="center faq-h">Good to know</Reveal>
        <Reveal className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <ExpandIcon className="material-icon" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
