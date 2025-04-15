import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Gallery({ isVisible }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Images array with placeholder images
  const images = [
    { id: 1, title: "River Rafting Adventure" },
    { id: 2, title: "Yoga by the Ganges" },
    { id: 3, title: "Himalayan Trek" },
    { id: 4, title: "Sunset at Laxman Jhula" },
    { id: 5, title: "Camping Night" },
    { id: 6, title: "Temple Visit" },
    { id: 7, title: "Group Meditation" },
    { id: 8, title: "Bonfire Evening" },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Card animation variants
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-white to-teal-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isVisible["gallery"] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Memories from Rishikesh
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Glimpses of unforgettable GLA student adventures
          </p>

          {/* Featured carousel */}
          <div className="mb-16 overflow-hidden rounded-xl shadow-lg">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {images.map((img, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="aspect-video relative">
                    <img
                      src={`https://www.google.com/imgres?q=River%20Rafting%20Adventure%20rishikesh&imgurl=https%3A%2F%2Fmedia1.thrillophilia.com%2Ffilestore%2Fl1stgsdtm1wlcgkfhkg49pers7qj_WDEFRGTYH.png&imgrefurl=https%3A%2F%2Fwww.thrillophilia.com%2Ftours%2Frafting-day-trips-in-rishikesh&docid=VohsCzTjG1wUPM&tbnid=_01RHIQf-S3SYM&vet=12ahUKEwikpYq3xtqMAxUvcGwGHcl9El0QM3oECGQQAA..i&w=3699&h=2374&hcb=2&ved=2ahUKEwikpYq3xtqMAxUvcGwGHcl9El0QM3oECGQQAA`}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-4 pb-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-teal-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <motion.div
                key={img.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="aspect-square relative">
                  <img
                    src={`/api/placeholder/400/400`}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
