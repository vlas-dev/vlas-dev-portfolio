import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResponsiveLayout from "./ResponsiveLayout";
import { AnimatePresence } from "framer-motion";
import { GrPrevious, GrNext } from "react-icons/gr";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = ["/", "/projects", "/about", "/contact"];
  const currentRouteIndex = routes.indexOf(location.pathname);

  const navigateToNext = () => {
    const nextRoute = routes[(currentRouteIndex + 1) % routes.length];
    navigate(nextRoute);
  };

  const navigateToPrev = () => {
    const prevRouteIndex =
      (currentRouteIndex - 1 + routes.length) % routes.length;
    const prevRoute = routes[prevRouteIndex];
    navigate(prevRoute);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLargeScreen) {
        navigate("/");
      }
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [navigate]);

  return (
    <>
      <div className="lg:hidden">
        <ResponsiveLayout />
      </div>
      <div className="hidden lg:block bg-gradient-to-r from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800">
        <div className="fixed top-0 bottom-0 z-10 flex items-center justify-center h-full">
          <button
            onClick={navigateToPrev}
            className="text-stone-400 dark:text-stone-400 font-bold p-5 md:ml-14 text-4xl transition duration-300 ease-in-out hover:bg-stone-300 hover:dark:bg-stone-700 hover:text-stone-600 hover:dark:text-stone-100 rounded-full"
          >
            <GrPrevious />
          </button>
        </div>

        <div className="fixed right-0 top-0 bottom-0 z-10 flex items-center justify-center h-full">
          <button
            onClick={navigateToNext}
            className="text-stone-400 dark:text-stone-400 font-bold p-5 md:mr-14 text-4xl transition duration-300 ease-in-out hover:bg-stone-300 hover:dark:bg-stone-700 hover:text-stone-600 hover:dark:text-stone-100 rounded-full"
          >
            <GrNext />
          </button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default AnimatedRoutes;
