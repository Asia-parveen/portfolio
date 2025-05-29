'use client';

import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 border-b border-cyan-500/30 pb-10">

        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white select-none leading-tight">
            As<span className="text-cyan-400">i</span>a Pa
            <span className="text-cyan-400">rv</span>een
          </h1>
          <p className="mt-2 text-slate-400 max-w-xs mx-auto sm:mx-0 leading-relaxed">
            Building the future of tech with creativity, code, and caffeine ☕
          </p>
          <p className="mt-4 text-cyan-400 underline font-medium cursor-pointer hover:text-cyan-300 transition max-w-xs mx-auto sm:mx-0">
            beautyhealthytips177@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-white font-semibold mb-6 text-xl">Quick Links</h2>
          {[
            { label: "About", href: "/about" },
            { label: "Skills", href: "/skills" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-400 text-lg mb-4 hover:text-cyan-400 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-white font-semibold mb-6 text-xl">Address</h2>

          <div className="flex items-center gap-3 mb-4">
            <BiMapPin className="text-cyan-400 text-xl" />
            <p className="text-slate-400 text-lg">Karachi, Pakistan</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <BiEnvelope className="text-cyan-400 text-xl" />
            <p className="text-slate-400 text-sm md:text-lg break-words max-w-xs">
              beautyhealthytips177@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <BiPhone className="text-cyan-400 text-xl" />
            <p className="text-slate-400 text-lg">+92 305 9989157</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-500 text-sm select-none px-4 sm:px-0">
        © 2024 Asia Parveen — Powered by passion, purpose, and pixels ✨
      </div>
    </footer>
  );
};

export default Footer;




// 'use client';

// import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="pt-20 pb-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
//       <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-cyan-500/30 pb-10">
        
//         {/* Brand Info */}
//         <div>
//           <h1 className="text-[28px] md:text-[36px] font-extrabold text-white select-none">
//             As<span className="text-cyan-400">i</span>a Pa
//             <span className="text-cyan-400">rv</span>een
//           </h1>
//           <p className="mt-2 text-slate-400 max-w-xs leading-relaxed">
//             Building the future of tech with creativity, code, and caffeine ☕
//           </p>
//           <p className="mt-4 text-cyan-400 underline font-medium cursor-pointer hover:text-cyan-300 transition">
//             beautyhealthytips177@gmail.com
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col md:items-center">
//           <h2 className="text-white font-semibold mb-6 text-xl">Quick Links</h2>
//           {[
//             { label: "About", href: "/about" },
//             { label: "Skills", href: "/skills" },
//             { label: "Projects", href: "/projects" },
//             { label: "Contact", href: "/contact" },
//           ].map(({ label, href }) => (
//             <Link
//               key={href}
//               href={href}
//               className="text-slate-400 text-lg mb-4 hover:text-cyan-400 transition"
//             >
//               {label}
//             </Link>
//           ))}
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col lg:items-start md:items-center">
//           <h2 className="text-white font-semibold mb-6 text-xl">Address</h2>

//           <div className="flex items-center gap-3 mb-4">
//             <BiMapPin className="text-cyan-400 text-xl" />
//             <p className="text-slate-400 text-lg">Karachi, Pakistan</p>
//           </div>

//           <div className="flex items-center gap-3 mb-4">
//             <BiEnvelope className="text-cyan-400 text-xl" />
//             <p className="text-slate-400 text-lg">beautyhealthytips177@gmail.com</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <BiPhone className="text-cyan-400 text-xl" />
//             <p className="text-slate-400 text-lg">+92 305 9989157</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-slate-500 text-sm select-none">
//         © 2024 Asia Parveen — Powered by passion, purpose, and pixels ✨
//       </div>
//     </footer>
//   );
// };

// export default Footer;


