"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLanguage,
  FaCode,
  FaServer,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const sections = [
    {
      icon: <FaLanguage size={30} className="text-[#A5F3FC]" />,
      title: "English Language - PACC",
      description:
        "Completed English language course from PACC, improving communication and professional fluency.",
    },
    {
      icon: <FaCode size={30} className="text-[#A5F3FC]" />,
      title: "Web Development",
      description:
        "Building modern responsive websites using HTML, CSS, JavaScript, React, and Next.js.",
    },
    {
      icon: <FaCode size={30} className="text-[#A5F3FC]" />,
      title: "Front-End Technologies",
      description:
        "Proficient with React, Tailwind CSS, Bootstrap, and TypeScript to build intuitive UIs.",
    },
    {
      icon: <FaServer size={30} className="text-[#A5F3FC]" />,
      title: "Back-End Skills",
      description:
        "Learning backend technologies, REST APIs, Node.js, and database integration to support full-stack development.",
    },
    {
      icon: <FaLightbulb size={30} className="text-[#A5F3FC]" />,
      title: "Soft Skills",
      description:
        "Excellent problem-solving, time management, and collaboration gained through real-world projects.",
    },
  ];

  return (
    <section
      className="min-h-screen px-6 py-20 pt-30 md:pt-35 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center text-center mb-16"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaUserGraduate
          size={50}
          className="text-[#34d399] mb-4 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold tracking-wide text-[#A5F3FC]">
          About Me
        </h1>
        <p className="text-gray-300 mt-2 max-w-xl">
          Learn more about my background and education journey.
        </p>
      </motion.div>

      {/* Who Am I Section with Hover */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl shadow-lg p-8 mb-10 border border-transparent hover:border-[#A5F3FC] hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#34d399] mb-4">Who Am I?</h2>
        <p className="text-gray-300 text-justify leading-relaxed">
          I&apos;m Asia Parveen a passionate Full Stack Developer with a keen
          interest in building responsive and user-friendly web applications.
          With a strong foundation in frontend technologies like React.js and
          Next.js I&apos;m also expanding into backend development and AI. I
          believe in writing clean, maintainable code and creating experiences
          that resonate with users.
        </p>
      </motion.div>

      {/* Education Section with Hover */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl shadow-lg p-8 mb-10 border border-transparent hover:border-[#A5F3FC] hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#34d399] mb-4">Education</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-3">
          <li>
            <strong className="text-white">Bachelor of Science (BSc)</strong> –
            Specialization in{" "}
            <span className="text-[#A5F3FC]">Chemistry</span> and{" "}
            <span className="text-[#A5F3FC]">Microbiology</span>
          </li>
          <li>
            Intermediate in Science – <strong>Pre-Medical</strong>
          </li>
          <li>Matriculation in  <strong> Science </strong></li>
        </ul>
      </motion.div>

      {/* Other Sections with hover effects */}
      {sections.map((item, idx) => (
        <motion.div
          key={idx}
          className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl shadow-lg p-8 mb-10 border border-transparent hover:border-[#A5F3FC] hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            {item.icon}
            <h3 className="text-xl font-semibold text-[#34d399]">
              {item.title}
            </h3>
          </div>
          <p className="text-gray-300 text-justify">{item.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default About;



