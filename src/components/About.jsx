import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma
} from "react-icons/si";

import { motion } from "framer-motion";


const About = () => {
  return (
    <div
      name="/about"
      className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#181a1b] text-[#444440] dark:text-gray-300 transition-colors duration-200 pt-20 md:pt-10 pb-10"
    >
      <motion.div
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div className="w-full max-w-[500px] md:max-w-[800px] text-center ">
          <div className="pb-5">
            <p className="text-4xl font-bold inline">About</p>
          </div>
          <div className="sm:grid-cols-2 gap-8 pr-8 pl-8 md:pr-32 md:pl-32 mb-2">
            <p>
              My work consists of creating web apps mainly using React, as well as
              editing and designing multimedia content. With this combined skill
              set, I try to bring engaging user experiences to life.
            </p>
          </div>
        </div>

        <div className="w-full p-4 pt-8 mb-4 md:mb-10 text-center">
          <div>
            <p className="text-2xl font-bold mb-8">Main Skills</p>
          </div>

          <div className="grid grid-cols-3 justify-center gap-4 font-bold md:flex md:flex-no-wrap max-w-[350px] md:max-w-[500px] mx-auto">
  
  
  <div className="flex flex-col ml-4 mr-4">
    
  <div className="relative">
  <div className="w-9 h-12 mt-1 bg-white ml-3 md:ml-0"></div>
  <div className="absolute top-0 flex flex-col items-center md:left-[-30%]">
    <SiHtml5 size={60} style={{ color: "#e44d26" }} />
    <p className="mt-2">HTML</p>
  </div>
</div>

  </div>


  <div className="flex flex-col ml-4 mr-4">
    
  <div className="relative">
  <div className="w-9 h-12 mt-1 bg-white ml-3 md:ml-0"></div>
  <div className="absolute top-0 flex flex-col items-center md:left-[-30%]">
    <SiCss3 size={60} style={{ color: "#264de4" }} />
    <p className="mt-2">CSS</p>
  </div>
</div>

  </div>




  <div className="w-24 flex flex-col items-center">
  <SiJavascript size={60} style={{ color: "#f7df1e", backgroundColor: "black" }} />
    <p className="mt-2">JavaScript</p>
  </div>

  <div className="w-24 flex flex-col items-center">
    <SiReact size={60} style={{ color: "#149eca" }} />
    <p className="mt-2">React</p>
  </div>

  <div className="w-24 flex flex-col items-center">
    <SiNodedotjs size={60} style={{ color: "#539e43" }} />
    <p className="mt-2">Node.js</p>
  </div>

  <div className="w-24 flex flex-col items-center">
    <SiTailwindcss size={60} style={{ color: "#07b6d5" }} />
    <p className="mt-2">Tailwind</p>
  </div>
</div>

        </div>

        <div className="w-full p-4 pt-0 text-center">
          <div>
            <p className="text-lg font-bold mb-5 md:mb-8">Additional Skills</p>
          </div>

          <div className="justify-center gap-4 font-bold flex flex-no-wrap max-w-[350px] md:max-w-[500px] mx-auto">
          <div className="w-24 flex flex-col items-center">
              <SiAdobephotoshop size={30}  />
              <p className="mt-2">Photoshop</p>
            </div>

            <div className="w-24 flex flex-col items-center">
              <SiAdobeillustrator size={30} />
              <p className="mt-2">Illustrator</p>
            </div>

            <div className="w-24 flex flex-col items-center">
            <SiFigma size={30} />
              <p className="mt-2">Figma</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
