import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "DRDO Internship",
      institution: "Defence Research and Development Organisation",
      date: "2025 - Present",
      description: "Working on full-stack modules and security protocols. Gaining hands-on experience in mission-critical applications.",
      isFeatured: true,
    },
    {
      title: "B.Tech in Computer Science",
      institution: "bharat institute of technology",
      date: "2022 - 2026",
      description: "Focusing on Software Engineering, Database Management, and Advanced DSA. Maintaining a strong academic record.",
      isFeatured: false,
    },
      {
      title: "class 12th,",
      institution: "girukul international school",
      date: " 2022",
      isFeatured: false,
    },
       {
      title: "class 10th,",
      institution: "girukul international school",
      date: "2020",
      isFeatured: false,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight">MY JOURNEY</h2>
        <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-8 space-y-12">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
           
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-slate-900 ${edu.isFeatured ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-slate-500'}`}></div>

            <div className={`p-6 md:p-8 rounded-3xl border ${edu.isFeatured ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-slate-800/40 border-slate-700/50'} backdrop-blur-md`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  {edu.isFeatured && (
                    <span className="bg-cyan-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2 inline-block">
                      Current Milestone
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold ${edu.isFeatured ? 'text-cyan-400' : 'text-white'}`}>
                    {edu.title}
                  </h3>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
                  {edu.date}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;