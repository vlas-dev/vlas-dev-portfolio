import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResponsiveLayout from "./ResponsiveLayout";
import { AnimatePresence } from "framer-motion";
import { GrPrevious , GrNext } from "react-icons/gr";


function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const routes = ["/", "/about", "/projects", "/contact"];
  const currentRouteIndex = routes.indexOf(location.pathname);

  const navigateToNext = () => {
    const nextRoute = routes[(currentRouteIndex + 1) % routes.length];
    navigate(nextRoute);
  };

  const navigateToPrev = () => {
    const prevRouteIndex = (currentRouteIndex - 1 + routes.length) % routes.length;
    const prevRoute = routes[prevRouteIndex];
    navigate(prevRoute);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 992);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobileView ? (
        <ResponsiveLayout />
      ) : (
        <>
          <div className="fixed left-16 z-10 flex items-center">
            <button 
              onClick={navigateToPrev}
              className=" text-gray-600 dark:text-gray-200 font-bold py-2 px-4  h-screen text-5xl"
            >
              <GrPrevious />
            </button>
          </div>

          <div className="fixed right-16 z-10 flex items-center">
            <button 
              onClick={navigateToNext}
              className="text-gray-600 dark:text-gray-200 font-bold py-2 px-4  h-screen text-5xl"
            >
              <GrNext />
            </button>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default AnimatedRoutes;
