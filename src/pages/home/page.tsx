
import Header from '../../components/feature/Header';
import HeroSection from '../../components/feature/HeroSection';
import AboutSection from '../../components/feature/AboutSection';
import TechMarquee from '../../components/feature/TechMarquee';
import ProjectsSection from '../../components/feature/ProjectsSection';
import TestimonialsSection from '../../components/feature/TestimonialsSection';
import ContactSection from '../../components/feature/ContactSection';
import Footer from '../../components/feature/Footer';
import FloatingParticles from '../../components/base/FloatingParticles';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <FloatingParticles />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechMarquee />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
