
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Ecommerce Website',
    image: '/images/ecommerce.png',
    live: 'https://giaic-figma-hackathon.vercel.app/',
    code: 'https://github.com/Asia-parveen/giaic-figma-hackathon',
    tech: ['Nextjs', 'Tailwind CSS', 'SanityCMS'],
  },
    {
    title: 'Ai-website',
    image: '/images/Aiweb.png',
    live: 'https://edu-genius-ai-website.vercel.app/',
    code: 'https://github.com/Asia-parveen/EduGenius-AI-website',
    tech: ['Nextjs', 'AI', 'Tailwind CSS'],
  },
  {
    title: 'Unitconvertor App',
    image: '/images/unitconvertor.png',
    live: 'https://unit-converter-app-lxvnhrcstm9lnkjuz9suxw.streamlit.app/',
    code: 'https://github.com/Asia-parveen/unit-converter-app',
    tech: ['Python', 'Streamlit'],
  },
  {
    title: 'Task Management App',
    image: '/images/mern.png',
    live: 'https://hackathonfrontendmern.vercel.app/',
    code: 'https://github.com/Asia-parveen/hackathon-frontend',
    tech: ['Reactjs', 'Mongodb', 'Express'],
  },
  {
    title: 'personal-library',
    image: '/images/personallibrary.png',
    live: 'https://personal-library-manager-ryoroy76wia4m79vscwmx2.streamlit.app/',
    code: 'https://github.com/Asia-parveen/personal-library-manager',
    tech: ['Python', 'Streamlit'],
  },
  {
    title: 'Blog website',
    image: '/images/blog.png',
    live: 'https://web-blog-next-js.vercel.app/',
    code: 'https://github.com/Asia-parveen/webBlog-next-JS',
    tech: ['Nextjs', 'Tailwind CSS', 'Nodejs'],
  },
  {
    title: 'ToDo App',
    image: '/images/todo.png',
    live: 'https://asia-todo-web-project.streamlit.app/',
    code: 'https://github.com/Asia-parveen/streamlit-todo-assigment-project',
    tech: ['Python', 'Streamlit'],
  },
  {
    title: 'Trval website',
    image: '/images/trval.png',
    live: 'https://travel-website-next-js-iota.vercel.app/',
    code: 'https://github.com/Asia-parveen/Travel-Tailwind-next-JS',
    tech: ['Nextjs', 'Figma', 'Tailwind CSS'],
  },
  {
    title: 'password-strength-meter',
    image: '/images/password.png',
    live: 'https://password-strength-meter-axq6jty9zad799ptczxwtx.streamlit.app/',
    code: 'https://github.com/Asia-parveen/password-strength-meter',
    tech: ['Python', 'Streamlit'],
  },
    {
    title: 'Food website',
    image: '/images/nxtcss.png',
    live: 'https://next-js-css-website.vercel.app/',
    code: 'https://github.com/Asia-parveen/next-JS-CSS-website',
    tech: ['Nextjs', 'Figma', ' CSS'],
  },

  {
    title: 'Weather App',
    image: '/images/weather.png',
    live: 'https://weather-app-react-five-mocha.vercel.app/',
    code: 'https://github.com/Asia-parveen/weather-app-react',
    tech: ['Reactjs', 'Nodejs', 'Bootstrap'],
  },
  {
    title: 'Quiz App',
    image: '/images/3.JPG',
    live: 'https://asia-parveen.github.io/quiz-app/',
    code: 'https://github.com/Asia-parveen/quiz-app',
    tech: ['Javascript', 'HTML', 'CSS'],
  },
    {
    title: 'Bakery website',
    image: '/images/bakery.png',
    live: 'https://asia-parveen.github.io/first-bootstrep-website/',
    code: 'https://github.com/Asia-parveen/first-bootstrep-website',
    tech: ['Javascript', 'HTML', 'Bootstreap'],
  },
  {
    title: 'Post Application',
    image: '/images/postapp.png',
    live: 'https://asia-parveen.github.io/post-Application/',
    code: 'https://github.com/Asia-parveen/post-Applicationr',
    tech: ['Javascript', 'HTML', 'CSS'],
  },
  {
    title: 'Auth firebase',
    image: '/images/firebs.png',
    live: 'https://auth-firebase-nine-sigma.vercel.app/',
    code: 'https://github.com/Asia-parveen/auth-firebase',
    tech: ['Javascript', 'Firebase', 'HTML'],
  },
  {
    title: 'Countdown Timer',
    image: '/images/2.JPG',
    live: 'https://countdown-timer-next-js-rho.vercel.app/',
    code: 'https://github.com/Asia-parveen/countdown-timer-next-js',
    tech: ['Nextjs','Typescript', 'Tailwind CSS'],
  },
     {
    title: 'Barber project',
    image: '/images/barber.png',
    live: 'https://asia-parveen.github.io/barber_project/',
    code: 'https://github.com/Asia-parveen/barber_project',
    tech: ['Nextjs','Typescript', 'Tailwind CSS'],
  },
    {
    title: 'BMI Calculator',
    image: '/images/bmi.png',
    live: 'https://jo3cietbdtcmfmkslcnh53.streamlit.app/',
    code: 'https://github.com/Asia-parveen/bmi-calculator',
    tech: ['Python', 'Streamlit'],
  },
]

// Remove HTML from the list
const categories = ['All', 'Javascript', 'Nextjs', 'Reactjs', 'Python']

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : selectedCategory === 'Javascript'
      ? projects.filter((project) =>
          project.tech.some(
            (tech) =>
              tech.toLowerCase() === 'javascript' ||
              tech.toLowerCase() === 'html'
          )
        )
      : projects.filter((project) =>
          project.tech.some((tech) =>
            tech.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        )

  return (
    <section className="bg-slate-900 text-white py-16 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-3 text-xs font-medium">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full transition-all 
                ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-cyan-600 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700"
              style={{ aspectRatio: '16 / 9' }}
            >
              <div className="relative w-full h-full pt-2 bg-black rounded-xl shadow-xl overflow-hidden flex flex-col">
                <div className="relative w-full flex-grow pt-2 bg-slate-900 rounded-t-xl overflow-hidden flex justify-center items-center p-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={360}
                    height={170}
                    style={{ objectFit: 'cover', borderRadius: '0.75rem 0.75rem 0 0' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                    priority={idx < 3}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4 text-center">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={project.live}
                        target="_blank"
                        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded flex items-center gap-1 text-white text-sm"
                      >
                        <FaExternalLinkAlt /> Live
                      </Link>
                      <Link
                        href={project.code}
                        target="_blank"
                        className="bg-slate-700 hover:bg-slate-800 px-4 py-2 rounded flex items-center gap-1 text-white text-sm"
                      >
                        <FaGithub /> Code
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-[15%] bg-gray-800 rounded-b-xl border-t border-slate-700 flex items-center justify-center text-gray-400 text-sm font-mono select-none">
                  <div className="w-3/4 h-3 bg-gray-700 rounded-md shadow-inner"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects





