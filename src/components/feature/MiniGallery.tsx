import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MiniGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'AI Dashboard',
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20dashboard%20interface%2C%20clean%20data%20visualization%2C%20futuristic%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20software%20interface%2C%20machine%20learning%20analytics&width=400&height=300&seq=ai-dashboard&orientation=landscape'
    },
    {
      id: 2,
      title: 'Mobile App UI',
      image: 'https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20interface%20design%2C%20clean%20user%20interface%2C%20minimalist%20design%2C%20blue%20accent%20colors%2C%20professional%20app%20mockup%2C%20sleek%20mobile%20design&width=400&height=300&seq=mobile-ui&orientation=landscape'
    },
    {
      id: 3,
      title: 'Cloud Architecture',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20architecture%20diagram%2C%20microservices%20visualization%2C%20modern%20tech%20infrastructure%2C%20clean%20technical%20diagram%2C%20blue%20and%20gray%20color%20scheme%2C%20professional%20system%20design&width=400&height=300&seq=cloud-arch&orientation=landscape'
    },
    {
      id: 4,
      title: 'Data Analytics',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%2C%20modern%20charts%20and%20graphs%2C%20clean%20data%20visualization%2C%20professional%20interface%20design%2C%20blue%20color%20scheme%2C%20business%20intelligence&width=400&height=300&seq=data-analytics&orientation=landscape'
    },
    {
      id: 5,
      title: 'Web Platform',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20platform%20interface%2C%20clean%20website%20design%2C%20professional%20layout%2C%20blue%20and%20white%20color%20scheme%2C%20responsive%20design%2C%20business%20application&width=400&height=300&seq=web-platform&orientation=landscape'
    },
    {
      id: 6,
      title: 'API Documentation',
      image: 'https://readdy.ai/api/search-image?query=API%20documentation%20interface%2C%20clean%20technical%20documentation%2C%20modern%20developer%20tools%2C%20professional%20design%2C%20blue%20accent%20colors%2C%20code%20documentation&width=400&height=300&seq=api-docs&orientation=landscape'
    }
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-glow"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Project Gallery
            <div className="h-1 w-20 bg-gradient-to-r from-[#D8ECF8] to-[#87CEEB] mx-auto mt-4 glow-blue" />
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-lg glass hover:glow-blue transition-all duration-500 cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <button className="text-[#D8ECF8] hover:text-white transition-colors text-sm whitespace-nowrap">
                      See More <i className="ri-arrow-right-line ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#D8ECF8] transition-colors cursor-pointer"
              onClick={closeModal}
            >
              <i className="ri-close-line text-3xl" />
            </button>
            <div className="glass rounded-lg overflow-hidden">
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt={galleryItems.find(item => item.id === selectedImage)?.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-glow">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default MiniGallery;