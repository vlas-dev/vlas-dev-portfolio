import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function ResponsiveLayout() {
  return (
    <div className="flex flex-col">
      <section className="min-h-screen bg-gray-100 dark:bg-[#181a1b] p-4">
        <Home />
      </section>
      <section className="min-h-screen bg-gray-200 dark:bg-[#151617] p-4 shadow">
        <About />
      </section>
      <section className="min-h-screen bg-gray-100 dark:bg-[#181a1b] p-4">
        <Projects />
      </section>
      <section className="min-h-screen bg-gray-200 dark:bg-[#151617] p-4 shadow">
        <Contact />
      </section>
    </div>
  );
}

export default ResponsiveLayout;
