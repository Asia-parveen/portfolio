'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const services = [
  "Full Stack Development",
  "Frontend Development",
  "Backend with Node.js & Express",
  "React / Next.js Apps",
  "Figma to Code Conversion",
  "MongoDB / Firebase Integration",
  "CMS Integration (Sanity)",
  "AI APIs Integration",
  "Python AI Agents",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-bold mb-4"
        >
          My <span className="text-cyan-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-16"
        >
          Things I can build or integrate for your next-gen digital product using modern tools and intelligence.
        </motion.p>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 shadow-lg hover:shadow-cyan-400/30 hover:bg-white/10 transition"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium text-sm group-hover:text-cyan-400">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


