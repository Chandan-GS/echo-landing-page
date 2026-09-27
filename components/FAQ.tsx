import Reveal from './Reveal';
import { ExpandIcon } from './icons';

const faqs = [
  {
    q: 'Is Echo really free?',
    a: 'Yes. The on-device engine is free, with no subscription and no account. If you opt into the Google Gemini cloud engine, that uses your own API access. Echo itself stays free.',
  },
  {
    q: 'Does my data leave my phone?',
    a: 'Not by default. Your notifications, messages and calendar are processed on your devices and nothing is transmitted. Only if you turn on the cloud engine is the relevant text sent to Gemini to write your briefing.',
  },
  {
    q: 'How does Echo see my notifications?',
    a: 'With your permission, Echo uses Android’s notification access. You choose which apps it hears, and you can revoke notification, SMS, calendar and microphone access any time in system settings.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. Install Echo, set your briefing time and voice, and you’re ready. Your Vault and settings live on your device.',
  },
  {
    q: 'Which platforms is Echo on?',
    a: 'Android, from Google Play, plus a desktop app for Mac and Windows. On the same Wi‑Fi, your phone shares your day with your desktop automatically.',
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
