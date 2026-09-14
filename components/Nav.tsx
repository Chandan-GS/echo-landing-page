import Link from 'next/link';
import Image from 'next/image';
import PlayBadge from './PlayBadge';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href="/" className="nav-logo-container" aria-label="Echo home">
          <Image src="/logo.png" alt="Echo logo" className="nav-logo-img" width={32} height={32} priority />
          <span className="nav-logo">Echo</span>
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            <a href="/#how">How it works</a>
            <a href="/#voices">Voices</a>
            <a href="/#privacy">Privacy</a>
            <a href="/#faq">FAQ</a>
          </div>
          <PlayBadge height={40} />
        </div>
      </div>
    </nav>
  );
}
