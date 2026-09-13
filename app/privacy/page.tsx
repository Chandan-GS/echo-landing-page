import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandOrb } from '@/components/Mascot';
import { CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Privacy Policy — Echo',
  description:
    'How Echo handles your data: notifications, SMS and calendar are processed on-device by default, nothing is transmitted unless you enable the optional cloud engine. No ads, no third-party tracking.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    siteName: 'Echo',
    title: 'Privacy Policy — Echo',
    description:
      'Echo processes your notifications, SMS and calendar on-device by default. Nothing leaves your phone unless you opt into the cloud engine. No ads, no third-party tracking.',
    url: '/privacy/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

const tldr = [
  'Your notifications, SMS and calendar are read to build your briefing.',
  'By default, everything is processed on your device.',
  'Nothing is sent off your phone unless you enable the optional Gemini engine.',
  'No ads, and no third-party analytics or advertising trackers.',
  'Your captured history lives in a local vault you can clear any time.',
  'Uninstalling Echo removes its data from your device.',
];

const toc = [
  ['who', 'Who we are'],
  ['data', 'Data Echo accesses & why'],
  ['processing', 'On-device processing by default'],
  ['cloud', 'The optional cloud engine'],
  ['permissions', 'Permissions we request'],
  ['storage', 'Local storage & the Vault'],
  ['sharing', 'Sharing & third parties'],
  ['ads', 'Advertising & analytics'],
  ['retention', 'Retention & deletion'],
  ['children', "Children's privacy"],
  ['security', 'Security'],
  ['rights', 'Your rights'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact us'],
];

export default function PrivacyPage() {
  return (
    <>
      <header className="nav">
        <div className="doc-nav-inner">
          <Link className="brand" href="/" aria-label="Echo home">
            <BrandOrb />
            Echo
          </Link>
          <Link className="back" href="/">
            ← Back to Echo
          </Link>
        </div>
      </header>

      <section className="doc-hero">
        <div className="doc-hero-bg" aria-hidden="true" />
        <div className="wrap doc-wrap">
          <div className="eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="dates">
            Effective date: 13 September 2026 · Last updated: 13 September 2026
          </p>
          <p className="intro">
            Echo is a privacy-first personal briefing app. This policy explains, in plain language,
            what data Echo accesses, why it needs it, where that data is processed, and the control
            you have over it.
          </p>
        </div>
      </section>

      <div className="wrap doc-wrap">
        <div className="tldr">
          <h2>The short version</h2>
          <p>You don&apos;t have to read the whole thing to trust it. Here&apos;s the essence:</p>
          <ul>
            {tldr.map((item) => (
              <li key={item}>
                <CheckIcon /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="wrap doc-wrap">
        <nav className="toc" aria-label="Contents">
          <h2>Contents</h2>
          <ol>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section className="doc" id="who">
          <h2>1. Who we are</h2>
          <p>
            Echo (&ldquo;Echo&rdquo;, &ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
            personal briefing application for mobile devices. Echo captures information already
            present on your device — your notifications, text messages and calendar — and
            synthesizes it into a short, personalized spoken briefing, along with an assistant
            (&ldquo;Ask Echo&rdquo;) that answers questions about that information.
          </p>
          <p>
            This policy applies to the Echo mobile app. It does not apply to third-party services you
            may separately choose to use (for example, Google Gemini, if you enable the optional
            cloud engine described below).
          </p>
        </section>

        <section className="doc" id="data">
          <h2>2. What data Echo accesses, and why</h2>
          <p>
            Echo is designed to read only what it needs to produce your briefing and to answer your
            questions. Specifically:
          </p>

          <h3>Notifications</h3>
          <p>
            With your permission (the Android notification-listener permission), Echo reads the
            notifications that arrive on your device — for example the sending app, title, text and
            timestamp. This is the core of your briefing: it lets Echo tell you what happened across
            your apps without you having to open each one.
          </p>

          <h3>SMS / text messages</h3>
          <p>
            If you grant SMS access, Echo reads incoming text messages so it can include relevant
            messages in your briefing and answer questions such as &ldquo;any messages I
            missed?&rdquo;. Echo does not send text messages on your behalf.
          </p>

          <h3>Calendar</h3>
          <p>
            If you grant calendar access, Echo reads your upcoming events — titles, times and
            locations — so your briefing can tell you what&apos;s on your schedule and Ask Echo can
            answer questions about it.
          </p>

          <h3>Microphone (voice)</h3>
          <p>
            When you use Ask Echo in voice mode, Echo uses your microphone to capture your spoken
            question so it can be transcribed to text. The microphone is only active while you are
            using voice mode.
          </p>

          <div className="note">
            <strong>We collect only what serves you.</strong> Echo does not read data unrelated to
            briefings — it does not access your photos, contacts list, files, location, or browsing
            history to build its features.
          </div>
        </section>

        <section className="doc" id="processing">
          <h2>3. On-device processing by default</h2>
          <p>
            By default, Echo processes everything <strong>locally on your device</strong>. The app
            includes a compact, quantized on-device language model (Qwen2.5 1.5B) that reads your
            captured notifications, messages and calendar and generates your briefing entirely on the
            phone.
          </p>
          <p>In this default mode:</p>
          <ul>
            <li>
              Your notification, SMS and calendar content is{' '}
              <strong>not transmitted to us or to any third party</strong>.
            </li>
            <li>
              Echo does not require an internet connection to generate a briefing or to answer
              questions.
            </li>
            <li>
              We do not receive, see, or store your personal content on any server, because there is
              no server involved.
            </li>
          </ul>
          <p>
            Text-to-speech (reading your briefing aloud) is performed using the speech capabilities
            available on your device.
          </p>
        </section>

        <section className="doc" id="cloud">
          <h2>4. The optional cloud engine (Google Gemini)</h2>
          <p>
            Some people prefer faster, richer responses. For that reason Echo offers an{' '}
            <strong>optional</strong> cloud engine powered by Google Gemini. This engine is{' '}
            <strong>turned off by default</strong>. It is used only if you deliberately enable it in
            Settings.
          </p>
          <p>When — and only when — you enable the cloud engine:</p>
          <ul>
            <li>
              The relevant text needed to generate your briefing or answer your question (for
              example, the notification, message or calendar text being summarized, and your typed or
              transcribed prompt) is sent to Google&apos;s Gemini API over an encrypted connection.
            </li>
            <li>
              That text is processed by Google to return a generated response, which Echo then shows
              or reads to you.
            </li>
            <li>
              Google&apos;s handling of that data is governed by Google&apos;s own terms and privacy
              policy for the Gemini API. We encourage you to review them before enabling the cloud
              engine.
            </li>
          </ul>
          <p>
            You can switch back to the fully on-device engine at any time. When the cloud engine is
            off, none of your content is sent to Gemini.
          </p>
          <div className="note">
            You are always in control of which engine is active, and Echo makes the current choice
            clear in the app.
          </div>
        </section>

        <section className="doc" id="permissions">
          <h2>5. Permissions we request</h2>
          <p>
            Echo asks only for the permissions its features require. You can decline any of them; the
            related feature will simply be unavailable. You can also change these permissions at any
            time in your device&apos;s system settings.
          </p>

          <div className="perm">
            <div className="k">Notification access</div>
            <h3>Notification listener</h3>
            <p>
              Lets Echo read incoming notifications so it can include them in your briefing and in
              Ask Echo. This is the app&apos;s central function.
            </p>
          </div>
          <div className="perm">
            <div className="k">SMS</div>
            <h3>Read text messages</h3>
            <p>
              Lets Echo include relevant messages in your briefing and answer questions about them.
              Optional.
            </p>
          </div>
          <div className="perm">
            <div className="k">Calendar</div>
            <h3>Read calendar events</h3>
            <p>Lets Echo tell you what&apos;s on your schedule. Optional.</p>
          </div>
          <div className="perm">
            <div className="k">Microphone</div>
            <h3>Voice input</h3>
            <p>
              Used only during Ask Echo voice sessions, to capture and transcribe your spoken
              question.
            </p>
          </div>
          <div className="perm">
            <div className="k">Notifications / Alarms</div>
            <h3>Deliver your briefing on time</h3>
            <p>Lets Echo post the tap-to-play notification and run at your chosen briefing time.</p>
          </div>
          <div className="perm">
            <div className="k">Internet</div>
            <h3>Network access</h3>
            <p>
              Used only if you enable the optional cloud engine. The on-device engine works without
              it.
            </p>
          </div>
        </section>

        <section className="doc" id="storage">
          <h2>6. Local storage and the Vault</h2>
          <p>
            To build briefings and let you look back over your day, Echo keeps a history of captured
            notifications in a local store on your device called the <strong>Vault</strong>. Your app
            settings — such as your chosen briefing time, voice persona and speaking speed — are also
            stored locally.
          </p>
          <ul>
            <li>This data is stored on your device, within Echo&apos;s private app storage.</li>
            <li>You can browse and categorize items in the Vault, and clear them whenever you want.</li>
            <li>
              You can configure Echo to automatically delete older captured items after a period you
              choose.
            </li>
          </ul>
        </section>

        <section className="doc" id="sharing">
          <h2>7. Sharing and third parties</h2>
          <p>
            We do not sell your personal information, and we do not share your notification, message
            or calendar content with third parties for their own purposes.
          </p>
          <p>
            The only circumstance in which your content leaves your device is the{' '}
            <a href="#cloud">optional cloud engine</a> you choose to enable, in which case the
            relevant text is sent to Google&apos;s Gemini API solely to generate your response. Aside
            from that, Echo does not transmit your personal content to any external service.
          </p>
        </section>

        <section className="doc" id="ads">
          <h2>8. Advertising and analytics</h2>
          <p>
            Echo contains <strong>no advertising</strong>. We do not show ads and we do not integrate
            third-party advertising networks.
          </p>
          <p>
            Echo does not use third-party analytics or tracking SDKs to build a profile of you or to
            follow you across other apps and websites. We do not sell or share your data with data
            brokers.
          </p>
          <p>
            If we ever introduce limited, privacy-respecting diagnostics to keep the app stable (for
            example, anonymous crash reports), we will update this policy first, describe exactly what
            is collected, and — where required — ask for your consent. As of the effective date
            above, Echo does not include such tools.
          </p>
        </section>

        <section className="doc" id="retention">
          <h2>9. Data retention and deletion</h2>
          <p>Because your content stays on your device by default, you control its lifetime:</p>
          <ul>
            <li>
              <strong>Clear it yourself:</strong> you can delete individual Vault items or clear the
              entire Vault from within Echo at any time.
            </li>
            <li id="deletion">
              <strong>Automatic clean-up:</strong> Echo can automatically remove captured items older
              than a period you set.
            </li>
            <li>
              <strong>Uninstall:</strong> removing Echo deletes the app&apos;s locally stored data,
              including the Vault and your settings, from your device.
            </li>
          </ul>
          <p>
            If you use the optional cloud engine, the text sent for a given request is processed by
            Google to return a response; its retention by Google is governed by Google&apos;s terms
            for the Gemini API. Echo itself does not keep a copy of your content on any server.
          </p>
        </section>

        <section className="doc" id="children">
          <h2>10. Children&apos;s privacy</h2>
          <p>
            Echo is intended for a general audience and is not directed to children under the age of
            13 (or the minimum age required in your jurisdiction). We do not knowingly collect
            personal information from children. If you believe a child has used Echo in a way that
            raises a concern, please contact us and we will help address it.
          </p>
        </section>

        <section className="doc" id="security">
          <h2>11. Security</h2>
          <p>
            We take reasonable measures to protect your information. Keeping processing on-device by
            default is itself a strong safeguard: data that never leaves your phone can&apos;t be
            intercepted in transit or exposed by a server breach. When you use the optional cloud
            engine, requests are sent over an encrypted connection. Your device&apos;s own security
            (screen lock, OS protections) also helps keep the local Vault safe. No method of storage
            or transmission is completely secure, but we design Echo to minimize what is exposed in
            the first place.
          </p>
        </section>

        <section className="doc" id="rights">
          <h2>12. Your rights and choices</h2>
          <p>You are in control of Echo at all times. You can:</p>
          <ul>
            <li>Grant or revoke any permission from your device settings.</li>
            <li>Choose the on-device engine so that no content leaves your phone.</li>
            <li>View, categorize and delete your captured history in the Vault.</li>
            <li>Uninstall Echo to remove its local data from your device.</li>
          </ul>
          <p>
            Depending on where you live, you may have additional rights under laws such as the GDPR or
            CCPA (for example, to access or delete personal data). Because Echo keeps your content on
            your device rather than on our servers, you can exercise the core of these rights directly
            in the app. For any request you can&apos;t fulfil yourself, contact us using the details
            below.
          </p>
        </section>

        <section className="doc" id="changes">
          <h2>13. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time — for example, if we add a feature or
            change how data is handled. When we do, we will revise the &ldquo;Last updated&rdquo; date
            at the top of this page, and for significant changes we will provide a more prominent
            notice within the app. Your continued use of Echo after an update means you accept the
            revised policy.
          </p>
        </section>

        <section className="doc" id="contact">
          <h2>14. Contact us</h2>
          <p>
            If you have any questions about this policy or about how Echo handles your data, please
            reach out:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:privacy@echo.app">privacy@echo.app</a>
          </p>
          <p>We aim to respond to privacy inquiries promptly.</p>
        </section>
      </main>

      <footer className="doc-foot">
        <div className="wrap doc-wrap doc-foot-inner">
          <span>© 2026 Echo. All rights reserved.</span>
          <span>
            <Link href="/">Home</Link> · <Link href="/privacy/">Privacy Policy</Link> ·{' '}
            <a href="mailto:privacy@echo.app">Contact</a>
          </span>
        </div>
      </footer>
    </>
  );
}
