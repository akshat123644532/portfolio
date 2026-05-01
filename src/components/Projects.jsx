import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
     {
      id: 4, 
      title: "CAMPUSCONNECT",
      category: "Full Stack Development",
      description:"CampusConnect is a full-stack MERN-based event management platform where students can discover, register, and manage college events while organizers can create and manage events with authentication, role-based access, and email notifications.",
      tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
      github: "https://github.com/akshat123644532/campusConnect", 
      link: "https://campus-connect-nine-livid.vercel.app/", 
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
    },
    {
      id: 1, 
      title: "Airbnb Clone",
      category: "Full Stack Development",
      description: "A premium property booking platform with real-time search, Mapbox integration, and secure payment gateway.",
      tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
      link: "https://wondderlust-2.onrender.com/", 
      github:"https://github.com/akshat123644532/wondderlust-",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" 
    },
    {
      id: 3,
      title: "Modern Portfolio",
      category: "Frontend Development",
      description: "A high-performance personal portfolio featuring Framer Motion animations, a responsive grid system, and a dark-themed aesthetic.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      link: "/", 
      github: "https://github.com/akshat123644532/portfolio", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    }
  ];
  

  return (
    <section id="projects" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold italic tracking-tighter">FEATURED WORK</h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col lg:flex-row bg-slate-800/30 rounded-[2rem] overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500"
          >
           
            <div className="lg:w-1/2 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

      
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-cyan-400 font-mono text-sm mb-2 tracking-widest uppercase">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-700 rounded-lg text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank" // New tab mein kholne ke liye
                  className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-xl shadow-[0_10px_20px_-10px_rgba(34,211,238,0.5)]"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://github.com/akshat123644532/wondderlust-" // <--- Ye Airbnb ka lag raha hai, Amazon ka yahan daal dena
                  target="_blank"
                  className="flex items-center gap-2 text-white font-medium px-4 py-3 group"
                >
                  Source Code <span className="transition-transform group-hover:translate-x-1">→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;