"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, // Route to separate page
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 bg-[#0F172A] shadow-md "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 md:mr-20">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#10B981] text-white font-bold flex items-center justify-center text-lg sm:text-xl shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            AP
          </motion.div>
       <motion.span
  className="text-lg sm:text-xl md:text-3xl font-semibold text-[#F1F5F9] "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  As<span className="text-cyan-400">i</span>a Pa
  <span className="text-cyan-400">rv</span>een
</motion.span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[#F1F5F9] font-medium text-sm sm:text-base">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, color: "#06B6D4" }}
              transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={item.href}
                className="transition duration-300 hover:text-[#7C3AED]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden text-[#F1F5F9]">
          {!isOpen ? (
            <HiMenuAlt3
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <HiX
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden bg-[#0F172A] text-[#F1F5F9] flex flex-col items-center gap-5 py-6 text-base font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#7C3AED] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;



// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const navItems = ["About", "Skills", "Projects", "Contact"];
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       className="w-full fixed top-0 z-50 bg-[#0F172A] shadow-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Logo and Name */}
//         <div className="flex items-center gap-3 md:mr-20">
//           <motion.div
//             className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#10B981] text-white font-bold flex items-center justify-center text-lg sm:text-xl shadow-lg"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//           >
//             AP
//           </motion.div>
//           <motion.span
//             className="text-lg sm:text-xl md:text-3xl font-semibold text-[#F1F5F9]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Asia Parveen
//           </motion.span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex gap-6 lg:gap-8 text-[#F1F5F9] font-medium text-sm sm:text-base">
//           {navItems.map((item, index) => (
//             <motion.li
//               key={item}
//               whileHover={{ scale: 1.1, color: "#06B6D4" }}
//               transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className="transition duration-300 hover:text-[#7C3AED]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>

//         {/* Mobile Hamburger Menu */}
//         <div className="md:hidden text-[#F1F5F9]">
//           {!isOpen ? (
//             <HiMenuAlt3
//               size={28}
//               className="cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           ) : (
//             <HiX
//               size={28}
//               className="cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.ul
//           className="md:hidden bg-[#0F172A] text-[#F1F5F9] flex flex-col items-center gap-5 py-6 text-base font-semibold"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setIsOpen(false)}
//                 className="hover:text-[#7C3AED] transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </motion.ul>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;





// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const navItems = ["About", "Skills", "Projects", "Contact"];
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       className="w-full fixed top-0 z-50 bg-[#0F172A] shadow-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-15 py-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Logo and Name */}
//         <div className="flex items-center gap-3 md:mr-20">
//           <motion.div
//             className="w-12 h-12 rounded-full bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#10B981] text-white font-bold flex items-center justify-center text-xl shadow-lg"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//           >
//             AP
//           </motion.div>
//           <motion.span
//             className="text-xl md:text-3xl font-semibold text-[#F1F5F9]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Asia Parveen
//           </motion.span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex gap-8 text-[#F1F5F9] font-medium text-base">
//           {navItems.map((item, index) => (
//             <motion.li
//               key={item}
//               whileHover={{ scale: 1.1, color: "#06B6D4" }}
//               transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className="transition duration-300 hover:text-[#7C3AED]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>

//         {/* Mobile Hamburger Menu */}
//         <div className="md:hidden text-[#F1F5F9]">
//           {!isOpen ? (
//             <HiMenuAlt3
//               size={30}
//               className="cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           ) : (
//             <HiX
//               size={30}
//               className="cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.ul
//           className="md:hidden bg-[#0F172A] text-[#F1F5F9] flex flex-col items-center gap-6 py-6 text-lg font-semibold"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setIsOpen(false)}
//                 className="hover:text-[#7C3AED] transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </motion.ul>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;




