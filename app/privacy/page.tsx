import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Privacy Policy — Echo',
  description:
    'How Echo handles your data: your notifications and calendar are processed on your own devices, nothing comes to us, and nothing goes to an AI provider unless you turn on the optional cloud engine with your own key. No ads or advertising trackers.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    siteName: 'Echo',
    title: 'Privacy Policy — Echo',
    description:
      'Echo processes your notifications and calendar on your own phone and desktop. Nothing is sent to us, and nothing goes to an AI provider unless you opt into the cloud engine. No ads or advertising trackers.',
    url: '/privacy/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};

const tldr = [
  'Echo reads your notifications and calendar to build your briefing, your to-do list and your answers.',
  'All of it is processed on your own devices. We have no servers that receive your content.',
  'It goes to Google Gemini only if you turn on the optional cloud engine with your own API key.',
  'If you pair a desktop, your phone shares your day with it directly over your local network.',
  'Nothing is ever sent for you without a tap on Send.',
  'No ads or advertising trackers, just anonymous usage counts you can switch off.',
  'Echo deletes old items by itself, and uninstalling removes everything.',
];

const toc = [
  ['who', 'Who we are'],
  ['data', 'Data Echo accesses & why'],
  ['processing', 'On-device processing'],
  ['cloud', 'The optional cloud engine'],
  ['desktop', 'Echo on your desktop'],
  ['replies', 'Replies and reminders'],
  ['permissions', 'Permissions we request'],
  ['storage', 'What Echo keeps on your devices'],
  ['network', 'Other network connections'],
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
      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="nav-logo-container" aria-label="Echo home">
            <Image src="/logo.png" alt="Echo logo" className="nav-logo-img" width={32} height={32} priority />
            <span className="nav-logo">Echo</span>
          </Link>
        </div>
      </nav>

      <main className="doc-main">
        <div className="doc-hero">
          <div className="section-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="doc-dates">Effective date: 13 September 2026 · Last updated: 8 October 2026</p>
          <p className="doc-intro">
            Echo is a privacy-first personal briefing app for Android, with a companion app for Mac
            and Windows. This policy explains, in plain language, what data Echo accesses, why it
            needs it, where that data is processed, and the control you have over it.
          </p>
        </div>

        <div className="tldr">
          <h2>The short version</h2>
          <p>You don&apos;t have to read the whole thing to trust it. Here&apos;s the essence:</p>
          <ul>
            {tldr.map((item) => (
              <li key={item}>
                <CheckIcon className="material-icon" /> {item}
              </li>
            ))}
          </ul>
        </div>

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
            personal briefing app. Echo reads information already on your phone, namely your
            notifications and your calendar, and turns it into a short spoken briefing, a list of who
            is waiting on you, a to-do list with reminders, and an assistant (&ldquo;Ask Echo&rdquo;)
            that answers questions about your day. A companion app for Mac and Windows shows the same
            day on your computer.
          </p>
          <p>
            This policy applies to the Echo Android app, the Echo desktop app for Mac and Windows, and
            this website. It does not apply to third-party services you may separately choose to use,
            such as Google Gemini if you enable the optional cloud engine described below.
          </p>
        </section>

        <section className="doc" id="data">
          <h2>2. What data Echo accesses, and why</h2>
          <p>
            Echo is designed to read only what it needs for its features. Specifically:
          </p>
          <h3>Notifications</h3>
          <p>
            With your permission (Android&apos;s notification access), Echo reads the notifications
            that arrive on your phone: the app they came from, the sender, the chat or group name, the
            text and the time. This is the core of Echo. You choose which apps Echo hears in{' '}
            <strong>Apps Echo hears</strong>, and notifications from apps you switch off are not
            captured. Text messages reach Echo the same way, as notifications from your messaging
            app. Echo does not read your SMS inbox.
          </p>
          <h3>Calendar</h3>
          <p>
            If you grant calendar access, Echo reads your upcoming events (title, time and
            description) so your briefing and Ask Echo can tell you what&apos;s on your schedule. Echo
            only reads your calendar; it never creates, changes or deletes events. Android shows this
            as a single calendar permission covering reading and writing, but Echo only reads.
          </p>
          <h3>Your installed apps</h3>
          <p>
            Echo lists the apps on your phone so you can choose which ones it hears, and uses their
            names and icons to label your notifications. This list stays on your phone.
          </p>
          <h3>Contacts (WhatsApp replies only)</h3>
          <p>
            When you reply to a one-to-one WhatsApp chat and Echo can&apos;t otherwise find that chat,
            it may ask for contacts access. Echo then looks only at the WhatsApp entries in your
            contacts to find the right chat to open, keeps that one chat identifier on your phone, and
            reads nothing else (no names, emails or other fields). This is optional; without it Echo
            lets you pick the chat yourself.
          </p>
          <h3>Microphone (voice questions)</h3>
          <p>
            When you speak a question to Ask Echo on your phone, Echo uses your phone&apos;s speech
            recognition service to turn it into text. On most Android phones this is provided by
            Google and may process your audio on Google&apos;s servers, under Google&apos;s terms.
            The microphone is only on while you are dictating. You can always type instead.
          </p>
          <h3>Camera (pairing a desktop)</h3>
          <p>
            The camera is used only to scan the QR code shown by the Echo desktop app when you pair
            it. Echo reads the code and nothing else; no photos or video are saved or sent.
          </p>
          <div className="note">
            <strong>We collect only what serves you.</strong> Echo does not access your photos, files,
            location or browsing history, and it does not read your contacts beyond the WhatsApp
            lookup described above.
          </div>
        </section>

        <section className="doc" id="processing">
          <h2>3. On-device processing</h2>
          <p>
            By default, Echo processes everything <strong>on your own devices</strong>. The phone uses
            a compact AI model (Qwen2.5 1.5B) that runs on the phone itself; the desktop app uses a
            larger one (Qwen2.5 7B) that runs on your computer. Echo uses them to write your
            briefing, answer your questions, find your to-dos, sum up busy groups and draft replies.
          </p>
          <p>In this mode:</p>
          <ul>
            <li>
              Your notification and calendar content is{' '}
              <strong>not sent to us or to any AI provider</strong>.
            </li>
            <li>No internet connection is needed to make a briefing or answer a question.</li>
            <li>
              We never receive, see or store your personal content, because no server of ours is
              involved.
            </li>
          </ul>
          <p>
            Your briefing is read aloud by your device&apos;s own text-to-speech, or by a natural
            voice (Piper) that you can download and that runs entirely on your device.
          </p>
        </section>

        <section className="doc" id="cloud">
          <h2>4. The optional cloud engine</h2>
          <p>
            For faster answers, Echo offers an <strong>optional</strong> cloud engine powered by
            Google Gemini. It is off by default and is used only if you turn it on in Settings and
            enter <strong>your own Gemini API key</strong>. Your key is kept on your device and is used
            only to call Google directly; it is never sent to us.
          </p>
          <p>When, and only when, the cloud engine is on:</p>
          <ul>
            <li>
              The text needed for a task is sent directly from your device to Google&apos;s Gemini API
              over an encrypted connection. Depending on the task, this includes the notifications and
              calendar events being summarized, your question and today&apos;s earlier questions, the
              messages in a busy group, the message you&apos;re replying to with your recent messages
              in that chat, your name if you&apos;ve given one, and your chosen tone.
            </li>
            <li>Google processes that text to return a response, which Echo shows or reads to you.</li>
            <li>
              Google&apos;s handling of that data is governed by its own terms and privacy policy for
              the Gemini API, which you accept when you create your key. Please review them before
              turning the cloud engine on.
            </li>
          </ul>
          <p>
            You can switch back to the on-device engine at any time. When the cloud engine is off,
            none of your content is sent to Google.
          </p>
        </section>

        <section className="doc" id="desktop">
          <h2>5. Echo on your desktop</h2>
          <p>
            If you install the Echo desktop app and pair it with your phone, the two talk to each
            other <strong>directly over your local network</strong> (your Wi-Fi). Nothing passes
            through any server of ours or over the internet. Pairing uses a one-time code that the
            desktop shows as a QR code.
          </p>
          <ul>
            <li>
              While Echo is open, your phone sends your desktop a copy of your day: captured
              notifications and calendar events, your briefing, to-dos, reminders, streak and weekly
              counts, app icons, and your recent messages in your chats (used to suggest replies).
            </li>
            <li>
              If you prefer your desktop as Echo&apos;s engine, your phone can send it the text
              needed to write your briefing or answer a question, and your desktop&apos;s on-device
              model does the work.
            </li>
            <li>
              What you do on the desktop comes back to the phone: replies you send, to-dos you tick,
              move, add or delete, and reminders you set. A reply sent from the desktop goes out
              through your phone, from your own account (see Replies below).
            </li>
            <li>
              The desktop keeps its copy in the app&apos;s own storage on your computer, and each sync
              replaces it with your phone&apos;s current copy.
            </li>
          </ul>
          <p>
            The desktop app only listens for your phone when you turn on its engine in Settings.
          </p>
        </section>

        <section className="doc" id="replies">
          <h2>6. Replies and reminders</h2>
          <p>
            Echo can draft a reply or suggest a quick one, but{' '}
            <strong>nothing is sent until you tap Send</strong>. When you do, Echo sends it through
            that chat&apos;s own notification reply, or opens the chat with your reply ready for you
            to send, so it always goes from your own account in that app. Echo does not use
            accessibility services and never types into other apps.
          </p>
          <p>
            Reminders are set on your phone and shown as ordinary notifications at the time you
            choose. They stay on your device, apart from the copy shared with a desktop you&apos;ve
            paired.
          </p>
        </section>

        <section className="doc" id="permissions">
          <h2>7. Permissions we request</h2>
          <p>
            Echo asks only for the permissions its features require. You can decline any of them; the
            related feature will simply be unavailable. You can also change them at any time in your
            device&apos;s settings.
          </p>
          {[
            ['Notification access', 'Notification listener', "Lets Echo read incoming notifications for your briefing, your list and Ask Echo. This is the app's central function."],
            ['Calendar', 'Read calendar events', "Lets Echo tell you what's on your schedule. Echo never changes your calendar. Optional."],
            ['Contacts', 'Find a WhatsApp chat', 'Asked only when replying to a WhatsApp chat Echo can’t otherwise find, and used only for that. Optional.'],
            ['Microphone', 'Voice questions', 'Used only while you dictate a question to Ask Echo.'],
            ['Camera', 'Pair your desktop', 'Used only to scan the pairing QR code shown by the Echo desktop app.'],
            ['Notifications / Alarms', 'Briefings and reminders on time', 'Lets Echo post your briefing and reminders at the times you choose, and keep them after a restart.'],
            ['Internet & local network', 'Network access', 'Used to talk to your paired desktop over your Wi-Fi, to download AI models and voices you choose, to fetch app settings, to send anonymous usage counts, and for the cloud engine if you turn it on.'],
          ].map(([k, h, p]) => (
            <div className="perm" key={h}>
              <div className="k">{k}</div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </section>

        <section className="doc" id="storage">
          <h2>8. What Echo keeps on your devices</h2>
          <p>
            Everything Echo keeps is stored in its private app storage on your phone (and, if you
            pair one, your computer):
          </p>
          <ul>
            <li>
              The <strong>Vault</strong>: the notifications and calendar events Echo has captured.
            </li>
            <li>
              Your to-dos, reminders, briefing, streak, weekly counts, summaries of busy groups, and
              today&apos;s Ask Echo conversation (cleared each day).
            </li>
            <li>
              Short snippets of your own recent messages in each chat (including replies you send
              through Echo), so its suggested replies fit the conversation.
            </li>
            <li>
              Your settings, such as your name if you give one, briefing time, voice, the apps Echo
              hears, your Gemini key if you add one, and your desktop pairing.
            </li>
            <li>Any AI model or voice you&apos;ve downloaded.</li>
          </ul>
        </section>

        <section className="doc" id="network">
          <h2>9. Other network connections</h2>
          <p>Apart from the cloud engine and your paired desktop, Echo connects to:</p>
          <ul>
            <li>
              <strong>Hugging Face</strong> (huggingface.co) and <strong>GitHub</strong> (github.com),
              to download the on-device AI model and any natural voice you choose. These are plain
              file downloads; none of your content is sent.
            </li>
            <li>
              <strong>This website</strong>, to fetch a small settings file when the app starts (for
              example, which Gemini model to use). The request carries no identifiers or content.
            </li>
            <li>
              <strong>Aptabase</strong>, for anonymous usage counts (see Advertising and analytics).
            </li>
          </ul>
          <p>
            The QR scanner uses Google&apos;s ML Kit, which runs on your phone and may send Google
            anonymous diagnostic information about how the scanner performs. No images are sent.
          </p>
        </section>

        <section className="doc" id="sharing">
          <h2>10. Sharing and third parties</h2>
          <p>
            We do not sell your personal information, and we do not share your notification, calendar
            or message content with anyone. We have no servers that receive it.
          </p>
          <p>
            Your content leaves your phone only in the ways you choose: to Google Gemini if you turn
            on the <a href="#cloud">cloud engine</a>, to <a href="#desktop">your own desktop</a> if you
            pair one, to your phone&apos;s speech recognition service when you dictate a question, and
            to the chat app you reply in when you tap Send.
          </p>
        </section>

        <section className="doc" id="ads">
          <h2>11. Advertising and analytics</h2>
          <p>
            Echo contains <strong>no advertising</strong>. We do not show ads and we do not integrate
            advertising networks or advertising trackers.
          </p>
          <p>
            To learn which features are useful, Echo sends <strong>anonymous usage counts</strong> to a
            privacy-focused provider, Aptabase. These record only <strong>that a feature was used</strong>,
            for example that a briefing was made or played, Ask Echo was used, a to-do list was made
            or the engine was switched, along with basic technical details (app version, operating
            system and version, language, and a random session ID that changes regularly). They are{' '}
            <strong>not linked to your identity</strong>, need no account, and{' '}
            <strong>never include your content</strong>.
          </p>
          <p>
            This is <strong>on by default and optional</strong>. Turn off{' '}
            <strong>Share anonymous usage data</strong> in Settings → Privacy at any time, and no
            usage events are sent after that.
          </p>
          <p>
            This website does not use cookies, analytics or advertising. Our hosting provider
            (Vercel) may keep standard server logs, such as IP addresses, to run and protect the site.
          </p>
        </section>

        <section className="doc" id="retention">
          <h2>12. Data retention and deletion</h2>
          <p>Because your content stays on your devices, you control its lifetime:</p>
          <ul>
            <li>
              <strong>Automatic clean-up:</strong> Echo deletes captured notifications once they are
              more than a day old, unless they concern something still ahead of you (such as a
              meeting or a deadline). Nothing is kept for more than 180 days.
            </li>
            <li id="deletion">
              <strong>Delete everything now:</strong> on Android, go to Settings → Apps → Echo →
              Storage and tap <strong>Clear storage</strong>. This deletes the Vault, your to-dos,
              reminders, settings and downloads.
            </li>
            <li>
              <strong>Uninstall:</strong> removing Echo deletes all of its data from your phone.
              Uninstalling the desktop app and removing its app data deletes the desktop&apos;s copy.
            </li>
          </ul>
          <p>
            If you use the cloud engine, the text sent for a request is processed by Google to return
            a response, and its retention is governed by Google&apos;s terms. Echo itself keeps no copy
            of your content on any server, because it has none.
          </p>
        </section>

        <section className="doc" id="children">
          <h2>13. Children&apos;s privacy</h2>
          <p>
            Echo is intended for a general audience and is not directed to children under the age of
            13 (or the minimum age required in your jurisdiction). We do not knowingly collect
            personal information from children. If you believe a child has used Echo in a way that
            raises a concern, please contact us and we will help address it.
          </p>
        </section>

        <section className="doc" id="security">
          <h2>14. Security</h2>
          <p>
            Keeping processing on your own devices is itself a strong safeguard: data that never
            leaves them can&apos;t be exposed by a server breach. Requests to the cloud engine, model
            and voice downloads, and usage counts all use encrypted connections. Your device&apos;s own
            security (screen lock and operating system protections) also protects Echo&apos;s storage.
          </p>
          <p>
            The connection between your phone and your paired desktop stays on your local network,
            and once they are paired each request must carry the pairing code, but it is not
            encrypted. Pair them on a network you
            trust, such as your home Wi-Fi. No method of storage or transmission is completely secure,
            but we design Echo to keep what is exposed to a minimum.
          </p>
        </section>

        <section className="doc" id="rights">
          <h2>15. Your rights and choices</h2>
          <p>You are in control of Echo at all times. You can:</p>
          <ul>
            <li>Grant or revoke any permission in your device settings.</li>
            <li>Choose which apps Echo hears.</li>
            <li>Keep the on-device engine so that no content goes to an AI provider.</li>
            <li>Pair a desktop, or not.</li>
            <li>Turn off anonymous usage counts.</li>
            <li>Delete everything by clearing Echo&apos;s storage or uninstalling it.</li>
          </ul>
          <p>
            Depending on where you live, you may have additional rights under laws such as the GDPR or
            CCPA (for example, to access or delete personal data). Because Echo keeps your content on
            your devices rather than on our servers, you can exercise these rights directly. For
            anything you can&apos;t do yourself, contact us using the details below.
          </p>
        </section>

        <section className="doc" id="changes">
          <h2>16. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time, for example when we add a feature or
            change how data is handled. When we do, we will revise the &ldquo;Last updated&rdquo; date
            at the top of this page, and for significant changes we will give a more prominent notice
            in the app. Your continued use of Echo after an update means you accept the revised
            policy.
          </p>
        </section>

        <section className="doc" id="contact">
          <h2>17. Contact us</h2>
          <p>
            If you have any questions about this policy or about how Echo handles your data, please
            reach out:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:chandan1204@gmail.com">chandan1204@gmail.com</a>
          </p>
          <p>We aim to respond to privacy inquiries promptly.</p>
        </section>
      </main>

      <footer className="site">
        <div className="footer-content">
          <Link href="/" className="footer-logo-container" aria-label="Echo home">
            <Image src="/logo.png" alt="Echo logo" className="footer-logo-img" width={36} height={36} />
            <span className="footer-logo-text">Echo</span>
          </Link>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/privacy/">Privacy Policy</Link>
            <a href="mailto:chandan1204@gmail.com">Contact</a>
          </div>
          <p className="footer-copy">© 2026 Echo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
