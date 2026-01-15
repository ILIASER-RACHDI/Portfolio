
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect current section for background color
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const getBackgroundColor = () => {
    switch (currentSection) {
      case 'hero':
        return 'bg-black/80';
      case 'about':
        return 'bg-pink-900/80';
      case 'projects':
        return 'bg-[#D8ECF8]/20';
      case 'contact':
        return 'bg-gray-800/80';
      default:
        return 'bg-black/80';
    }
  };

  const menuItems = [
    { name: 'Home', id: 'hero', icon: 'ri-home-line' },
    { name: 'About', id: 'about', icon: 'ri-user-line' },
    { name: 'Projects', id: 'projects', icon: 'ri-code-box-line' },
    { name: 'Contact', id: 'contact', icon: 'ri-message-line' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? `${getBackgroundColor()} backdrop-blur-md border-b border-[#D8ECF8]/20` : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - masqué sur la section hero */}
          <motion.div
            className={`text-2xl font-bold text-glow cursor-pointer font-mono transition-opacity duration-300 ${
              currentSection === 'hero' ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-[#D8ECF8]">&lt;</span>
            Ilias
            <span className="text-[#D8ECF8]">/&gt;</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  currentSection === item.id 
                    ? 'bg-[#D8ECF8]/20 text-[#D8ECF8] border border-[#D8ECF8]/50' 
                    : 'text-white hover:text-[#D8ECF8] border border-transparent hover:border-[#D8ECF8]/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className="text-sm font-medium">{item.name}</span>
                {currentSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#D8ECF8]/10 rounded-full"
                    layoutId="activeSection"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-[#D8ECF8] w-8 h-8 flex items-center justify-center cursor-pointer border border-[#D8ECF8]/30 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-lg`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 bg-black/95 backdrop-blur-md rounded-lg border border-[#D8ECF8]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2 px-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.name}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-3 ${
                      currentSection === item.id 
                        ? 'bg-[#D8ECF8]/20 text-[#D8ECF8] border border-[#D8ECF8]/50' 
                        : 'text-white hover:text-[#D8ECF8] border border-transparent hover:border-[#D8ECF8]/30'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <i className={`${item.icon} text-lg`}></i>
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
