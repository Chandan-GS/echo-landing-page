import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Engines from '@/components/Engines';
import Voices from '@/components/Voices';
import PrivacyBand from '@/components/PrivacyBand';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Engines />
        <Voices />
        <PrivacyBand />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <DownloadModal />
    </>
  );
}
