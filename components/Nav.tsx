import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <header className="topbar">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Echo home">
          <Image src="/logo.png" alt="" width={30} height={30} priority />
          <span>Echo</span>
        </Link>
        <nav className="top-links" aria-label="Main">
          <a href="#features">Features</a>
          <a href="#desktop">Desktop</a>
          <a href="#privacy">Privacy</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
