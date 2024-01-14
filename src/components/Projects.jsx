import React from "react";
import calculatorImg from "../assets/calculatorImg.jpeg";
import weatherImg from "../assets/weatherImg.jpeg";
import rpsImg from "../assets/rpsImg.jpeg";
import synergyImg from "../assets/synergyImg.jpeg";
import newProjectImg from "../assets/newProjectImg.jpeg"
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "TechZone",
      description: "An E-commerce platform for the latest electronics in the market.",
      image: newProjectImg,
      liveLink: "https://techzone-vlas-dev.vercel.app/",
      codeLink: "https://github.com/vlas-dev/ecommerce-vite",
    },
    {
      title: "Synergy",
      description: "Business platform for collaborative efforts.",
      image: synergyImg,
      liveLink: "https://synergy-solutions.vercel.app",
      codeLink: "https://github.com/vlas-dev/nextjs-site-UPDATE",
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
      title: "Weather App",
      description:
        "Quick tool to check the weather of any city using the OpenWeatherMap API.",
      image: weatherImg,
      liveLink: "https://vlas-dev.github.io/weather-app",
      codeLink: "https://github.com/vlas-dev/RPS-app",
    },
    {
      title: "Calculator",
      description:
        "Simple calculator integrated into a phone interface using CSS.",
      image: calculatorImg,
      liveLink: "https://vlas-dev.github.io/calculator-app",
      codeLink: "https://github.com/vlas-dev/calculator-app",
    }
  ];
  

  return (
    <div
      id="projects"
      name="/projects"
      className="flex justify-center items-center pb-20 w-full lg:bg-gray-100 lg:dark:bg-[#181a1b] dark:text-gray-100 text-gray-700 lg:pt-16 sm:pl-4 sm:pr-4  transition-colors duration-200"
    >
      <motion.div
        className="max-w-[500px] md:max-w-[800px] mx-auto p-4"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-[#242729] shadow-md hover:shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-60 w-full object-cover border-b border-gray-300"
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">{project.title}</p>
                <p className="text-md mb-3">{project.description}</p>
                <div className="flex justify-center gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 dark:bg-[#fd204f] dark:hover:bg-[#da003f] text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-full transition-colors duration-300"
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