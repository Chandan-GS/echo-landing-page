import Link from 'next/link';
import { BrandOrb } from './Mascot';

export default function Header() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/#top" aria-label="Echo home">
          <BrandOrb />
          Echo
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <a className="lnk" href="/#briefing">
            Briefing
          </a>
          <a className="lnk" href="/#ask">
            Ask Echo
          </a>
          <a className="lnk" href="/#privacy">
            Privacy
          </a>
          <a className="nav-cta" href="/#get">
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
