import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

import { motion } from "framer-motion";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      id="home"
      name="/"
      className="w-full h-screen lg:bg-gray-100 lg:dark:bg-[#181a1b]  transition-colors duration-200"
    >
      {/* CONTAINER */}
      <motion.div
        className="max-w-[800px] mx-auto flex flex-col justify-center items-center h-3/4 md:h-full"
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="md:text-6xl text-5xl text-gray-500 dark:text-gray-300 text-center mt-5 pb-5">
            Hi, I'm{" "}
            <span className="font-semibold text-blue-500 dark:text-[#fd204f] ">
              Fabián
            </span>{" "}
          </h1>
          <h2 className="md:text-5xl text-3xl font-semibold text-gray-600 dark:text-gray-400 text-center pb-5">
            Front-End Developer
          </h2>
          <p className="max-w-[400px] md:max-w-[600px] text-gray-600 dark:text-gray-400 text-center px-5 md:pr-0 md:pl-0">
            I'm a Web Developer specialized in React based in Argentina. <br />{" "}
            I also have skills in graphic design.{" "}
          </p>
          <div
            className="relative mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <RouterLink to="/about">
              <button
                className={`hidden lg:flex items-center focus:outline-none px-5 py-3  rounded transition-colors duration-200 ${
                  isHovered
                    ? "bg-blue-600   dark:bg-[#da003f]"
                    : " bg-blue-500  dark:bg-[#fd204f] "
                }`}
              >
                <span className="mr-2 text-white">Read More</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ yoyo: Infinity, duration: 0.5 }}
                >
                  <FiArrowRight
                    className="text-white"
                    style={{ marginTop: "3px" }}
                  />
                </motion.span>
              </button>
            </RouterLink>

            <ScrollLink to="about" smooth={true} offset={-70} duration={500}>
              <button
                className={`flex lg:hidden items-center focus:outline-none px-5 py-3  rounded transition-colors duration-200 ${
                  isHovered
                    ? "bg-blue-600   dark:bg-[#da003f]"
                    : " bg-blue-500  dark:bg-[#fd204f] "
                }`}
              >
                <span className="mr-2 text-white">Read More</span>
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: isHovered ? 5 : 0 }}
                  transition={{ yoyo: Infinity, duration: 0.5 }}
                >
                  <FiArrowDown
                    className="text-white"
                    style={{ marginTop: "3px" }}
                  />
                </motion.span>
              </button>
            </ScrollLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
