import Nav from '@/components/Nav';
import Hero from '@/components/home/Hero';
import Film from '@/components/home/Film';
import Briefing from '@/components/home/Briefing';
import NeedsYou from '@/components/home/NeedsYou';
import YourDay from '@/components/home/YourDay';
import YourWeek from '@/components/home/YourWeek';
import Ask from '@/components/home/Ask';
import VaultRules from '@/components/home/VaultRules';
import Desktop from '@/components/home/Desktop';
import PrivacySettings from '@/components/home/PrivacySettings';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Dock from '@/components/home/Dock';
import DownloadModal from '@/components/DownloadModal';
import EchoGuide from '@/components/EchoGuide';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <EchoGuide />
      <Nav />
      <main>
        <Hero />
        <Film />
        <Briefing />
        <NeedsYou />
        <YourDay />
        <Ask />
        <VaultRules />
        <YourWeek />
        <Desktop />
        <PrivacySettings />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Dock />
      <DownloadModal />
    </div>
  );
}
