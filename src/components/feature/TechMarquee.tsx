import { motion } from 'framer-motion';
import { SiDocker, SiKubernetes, SiPython,SiApachespark ,SiJenkins,SiPostgresql,SiSpringboot  ,SiCplusplus } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const TechMarquee = () => {
  const technologies = [
    { name: 'Python', icon: SiPython, type: 'simple' },
    { name: 'Java', icon: FaJava, type: 'simple' },
    { name: 'C++', icon: SiCplusplus , type: 'simple' },
    { name: 'React', icon: 'ri-reactjs-fill', type: 'remix' },
    { name: 'Spring Boot', icon: SiSpringboot , type: 'simple' },
    { name: 'Docker', icon: SiDocker, type: 'simple' },
    { name: 'Kubernetes', icon: SiKubernetes, type: 'simple' },
    { name: 'Jenkins', icon: SiJenkins, type: 'simple' },
    { name: 'Spark', icon: SiApachespark, type: 'simple' },
    { name: 'Azure', icon: 'ri-cloud-fill', type: 'remix' },
    { name: 'PostgreSQL', icon: SiPostgresql, type: 'simple' },
    { name: 'MySQL', icon: 'ri-database-2-fill', type: 'remix' },
  ];

  // Duplicate the array for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <div className="flex space-x-12 marquee">
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center min-w-[120px] group cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 flex items-center justify-center glass rounded-full group-hover:glow-blue transition-all duration-300">
                {tech.type === 'remix' ? (
                  <i className={`${tech.icon} text-3xl text-[#D8ECF8] group-hover:text-white transition-colors duration-300`} />
                ) : (
                  <tech.icon className="text-3xl text-[#D8ECF8] group-hover:text-white transition-colors duration-300" />
                )}
              </div>
              <span className="text-sm mt-3 text-gray-400 group-hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#05060f] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#05060f] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TechMarquee;