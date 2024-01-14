import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function ResponsiveLayout() {
  return (
    <div className="flex flex-col w-full">
      <section className="min-h-screen bg-gradient-to-l  from-white to-gray-100 dark:from-[#181a1b] dark:to-[#202224] p-4">
        <Home />
      </section>
      
      <section className="min-h-screen bg-gradient-to-r from-white to-gray-100 dark:from-[#181a1b] dark:to-[#202224] p-4">
        <Projects />
      </section>
      <section className="min-h-screen bg-gradient-to-bl from-gray-50 to-gray-200 dark:from-[#151617] dark:to-[#1c1e20] p-4 shadow">
        <About />
      </section>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-[#151617] dark:to-[#1c1e20] p-4 shadow">
        <Contact />
      </section>
    </div>
  );
}

export default ResponsiveLayout;
