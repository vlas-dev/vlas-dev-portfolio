import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function ResponsiveLayout() {
  return (
    <div className="flex flex-col w-full">
      <section className="min-h-screen bg-gradient-to-l  from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 p-4">
        <Home />
      </section>
      
      <section className="min-h-screen bg-gradient-to-r from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 p-4 border-y-2">
        <Projects />
      </section>
      <section className="min-h-screen bg-gradient-to-bl from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 p-4 shadow border-b-2">
        <About />
      </section>
      <section className="min-h-screen bg-gradient-to-br from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 p-4 shadow">
        <Contact />
      </section>
    </div>
  );
}

export default ResponsiveLayout;
