import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiDocker, SiKubernetes,SiApachespark ,SiJenkins,SiPostgresql,SiSpringboot } from 'react-icons/si';
import { FaJava } from "react-icons/fa";


const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { name: 'HTML5', icon: 'ri-html5-fill', type: 'remix' },
    { name: 'JavaScript', icon: 'ri-javascript-fill', type: 'remix' },
    { name: 'React', icon: 'ri-reactjs-fill', type: 'remix' },
    { name: 'Angular', icon: 'ri-angularjs-line', type: 'remix' },
    { name: 'Java', icon: FaJava, type: 'simple' },
    { name: 'Spring Boot', icon: SiSpringboot, type: 'simple' },
    { name: 'Docker', icon: SiDocker, type: 'simple' },
    { name: 'Kubernetes', icon: SiKubernetes, type: 'simple' },
    { name: 'Jenkins', icon: SiJenkins, type: 'simple' },
    { name: 'Azure', icon: 'ri-cloud-fill', type: 'remix' },
    { name: 'Spark', icon: SiApachespark, type: 'simple' },
    { name: 'PostgreSQL', icon: SiPostgresql, type: 'simple' },
  ];

  const timeline = [
    {
      year: '2019-2022',
      title: 'Preparatory Classes',
      institution: 'CPGE Ibn Ghazi — Rabat',
      description: 'Intensive scientific training with a strong focus on mathematics, algorithms, and computer science.',
      icon: 'ri-book-open-line',
      color: 'from-[#D8ECF8] to-[#87CEEB]'
    },
    {
      year: '2022-2026',
      title: 'Engineering Degree in Computer Science',
      institution: 'Sup Galilée — Sorbonne Paris Nord University',
      description: 'Engineering program focused on software engineering, distributed systems. Strong emphasis on Java / Spring Boot, system design, and real-world software projects.',
      icon: 'ri-graduation-cap-line',
      color: 'from-[#87CEEB] to-[#E879F9]'
    },
    {
      year: '2024-Present',
      title: 'Software Engineer',
      institution: 'Société Générale',
      description: 'Software Engineer working on banking and risk-related applications in a production environment. Developing Java / Spring Boot and Angular solutions while collaborating with technical and business teams.',
      icon: 'ri-briefcase-line',
      color: 'from-[#E879F9] to-[#C084FC]'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Bio and Skills */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl font-bold mb-8 text-white"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About Me
              <div className="h-1 w-24 bg-gradient-to-r from-[#D8ECF8] to-[#E879F9] mt-3 shadow-[0_0_20px_#D8ECF8]" />
            </motion.h2>

            <motion.p
                className="text-xl text-gray-300 mb-10 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm a passionate engineering student specializing in software development and financial technology. 
              Currently in my final year while working at Société Générale, I combine academic excellence with 
              real-world experience in banking applications and innovative fintech solutions.
            </motion.p>

            {/* Skills Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-[#D8ECF8] hover:shadow-[0_0_20px_#D8ECF8] transition-all duration-300 cursor-pointer group"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill.type === 'remix' ? (
                    <i className={`${skill.icon} text-3xl text-[#D8ECF8] group-hover:text-[#E879F9] transition-colors duration-300`} />
                  ) : (
                    <skill.icon className="text-3xl text-[#D8ECF8] group-hover:text-[#E879F9] transition-colors duration-300" />
                  )}
                  <span className="text-xs mt-2 text-center text-gray-400 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Career Timeline */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-10 text-[#D8ECF8]"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              My Journey
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D8ECF8] via-[#E879F9] to-[#C084FC]" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-10 last:mb-0"
                  initial={{ x: 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-6 shadow-lg`}>
                    <i className={`${item.icon} text-black text-lg`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg hover:border-[#D8ECF8] hover:shadow-[0_0_20px_#D8ECF8] transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <span className="text-sm text-[#D8ECF8] font-mono bg-[#D8ECF8]/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[#E879F9] font-semibold mb-2">{item.institution}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
