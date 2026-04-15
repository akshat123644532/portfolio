import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "Tailwind CSS", "HTML5/CSS3"],
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-cyan-500/50"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Rest APIs"],
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-emerald-500/50"
    },
    {
      title: "Problem Solving",
      skills: ["java", "DSA", "Logic Building", "Complexity Analysis"],
      color: "from-yellow-500/20 to-orange-500/20",
      border: "border-orange-500/50"
    },
    {
      title: "Tools & Security",
      skills: ["Git/GitHub", "JWT Auth", "Cloudinary", "Postman"],
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/50"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-bold tracking-tight">TECH STACK</h2>
        <p className="text-slate-400 mt-2">Tools aur technologies jinme meri command hai.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-3xl bg-gradient-to-br ${cat.color} border ${cat.border} backdrop-blur-xl`}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {cat.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-1.5 bg-slate-900/80 rounded-xl text-sm font-medium border border-slate-700/50 hover:border-white/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;