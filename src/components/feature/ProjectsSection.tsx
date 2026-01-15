
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'GarageBot',
      description: 'AI voice assistant for garage websites with natural language processing and smart automation',
      tech: ['React', 'Node.js', 'OpenAI', 'WebRTC'],
      image: 'https://readdy.ai/api/search-image?query=AI%20voice%20assistant%20interface%2C%20modern%20garage%20management%20system%2C%20futuristic%20dashboard%20with%20voice%20controls%2C%20clean%20tech%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20software%20design&width=600&height=400&seq=garagebot&orientation=landscape',
      video: 'https://example.com/garagebot-demo.mp4',
      status: 'COMPLETED',
      difficulty: 'EXPERT'
    },
    {
      id: 2,
      title: 'AppCompagnie',
      description: 'Comprehensive airline management system built with microservices architecture',
      tech: ['Spring Boot', 'Microservices', 'Docker', 'PostgreSQL'],
      image: 'https://readdy.ai/api/search-image?query=Airline%20management%20system%20interface%2C%20flight%20booking%20dashboard%2C%20modern%20aviation%20software%2C%20clean%20professional%20design%2C%20blue%20sky%20background%2C%20microservices%20architecture%20visualization&width=600&height=400&seq=appcompagnie&orientation=landscape',
      video: 'https://example.com/appcompagnie-demo.mp4',
      status: 'COMPLETED',
      difficulty: 'ADVANCED'
    },
    {
      id: 3,
      title: 'MetroShortPath',
      description: 'Metro path optimizer using Dijkstra\'s algorithm for efficient route planning',
      tech: ['Java', 'Algorithms', 'Graph Theory', 'JavaFX'],
      image: 'https://readdy.ai/api/search-image?query=Metro%20route%20optimization%20interface%2C%20subway%20map%20with%20highlighted%20paths%2C%20algorithm%20visualization%2C%20modern%20transit%20system%20design%2C%20clean%20technical%20interface%2C%20blue%20and%20gray%20color%20scheme&width=600&height=400&seq=metroshortpath&orientation=landscape',
      video: 'https://example.com/metroshortpath-demo.mp4',
      status: 'COMPLETED',
      difficulty: 'INTERMEDIATE'
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EXPERT': return 'text-red-400 border-red-400';
      case 'ADVANCED': return 'text-[#E879F9] border-[#E879F9]';
      case 'INTERMEDIATE': return 'text-[#D8ECF8] border-[#D8ECF8]';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      case 'IN_PROGRESS': return 'text-yellow-400 bg-yellow-400/20';
      case 'PLANNED': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
                <i className="ri-code-box-line text-2xl text-[#D8ECF8]" />
              </div>
              <h2 className="text-4xl font-bold text-glow font-mono">
                &lt; Featured Projects /&gt;
              </h2>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-gamepad-line text-2xl text-[#E879F9]" />
              </div>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-[#D8ECF8] to-[#E879F9] mx-auto glow-blue" />
            <p className="text-gray-400 mt-4 font-mono">
              &gt; Select a project to view details_
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-black/50 border border-gray-800 hover:border-[#D8ECF8] transition-all duration-500 cursor-pointer"
                initial={{ 
                  opacity: 0,
                  y: 50
                }}
                animate={inView ? { 
                  opacity: 1,
                  y: 0
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Gaming UI Header */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4">
                  <div className="flex justify-between items-center">
                    <div className={`px-2 py-1 rounded text-xs font-mono border ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-mono ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with scan lines effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Scan lines */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                       style={{
                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #D8ECF8 2px, #D8ECF8 4px)',
                       }} />
                  
                  {/* Gaming HUD overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D8ECF8] transition-all duration-500">
                    <div className="absolute top-2 left-2 w-3 h-3 bg-[#D8ECF8] rounded-full animate-pulse" />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-[#E879F9] rounded-full animate-pulse" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <i className="ri-folder-code-line text-[#D8ECF8]" />
                    <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-[#D8ECF8]/10 text-[#D8ECF8] rounded border border-[#D8ECF8]/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button 
                    className="w-full bg-gradient-to-r from-[#D8ECF8] to-[#E879F9] text-black px-4 py-2 rounded font-bold text-sm font-mono hover:shadow-[0_0_20px_#D8ECF8] transition-all duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-play-line mr-2" />
                    LAUNCH PROJECT
                  </motion.button>
                </div>

                {/* Hover glow effect */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/10 to-[#E879F9]/10 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Video Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#D8ECF8] transition-colors cursor-pointer z-10"
              onClick={closeModal}
            >
              <i className="ri-close-line text-3xl" />
            </button>
            
            <div className="bg-black/80 border border-[#D8ECF8]/30 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-6">
                <i className="ri-gamepad-line text-2xl text-[#E879F9]" />
                <h3 className="text-2xl font-bold text-glow font-mono">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <i className="ri-code-line text-2xl text-[#D8ECF8]" />
              </div>
              
              <p className="text-gray-300 mb-6 font-mono">
                &gt; Demo loading... Advanced {projects.find(p => p.id === selectedProject)?.tech.join(' + ')} implementation showcase
              </p>
              
              <div className="w-full h-64 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border border-[#D8ECF8]/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #D8ECF8 10px, #D8ECF8 12px)',
                     }} />
                <div className="text-center z-10">
                  <motion.i 
                    className="ri-play-circle-line text-6xl text-[#D8ECF8] mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-[#D8ECF8] font-mono">DEMO COMING SOON</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
