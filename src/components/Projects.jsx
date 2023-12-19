import React from "react";
import calculatorImg from "../assets/calculatorImg.jpeg";
import weatherImg from "../assets/weatherImg.jpeg";
import rpsImg from "../assets/rpsImg.jpeg";
import synergyImg from "../assets/synergyImg.jpeg";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Calculator",
      description:
        "Simple calculator integrated into a phone interface using CSS.",
      image: calculatorImg,
      liveLink: "https://vlas-dev.github.io/calculator-app",
      codeLink: "https://github.com/vlas-dev/calculator-app",
    },
    {
      title: "Weather App",
      description:
        "Quick tool to check the weather of any city using the OpenWeatherMap API.",
      image: weatherImg,
      liveLink: "https://vlas-dev.github.io/weather-app",
      codeLink: "https://github.com/vlas-dev/RPS-app",
    },
    {
      title: "R.P.S.",
      description:
        "Classic Rock Paper Scissors game reimagined as a retro fighting game.",
      image: rpsImg,
      liveLink: "https://vlas-dev.github.io/RPS-app",
      codeLink: "https://github.com/vlas-dev/RPS-app",
    },
    {
      title: "Synergy",
      description: "Business platform for collaborative efforts.",
      image: synergyImg,
      liveLink: "https://synergy-solutions.vercel.app",
      codeLink: "https://github.com/vlas-dev/nextjs-site-UPDATE",
    },
  ];

  return (
    <div
    id="projects"
      name="/projects"
      className="flex justify-center items-center pb-20 w-full bg-gray-100 dark:bg-[#1a1a1a] dark:text-gray-300 text-gray-700 md:pt-10 lg:pt-36 sm:pl-4 sm:pr-4 md:h-screen transition-colors duration-200"
    >
      <motion.div
        className=" max-w-[500px] md:max-w-[800px]  mx-auto p-4"
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pb-5 text-center ">
          <p className="text-4xl font-bold">Projects</p>
        </div>

        <p className="text-center text-lg mb-4">
          These are some of my latest projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden shadow-md rounded-lg relative transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-h-60 w-full object-cover transform md:group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <div className="text-center px-4">
                  <p className="text-white text-3xl font-semibold mb-4 shadow-md">
                    {project.title}
                  </p>
                  <p className="text-white text-md mb-10 shadow-md">
                    {project.description}
                  </p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 dark:bg-[#fd204f] dark:hover:bg-[#da003f] text-white px-5 py-3 mr-2 rounded transition-colors duration-300 "
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded transition-colors duration-300 "
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
