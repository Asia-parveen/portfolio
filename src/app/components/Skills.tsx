'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    name: "JavaScript / TypeScript",
    images: ["/images/js.png", "/images/typescript (1).png"],
  },
  {
    name: "React / Next.js",
    images: ["/images/library.png", "/images/nextjs.png"],
  },
  {
    name: "Node.js / Express",
    images: ["/images/node-js.png", "/images/express.png"],
  },
  {
    name: "MongoDB / Firebase",
    images: ["/images/MongoDB.png", "/images/firebase.png"],
  },
 
  {
    name: "AI APIs Integration",
    images: ["/images/ai.png", "/images/openai.png"],
  },
  {
    name: "Python (AI Agent)",
    images: ["/images/python.png", "/images/agent.png"],
  },
  {
    name: "Sanity CMS",
    images: ["/images/cms.png", "/images/backendtool.png"],
  },
  {
    name: "Git & GitHub",
    images: ["/images/git.png", "/images/github.png"],
  },
  {
    name: "Tailwind CSS",
    images: ["/images/tailwind.png", "/images/utility-tool.png"],
  },
  {
    name: "Bootstrap",
    images: ["/images/bootstrep.png", "/images/resdesign.png"],
  },
  {
    name: "Figma Design",
    images: ["/images/figma.png", "/images/res.png"],
  },
  {
    name: "HTML / CSS",
    images: ["/images/html.png", "/images/css-3.png"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-bold mb-4"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-16"
        >
          Technologies I use to build modern, intelligent, and scalable applications.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              className="group bg-white/5 rounded-2xl border border-white/10 p-6 hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/40 backdrop-blur-md hover:bg-white/10"
            >
              <div className="flex justify-center gap-4 mb-5">
                {skill.images.map((img, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-cyan-400/10 border border-cyan-400 rounded-full p-2 flex items-center justify-center transition hover:scale-110"
                  >
                    <Image
                      src={img}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-center text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;






// 'use client';

// import { motion } from 'framer-motion';
// import {
//   Code,
//   Zap,
//   Brain,
//   Server,
//   Atom,
//   LayoutDashboard,
//   GitBranch,
//   Github,
//   Database,
//   Cpu,
//   Layers,
//   Paintbrush,
// } from 'lucide-react';

// const skills = [
//   { name: "JavaScript / TypeScript", icon: <Zap size={28} /> },
//   { name: "React / Next.js", icon: <LayoutDashboard size={28} /> },
//   { name: "Node.js / Express", icon: <Server size={28} /> },
//   { name: "MongoDB / Firebase", icon: <Brain size={28} /> },
//   { name: "AI APIs Integration", icon: <Atom size={28} /> },
//   { name: "Python (AI Agent)", icon: <Cpu size={28} /> },
//   { name: "Headless CMS (Sanity)", icon: <Database size={28} /> },
//   {
//     name: "Git & GitHub",
//     icon: (
//       <div className="flex gap-1">
//         <GitBranch size={24} />
//         <Github size={24} />
//       </div>
//     ),
//   },
//   { name: "Tailwind CSS", icon: <Layers size={28} /> },
//   { name: "Bootstrap", icon: <Code size={28} /> },
//   { name: "Figma Design", icon: <Paintbrush size={28} /> },
//   { name: "HTML / CSS", icon: <Code size={28} /> },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-center text-4xl font-bold mb-4"
//         >
//           My <span className="text-cyan-400">Skills</span>
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-center text-slate-400 max-w-2xl mx-auto mb-12"
//         >
//           Here are some of the core technologies and tools I use to build intelligent, scalable, and responsive web experiences.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={skill.name}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md backdrop-blur-md hover:shadow-cyan-500/30 transition-all hover:scale-105 cursor-pointer"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={i}
//               variants={cardVariants}
//             >
//               <div className="flex items-center gap-4 text-cyan-400 mb-3">
//                 {skill.icon}
//                 <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
//               </div>
//               <p className="text-sm text-slate-400">
//                 Building powerful, clean, and scalable apps using {skill.name}.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




