import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    'Initializing Game Engine...',
    'Loading Player Profile...',
    'Compiling Code Assets...',
    'Connecting to Server...',
    'Rendering 3D Models...',
    'Optimizing Performance...',
    'Loading Complete!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        
        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
        setCurrentText(loadingTexts[textIndex] || loadingTexts[0]);
        
        if (newProgress >= 100) {
          setCurrentText('Loading Complete!');
          setTimeout(() => {
            setIsComplete(true);
            if (onLoadingComplete) {
              setTimeout(onLoadingComplete, 500);
            }
          }, 300);
          clearInterval(interval);
          return 100;
        }
        
        return newProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#05060f] via-[#0a0b1a] to-[#05060f] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#D8ECF8] rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="text-center z-10">
            {/* Gaming-style logo with falling and stabilizing animation */}
            <motion.div
              className="mb-8"
              initial={{ y: -300, rotate: 45, scale: 0.5 }}
              animate={{ 
                y: 0, 
                rotate: 0, 
                scale: 1,
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 mx-auto border-4 border-[#D8ECF8] rounded-lg flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(216, 236, 248, 0.3)',
                      '0 0 40px rgba(216, 236, 248, 0.6)',
                      '0 0 20px rgba(216, 236, 248, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="ri-code-s-slash-line text-4xl text-[#D8ECF8]"></i>
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <i className="ri-gamepad-fill text-xs text-black"></i>
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl font-bold text-white mb-2 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[#D8ECF8]">ILIAS</span>.DEV
            </motion.h1>

            <motion.p
              className="text-gray-400 mb-12 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Coding & Gaming Portfolio
            </motion.p>

            {/* Progress bar */}
            <div className="w-80 mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#D8ECF8] font-mono text-sm">Loading...</span>
                <span className="text-white font-mono text-sm">{Math.round(progress)}%</span>
              </div>
              
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D8ECF8] to-blue-400 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Loading text */}
            <motion.p
              className="text-gray-300 font-mono text-sm"
              key={currentText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentText}
            </motion.p>

            {/* Animated dots */}
            <motion.div
              className="flex justify-center space-x-1 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#D8ECF8] rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
