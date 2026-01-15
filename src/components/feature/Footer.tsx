import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {['Home', 'About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-400 hover:text-[#D8ECF8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                whileHover={{ scale: 1.05, textShadow: '0 0 8px rgba(216, 236, 248, 0.8)' }}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: 'ri-linkedin-fill', url: 'www.linkedin.com/in/ilias-er-rachdi-92a89a228' },
              { icon: 'ri-github-fill', url: 'https://github.com/ILIASER-RACHDI' },
              { icon: 'ri-mail-fill', url: 'mailto:iliaserrachdi@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow-blue transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${social.icon} text-[#D8ECF8] hover:text-white transition-colors duration-300`} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © 2026 Ilias. All rights reserved.
            </motion.p>
            
            <motion.p
              className="text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Designed by Ilias
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;