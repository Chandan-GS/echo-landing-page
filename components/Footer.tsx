import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site">
      <div className="footer-content">
        <Link href="/" className="footer-logo-container" aria-label="Echo home">
          <Image src="/logo.png" alt="Echo logo" className="footer-logo-img" width={36} height={36} />
          <span className="footer-logo-text">Echo</span>
        </Link>
        <div className="footer-links">
          <a href="/#how">How it works</a>
          <a href="/#voices">Voices</a>
          <Link href="/privacy/">Privacy Policy</Link>
          <a href="mailto:chandan1204@gmail.com">Contact</a>
        </div>
        <p className="footer-copy">
          © 2026 Echo. Google Play is a trademark of Google LLC.
        </p>
      </div>
    </footer>
  );
}
