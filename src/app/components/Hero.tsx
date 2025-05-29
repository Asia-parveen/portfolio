"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowDown,
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  
} from "react-icons/fa";

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 12px rgba(52, 211, 153, 0.8)",
    transition: { duration: 0.3 },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-30 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col md:flex-row items-center justify-center px-6 gap-12 md:gap-24"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Left - Image */}
      <motion.div
        className="flex-shrink-0"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/images/avtr.png"
          alt="Asia Parveen"
          width={360}
          height={360}
          className="rounded-full border-4 border-cyan-400 shadow-lg shadow-[#34d399]/50"
          priority
          style={{
            width: "240px",
            height: "240px",
            maxWidth: "100%",
          }}
          sizes="(max-width: 768px) 160px, 360px"
        />
      </motion.div>

      {/* Right - Text */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={textContainer}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-wide bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
          variants={textItem}
        >
          Creative Frontend Developer
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold mb-6 tracking-wide text-[#34d399] hover:text-[#a5f3fc] transition-colors duration-300"
          variants={textItem}
        >
          Passionate <span className="text-[#a5f3fc] font-bold">Full Stack </span>Enthusiast
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-base sm:text-sm text-gray-300 text-justify mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          I&apos; a Full Stack Developer with a flair for creating clean, responsive,
          and engaging web experiences using ReactJS and Next.js. I craft
          user-focused interfaces that blend modern design with powerful
          functionality. Always exploring new technologies, I&apos;m currently diving
          into AI to take my skills to the next level. Let&apos;s build something impactful
          that stands out in today&apos;s digital world!
        </motion.p>

        {/* Buttons and Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-6 pb-6">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <motion.a
              href="/asia_parveen_resume.pdf"
              download
              className="px-8 py-4 rounded-full font-semibold border-2 border-cyan-400 text-[#34d399] hover:text-black hover:bg-[#34d399] transition-all duration-300 ease-in-out shadow-md flex items-center gap-2 justify-center"
              variants={buttonVariants}
              whileHover="hover"
            >
              Download CV <FaArrowDown className="text-sm" />
            </motion.a>

            <Link
              href="/about"
              className="px-8 py-4 rounded-full font-semibold border-2 border-cyan-400 text-[#34d399] hover:text-black hover:bg-[#34d399] transition-all duration-300 ease-in-out shadow-md flex items-center gap-2 justify-center"
            >
              Get to Know Me <FaArrowRight className="text-sm" />
            </Link>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-6 sm:md  md:ml-[160px] mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Link
              href="https://www.linkedin.com/in/asia-parveen-258a952a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/Asia-parveen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-xl"
            >
              <FaGithub />
            </Link>

          <Link
  href="https://wa.me/923059989157?text=Hi%20Asia!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 hover:text-white text-xl"
>
  <FaWhatsapp />
</Link>


         {/* <a
  href="mailto:beautyhealthytips177@gmail.com"
  className="text-cyan-400 hover:text-white text-xl"
>
  <FaEnvelope />
</a> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;






