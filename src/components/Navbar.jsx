import { motion } from "framer-motion";

const Navbar = ({ dark, setDark }) => {
  const navLinks = ["Projects", "Skills", "Education", "Hobbies"];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-80 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 whileHover={{ scale: 1.1 }} className="text-2xl font-black tracking-tighter cursor-pointer">
          AKSHAT<span className="text-cyan-400">.</span>
        </motion.h1>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 font-medium opacity-80">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{link}</a>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} className="p-2 bg-slate-800 rounded-xl text-xl">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;