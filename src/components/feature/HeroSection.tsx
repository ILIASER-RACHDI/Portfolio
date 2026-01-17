import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  const playHoverSound = () => {
    // Create a simple beep sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const AnimatedButton = ({ children, onClick, className, icon }: any) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    
    return (
      <motion.button
        className={className}
        onClick={onClick}
        onMouseEnter={() => {
          playHoverSound();
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoveredIndex(-1);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className={`${icon} mr-3 text-xl`}></i>
        <span className="relative inline-block">
          {children.split('').map((letter: string, index: number) => (
            <motion.span
              key={index}
              className="inline-block"
              onMouseEnter={() => {
                setHoveredIndex(index);
                playHoverSound();
              }}
              animate={{
                rotateY: hoveredIndex === index ? 360 : 0,
                color: hoveredIndex === index ? '#E879F9' : '#FFFFFF',
              }}
              transition={{ duration: 0.3 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </span>
      </motion.button>
    );
  };

  const handleDownloadCV = () => {
    
    const cvUrl = 'https://iliaser-rachdi.github.io/Portfolio/cv-ilias.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Ilias.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        {/* Left Introduction - Larger */}
        <motion.div
          className="w-full md:w-3/5 z-20 md:pr-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-[#D8ECF8] text-base md:text-lg font-mono">&gt; Hello World!</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            I'm <span className="text-[#D8ECF8] drop-shadow-[0_0_20px_#D8ECF8]">ILIAS</span>
          </motion.h1>
          
          <motion.div
            className="text-base md:text-lg text-gray-300 mb-6 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <span className="text-[#D8ECF8]">const</span> developer = {'{'}
            <br />
            <span className="ml-6 text-white">passion:</span> <span className="text-[#E879F9]">"Coding & Gaming"</span>,
            <br />
            <span className="ml-6 text-white">role:</span> <span className="text-[#D8ECF8]">"Software Engineer"</span>,
            <br />
            <span className="ml-6 text-white">mission:</span> <span className="text-[#C084FC]">"Build Epic Software"</span>
            <br />
            {'}'}
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Software engineer specialized in Java - Spring Boot and Angular.
            I'm used to working in structured environments, collaborating with product and technical teams, and quickly adapting to new codebases.
            I value clean code, clear communication, and long-term maintainability.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <AnimatedButton
              className="bg-gradient-to-r from-[#D8ECF8] to-[#E879F9] text-black px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-[0_0_30px_#D8ECF8] transition-all duration-300 cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              icon="ri-gamepad-line"
            >
              Start Game
            </AnimatedButton>
            <AnimatedButton
              className="bg-white/10 backdrop-blur-sm border-2 border-[#D8ECF8] text-white px-6 py-3 rounded-full text-base font-bold hover:bg-[#D8ECF8]/20 hover:shadow-[0_0_30px_#D8ECF8] transition-all duration-300 cursor-pointer whitespace-nowrap"
              onClick={handleDownloadCV}
              icon="ri-download-2-line"
            >
              Download CV
            </AnimatedButton>
            <AnimatedButton
              className="border-2 border-[#E879F9] text-white px-6 py-3 rounded-full text-base font-bold hover:bg-[#E879F9]/20 hover:shadow-[0_0_30px_#E879F9] transition-all duration-300 cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              icon="ri-message-3-line"
            >
              Let's Connect
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Right Spline 3D Scene - Smaller on mobile */}
        <motion.div
          className="w-full md:w-2/5 h-[250px] md:h-[400px] lg:h-[500px] z-10 relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ marginRight: '0', marginLeft: '0' }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Spline scene="https://prod.spline.design/KjFeF7h5H8c45-ei/scene.splinecode" />
            {/* Overlay to hide "Built with Spline" */}
            <div className="absolute bottom-2 right-0 w-48 h-12 bg-black z-20"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#D8ECF8] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D8ECF8] rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
