import { motion } from "framer-motion";

const Hobbies = () => {
  const hobbies = [
    { name: "Coding", icon: "💻", color: "from-blue-500" },
    { name: "Wrestling", icon: "🤼‍♂️", color: "from-red-500" },
    { name: "Gaming", icon: "🎮", color: "from-purple-500" }
  ];

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold mb-12">Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={hobby.name}
            className={`p-10 bg-gradient-to-br ${hobby.color} to-slate-900 rounded-3xl flex flex-col items-center border border-slate-700/50`}
          >
            <span className="text-6xl mb-4">{hobby.icon}</span>
            <h3 className="text-xl font-bold uppercase tracking-widest">{hobby.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Hobbies;