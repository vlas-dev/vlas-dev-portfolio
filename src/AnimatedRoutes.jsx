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

  const routes = ["/", "/about", "/projects", "/contact"];
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

  // Detect screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLargeScreen) {
        navigate("/");
      }
    };

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Call once on initial render
    checkScreenSize();

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [navigate]);

  return (
    <>
      <div className="lg:hidden">
        <ResponsiveLayout />
      </div>
      <div className="hidden lg:block">
        <div className="fixed left-4 z-10 flex items-center">
          <button
            onClick={navigateToPrev}
            className="text-gray-600 dark:text-gray-400 font-bold px-10 h-screen text-4xl transition duration-300 ease-in-out hover:bg-gray-200 hover:dark:bg-[#222426] hover:text-gray-100"
          >
            <GrPrevious />
          </button>
        </div>

        <div className="fixed right-4 z-10 flex items-center">
          <button
            onClick={navigateToNext}
            className="text-gray-600 dark:text-gray-400 font-bold px-10 h-screen text-4xl transition duration-300 ease-in-out hover:bg-gray-200 hover:dark:bg-[#222426] hover:text-gray-100"
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
      </div>
    </>
  );
}

export default AnimatedRoutes;
