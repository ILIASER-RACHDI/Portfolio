
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Business Analyst',
    relationship: 'Project Stakeholder',
    rating: 5,
    review: 'Ilias was reliable, structured, and easy to work with. He quickly understood business constraints and translated them into effective technical solutions.'
  },
  {
    id: 2,
    name: 'Ahmed Lamouri',
    title: 'Lead Software Engineer',
    relationship: 'Technical Lead',
    rating: 5,
    review: 'Ilias integrated smoothly into the team and delivered clean, maintainable code. He adapts quickly to existing codebases and communicates clearly.'
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'Product Manager',
    relationship: 'Product Owner',
    rating: 4,
    review: 'Ilias communicates clearly and takes feedback seriously. His technical input helped the team deliver features aligned with product expectations.'
  }
];


  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8 seconds
  };

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-chat-quote-line text-2xl text-[#D8ECF8]" />
              </div>
              <h2 className="text-4xl font-bold text-glow font-mono">
                &lt; Player Reviews /&gt;
              </h2>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-star-line text-2xl text-[#E879F9]" />
              </div>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-[#D8ECF8] to-[#E879F9] mx-auto glow-blue" />
            <p className="text-gray-400 mt-4 font-mono">
              &gt; What fellow developers say about the experience_
            </p>
          </motion.div>

          <div className="relative">
            {/* Gaming HUD Frame */}
            <div className="absolute inset-0 border-2 border-[#D8ECF8]/20 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-4 w-16 h-1 bg-[#D8ECF8]" />
              <div className="absolute top-0 right-4 w-16 h-1 bg-[#E879F9]" />
              <div className="absolute bottom-0 left-4 w-16 h-1 bg-[#D8ECF8]" />
              <div className="absolute bottom-0 right-4 w-16 h-1 bg-[#E879F9]" />
            </div>

            {/* Testimonial Display */}
            <div className="relative p-8">
              <motion.div
                key={activeIndex}
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Player Card */}
                <div className="bg-black/50 border border-[#D8ECF8]/30 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden">
                  {/* Gaming UI Elements */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400 font-mono">ONLINE</span>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-xs text-[#E879F9] font-mono">{testimonials[activeIndex].level}</span>
                    <div className="w-2 h-2 bg-[#E879F9] rounded-full animate-pulse" />
                  </div>

                  {/* Player Avatar */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D8ECF8] relative"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    
                    <div className="absolute inset-0 border-2 border-[#D8ECF8] rounded-full animate-pulse" />
                  </motion.div>

                  {/* Player Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-glow font-mono">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-[#D8ECF8] mb-2 font-mono">
                      {testimonials[activeIndex].title}
                    </p>
                    <div className="inline-block px-3 py-1 bg-[#E879F9]/20 border border-[#E879F9] rounded-full text-xs text-[#E879F9] font-mono">
                      {testimonials[activeIndex].achievement}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.i
                        key={i}
                        className="ri-star-fill text-yellow-400 text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <i className="ri-double-quotes-l text-3xl text-[#D8ECF8]/30 absolute -top-2 -left-2" />
                    <p className="text-gray-300 text-lg leading-relaxed italic px-8">
                      {testimonials[activeIndex].review}
                    </p>
                    <i className="ri-double-quotes-r text-3xl text-[#D8ECF8]/30 absolute -bottom-2 -right-2" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Gaming Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6">
              {/* Previous Button */}
              <motion.button
                className="w-12 h-12 bg-black/50 border border-[#D8ECF8]/30 rounded-full flex items-center justify-center hover:border-[#D8ECF8] hover:bg-[#D8ECF8]/10 transition-all duration-300 cursor-pointer"
                onClick={() => handleManualNavigation(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-arrow-left-line text-[#D8ECF8]" />
              </motion.button>

              {/* Player Indicators */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      index === activeIndex 
                        ? 'bg-[#D8ECF8] border-[#D8ECF8] shadow-[0_0_10px_#D8ECF8]' 
                        : 'bg-transparent border-gray-600 hover:border-[#D8ECF8]'
                    }`}
                    onClick={() => handleManualNavigation(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                className="w-12 h-12 bg-black/50 border border-[#D8ECF8]/30 rounded-full flex items-center justify-center hover:border-[#D8ECF8] hover:bg-[#D8ECF8]/10 transition-all duration-300 cursor-pointer"
                onClick={() => handleManualNavigation(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-arrow-right-line text-[#D8ECF8]" />
              </motion.button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
                <span>{isAutoPlaying ? 'AUTO-PLAY ACTIVE' : 'MANUAL MODE'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
