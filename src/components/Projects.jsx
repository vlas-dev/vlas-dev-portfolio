import React, { useState } from "react";
import calculatorImg from "/images/assets/calculatorImg.jpeg";
import weatherImg from "/images/assets/weatherImg.jpeg";
import rpsImg from "/images/assets/rpsImg.jpeg";
import synergyImg from "/images/assets/synergyImg.jpeg";
import smileProjectImg from "/images/assets/smileProjectImg.jpeg";
import { SiJavascript, SiCss3, SiTypescript, SiTailwindcss, SiReact, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { motion } from "framer-motion";

const Projects = () => {
// TechIcon component to handle tooltip display
const TechIcon = ({ Icon, label, style }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Icon style={style} />
      {showTooltip && (
        <div 
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '6px',
            padding: '5px 10px',
            fontSize: '12px',
            whiteSpace: 'nowrap'
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

  
const projectData = [
  {
    title: "Smile Care",
    description:
      "Dental clinic platform with appointment scheduling, ensuring easy access and convenience for patients.",
    image: smileProjectImg,
    liveLink: "https://smilecareclinic.vercel.app",
    codeLink: "https://github.com/vlas-dev/appointments-project-frontend",
    techStack: [
      <TechIcon key="react" Icon={SiReact} label="React" style={{ color: "#61dafb", width: "25px", height: "25px" }} />,
      <TechIcon key="nextjs" Icon={SiNextdotjs} label="Next.js" style={{ color: "", width: "25px", height: "25px" }} />,
      <TechIcon key="typescript" Icon={SiTypescript} label="TypeScript" style={{ color: "#3178c6", width: "25px", height: "25px" }} />,
      <TechIcon key="tailwind" Icon={SiTailwindcss} label="Tailwind CSS" style={{ color: "#38b2ac", width: "25px", height: "25px" }} />,
      <TechIcon key="mongo" Icon={SiMongodb} label="MongoDB" style={{ color: "#4db33d", width: "25px", height: "25px" }} />,
      <TechIcon key="express" Icon={SiExpress} label="Express.js" style={{ color: "", width: "25px", height: "25px" }} />
    ]
  },
  {
    title: "Synergy",
    description:
      "Business platform dedicated to enhancing and promoting teamwork.",
    image: synergyImg,
    liveLink: "https://synergy-solutions.vercel.app",
    codeLink: "https://github.com/vlas-dev/nextjs-site-UPDATE",
    techStack: [
      <TechIcon key="react" Icon={SiReact} label="React" style={{ color: "#61dafb", width: "25px", height: "25px" }} />,
      <TechIcon key="nextjs" Icon={SiNextdotjs} label="Next.js" style={{ color: "", width: "25px", height: "25px" }} />,
      <TechIcon key="js" Icon={SiJavascript} label="JavaScript" style={{ color: "#f7df1e", backgroundColor: "black", width: "25px", height: "25px" }} />,
      <TechIcon key="tailwind" Icon={SiTailwindcss} label="Tailwind CSS" style={{ color: "#38b2ac", width: "25px", height: "25px" }} />
    ]
  },
  {
    title: "R.P.S.",
    description:
      "Classic Rock Paper Scissors game reimagined as a retro fighting game.",
    image: rpsImg,
    liveLink: "https://vlas-dev.github.io/RPS-app",
    codeLink: "https://github.com/vlas-dev/RPS-app",
    techStack: [
      <TechIcon key="react" Icon={SiReact} label="React" style={{ color: "#61dafb", width: "25px", height: "25px" }} />,
      <TechIcon key="js" Icon={SiJavascript} label="JavaScript" style={{ color: "#f7df1e", backgroundColor: "black", width: "25px", height: "25px" }} />,
      <TechIcon key="tailwind" Icon={SiTailwindcss} label="Tailwind CSS" style={{ color: "#38b2ac", width: "25px", height: "25px" }} />
    ]
  },
  {
    title: "Weather App",
    description:
      "Quick tool to check the weather of any city using the OpenWeatherMap API.",
    image: weatherImg,
    liveLink: "https://vlas-dev.github.io/weather-app",
    codeLink: "https://github.com/vlas-dev/weather-app",
    techStack: [
      <TechIcon key="react" Icon={SiReact} label="React" style={{ color: "#61dafb", width: "25px", height: "25px" }} />,
      <TechIcon key="js" Icon={SiJavascript} label="JavaScript" style={{ color: "#f7df1e", backgroundColor: "black", width: "25px", height: "25px" }} />,
      <TechIcon key="tailwind" Icon={SiTailwindcss} label="Tailwind CSS" style={{ color: "#38b2ac", width: "25px", height: "25px" }} />,
      <TechIcon key="api" Icon={AiOutlineApi} label="OpenWeatherMap API" style={{ color: "#F7332C", width: "25px", height: "25px" }} />
    ]
  },
  {
    title: "Calculator",
    description:
      "Simple calculator integrated into a phone interface using CSS.",
    image: calculatorImg,
    liveLink: "https://vlas-dev.github.io/calculator-app",
    codeLink: "https://github.com/vlas-dev/calculator-app",
    techStack: [
      <TechIcon key="react" Icon={SiReact} label="React" style={{ color: "#61dafb", width: "25px", height: "25px" }} />,
      <TechIcon key="js" Icon={SiJavascript} label="JavaScript" style={{ color: "#f7df1e", backgroundColor: "black", width: "25px", height: "25px" }} />,
      <TechIcon key="tailwind" Icon={SiTailwindcss} label="Tailwind CSS" style={{ color: "#38b2ac", width: "25px", height: "25px" }} />
    ]
  },
];

  return (
    <div
      id="projects"
      name="/projects"
      className="flex pb-20 w-full transition-colors duration-200"
    >
      <motion.div
        className="max-w-[900px] mx-auto p-4"
        initial={{ opacity: 0, translateX: -10 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pb-5 text-center">
          <p className="text-4xl font-bold">Projects</p>
        </div>
        <p className="text-center text-lg mb-8">
          These are some of my latest projects.
        </p>
        <div className="grid grid-cols-1 gap-14 text-start">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:justify-start md:flex-row gap-10 lg:gap-0"
            >
              <div className="md:w-1/2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-60 w-full object-cover md:max-w-sm rounded-lg border-2 shadow-lg hover:shadow-stone-400 dark:hover:shadow-stone-600 transition-transform-all duration-300 border-stone-300 dark:border-stone-400 "
                  />
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start gap-3">
                <p className="text-xl font-bold mb-2">{project.title}</p>
                <p className="text-md mb-3 text-center md:text-start max-w-[500px]">
                  {project.description}
                </p>
                <div className="flex flex-col  md:flex-row mb-2 gap-3">
                 <div className="flex justify-center font-bold">Tech Stack:</div> <div className="flex items-center gap-2">{project.techStack.map(icon => icon)}</div>
                </div>
                <div className="flex justify-center md:justify-start gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 dark:bg-[#fd204f] dark:hover:bg-[#911232] text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-600 hover:bg-stone-900 dark:bg-stone-500 hover:dark:bg-stone-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
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