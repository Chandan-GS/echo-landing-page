import Reveal from './Reveal';
import { ExpandIcon } from './icons';

const faqs = [
  {
    q: 'Is Echo really free?',
    a: 'Yes. The on-device engine is completely free with no subscription and no account. If you opt into the optional Google Gemini cloud engine, that uses your own API access — Echo itself stays free.',
  },
  {
    q: 'Does my data leave my phone?',
    a: 'Not by default. With the on-device engine, your notifications, messages and calendar are processed locally and nothing is transmitted. Only if you deliberately enable the cloud engine is the relevant text sent to Gemini to generate a response.',
  },
  {
    q: 'How does Echo see my notifications?',
    a: 'With your permission, Echo uses the Android notification-listener to read incoming notifications so it can summarize them. You can grant or revoke this — and SMS, calendar and microphone access — any time in system settings.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. There is no sign-up. Install Echo, set your briefing time and voice, and you are ready — your Vault and settings live on your device.',
  },
  {
    q: 'Which platforms is Echo on?',
    a: 'Echo is an Android app. Install it from Google Play, set your first briefing in under a minute, and pick from four voices across a range of English accents.',
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">Good to know</span>
          <h2 className="section-h2">Questions, answered</h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map((f) => (
            <Reveal as="details" className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <ExpandIcon className="material-icon" />
              </summary>
              <div className="faq-body">{f.a}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
