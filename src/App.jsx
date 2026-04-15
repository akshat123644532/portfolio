import { useState } from "react";
import Navbar from "./components/Navbar";
   
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Name from "./components/Name";
import Hobbies from "./components/hobbies";
import Education from "./components/Education";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-slate-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar dark={dark} setDark={setDark} />
      
      <main className="max-w-4xl mx-auto px-6 pt-20">
     
        <Name></Name>
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
      </main>
    </div>
  );
}

export default App;

