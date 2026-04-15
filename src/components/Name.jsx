import { motion } from "framer-motion";

import myPhoto from "../assets/akshat.jpg"; 

const Name = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-6 min-h-[80vh]">
      
     
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut" 
        }}
        className="relative group"
      >
       
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-400 relative z-10 shadow-2xl bg-slate-800">
          <img 
            src={myPhoto} 
            alt="Akshat Solanki"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              console.error("Bhai, path abhi bhi galat hai! Check: src/acets/akshat.jpg");
              e.target.src = "https://via.placeholder.com/300"; 
            }}
          />
        </div>

     
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-5 rounded-full border border-dashed border-cyan-400/30"
        ></motion.div>
      </motion.div>

    
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <motion.span 
          initial={{ letterSpacing: "0.1em" }}
          animate={{ letterSpacing: "0.3em" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-cyan-400 font-mono text-sm mb-4 block uppercase"
        >
          MERN Stack Developer
        </motion.span>

        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter">
          Akshat <br /> Solanki
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center md:justify-start gap-4"
        >
          <div className="h-[2px] w-12 bg-cyan-500"></div>
          <p className="text-xl text-slate-400 font-light tracking-wide">
            DRDO INTERN | 2026
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Name;
