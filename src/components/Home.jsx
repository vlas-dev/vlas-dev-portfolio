import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      id="home"
      name="/"
      className="h-screen pb-40 transition-colors duration-200"
    >
      {/* CONTAINER */}
      <motion.div
        className="mx-auto flex flex-col justify-center items-center h-full max-w-[900px] text-pretty"
        initial={{ opacity: 0, translateX: -10 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold">
            Hi! I'm{" "}
            <span className="text-blue-500 dark:text-[#fd204f]">Fabián</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
            I'm a Front-End Developer from Argentina. I create modern and
            responsive web apps.
          </p>
          <p className="mt-6 mb-6 text-xl md:text-2xl max-w-3xl mx-auto font-semibold">
            Let's build something amazing together!
          </p>
          <div className="flex justify-center">
            <div
              className="relative mt-5"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <RouterLink to="/projects">
                <button
                  className={`hidden lg:flex items-center focus:outline-none px-5 py-3 rounded-full transition-colors duration-200 ${
                    isHovered
                      ? "bg-blue-600 dark:bg-[#da003f]"
                      : " bg-blue-500 dark:bg-[#fd204f] "
                  }`}
                >
                  <span className="mr-2 text-white">Explore Projects</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ yoyo: Infinity, duration: 0.5 }}
                  >
                    <FiArrowRight className="text-white" />
                  </motion.span>
                </button>
              </RouterLink>

              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className={`flex lg:hidden items-center focus:outline-none px-5 py-3 rounded-full transition-colors duration-200 ${
                    isHovered
                      ? "bg-blue-600 dark:bg-[#da003f]"
                      : " bg-blue-500 dark:bg-[#fd204f] "
                  }`}
                >
                  <span className="mr-2 text-white">Explore Projects</span>
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? 5 : 0 }}
                    transition={{ yoyo: Infinity, duration: 0.5 }}
                  >
                    <FiArrowDown className="text-white" />
                  </motion.span>
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
