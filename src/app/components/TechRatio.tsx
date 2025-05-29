'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const technologies = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 95 },
  { name: 'JavaScript', percent: 90 },
  { name: 'React', percent: 90 },
  { name: 'Next.js', percent: 90 },
  { name: 'MongoDB', percent: 80 },
  { name: 'TypeScript', percent: 85 },
  { name: 'Tailwind CSS', percent: 90 },
  { name: 'Node.js', percent: 80 },
  { name: 'Firebase', percent: 75 },
  { name: 'Expressjs', percent: 75 },
  { name: 'Figma', percent: 85 },
  { name: 'Bootstrep', percent: 95 },
  { name: 'Python', percent: 80 },
  { name: 'AI', percent: 70 },
];

const TechRatio = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: { perView: 5, spacing: 12 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2 },
      },
    },
    created(slider) {
      setInterval(() => {
        if (slider) slider.next();
      }, 2500);
    },
  });

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-400">Skill</span> Mastery
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="keen-slider__slide flex flex-col items-center justify-center"
            >
              <div className="relative w-36 h-36 mb-3">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  className="rotate-[0deg]"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#334155"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={(2 * Math.PI * 45 * (100 - tech.percent)) / 100}
                    strokeLinecap="round"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fill="#06b6d4"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    {tech.percent}%
                  </text>
                </svg>
              </div>
              <span className="text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechRatio;






