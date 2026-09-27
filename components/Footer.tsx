import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="wrap">
        <span>© 2026 Echo. Google Play and the Google Play logo are trademarks of Google LLC.</span>
        <nav aria-label="Footer">
          <Link href="/privacy/">Privacy Policy</Link>
          <a href="mailto:chandan1204@gmail.com">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
