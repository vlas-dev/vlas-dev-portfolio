import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

const SkillCard = ({ icon, label, color, bgColor }) => (
  // Reduced padding and icon size for smaller cards
  <div className="flex flex-col items-center p-3 bg-white dark:bg-[#151617] shadow-lg rounded-lg" style={{ width: 'auto',flex: '0 0 100px' }}>
    {React.createElement(icon, { size: 40, style: { color, backgroundColor: bgColor } })}
    <p className="mt-1 font-semibold">{label}</p>
  </div>
);

const About = () => {
  return (
    <div
      id="about"
      name="/about"
      className="flex flex-col justify-center items-center min-h-screen lg:bg-gray-100 lg:dark:bg-[#181a1b] text-[#444440] dark:text-gray-300 transition-colors duration-200 pt-5 md:pt-0 lg:pt-20 pb-10 "
    >
      <motion.div
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full max-w-[600px]  text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>
            My work consists in creating web apps mainly using React, as well
            as editing and designing multimedia content. With this combined
            skill set, I try to bring engaging user experiences to life.
          </p>
        </div>

        <div className="mt-10 w-[400px] mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Main Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard icon={SiHtml5} label="HTML" color="#e44d26" />
            <SkillCard icon={SiCss3} label="CSS" color="#264de4" />
            <SkillCard icon={SiJavascript} label="JavaScript" color="#f7df1e" bgColor="black" />
            <SkillCard icon={SiReact} label="React" color="#149eca" />
            <SkillCard icon={SiNodedotjs} label="Node.js" color="#539e43" />
            <SkillCard icon={SiTailwindcss} label="Tailwind" color="#07b6d5" />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-5 text-center">Additional Skills</h3>
          <div className="flex justify-center gap-4">
          <SkillCard icon={SiAdobephotoshop} label="Photoshop" color="#31A8FF" /> 
    <SkillCard icon={SiAdobeillustrator} label="Illustrator" color="orange" />
            <SkillCard icon={SiFigma} label="Figma" color="red" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
