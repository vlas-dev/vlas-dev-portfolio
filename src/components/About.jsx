import React, { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

const SkillCard = ({ icon, label, color, bgColor, overlayText }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const controls = useAnimation();

  const handleCardClick = () => {
    controls
      .start({
        rotate: 360,
        transition: { duration: 0.5 },
      })
      .then(() => {
        controls.set({ rotate: 0 });
      });
  };

  const content = (
    <motion.div animate={controls} className="relative">
      {typeof icon === "string" ? (
        <img
          src={icon}
          alt={label}
          style={{
            width: 50,
            height: 40,
            objectFit: "cover",
            backgroundColor: bgColor,
          }}
        />
      ) : (
        React.createElement(icon, {
          size: 40,
          style: { color, backgroundColor: bgColor },
        })
      )}
      {overlayText && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 font-bold dark:text-white ">
          {overlayText}
        </div>
      )}
    </motion.div>
  );

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-center p-3 bg-white dark:bg-stone-900 shadow-lg hover:shadow-stone-400 dark:hover:shadow-stone-600 transition-transform-all duration-100 rounded-lg border-2 border-stone-300 dark:border-stone-400 w-32 md:w-36 text-xs md:text-sm cursor-pointer"
    >
      {content}
      <p className="mt-1 font-semibold">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 3 }}
      transition={{ duration: 0.3 }}
      id="about"
      name="/about"
      className="max-w-[900px] mx-auto flex flex-col items-center min-h-screen pt-5 pb-32"
    >
      <div className="w-full max-w-[700px] text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="px-5">
          My work consists of creating responsive web apps, as well as editing
          and designing multimedia content. With this combined skill set, I
          bring engaging user experiences to life.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-8 text-center max-w-[200px] mx-auto">
          Main Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-[650px]">
          <SkillCard icon={SiReact} label="React.js" color="#149eca" />
          <SkillCard
            icon={SiNextdotjs}
            label="Next.js"
            color="#0e0e0e dark:#eeeeee"
          />
          <SkillCard
            icon={SiJavascript}
            label="JavaScript"
            color="#f7df1e"
            bgColor="black"
          />
          <SkillCard icon={SiTypescript} label="TypeScript" color="#2f74c0" />
          <SkillCard icon={RiBearSmileFill} label="Zustand" color="#2759c6" />
          <SkillCard icon={SiTailwindcss} label="Tailwind" color="#07b6d5" />
          <SkillCard icon={SiMongodb} label="MongoDB" color="#47a248" />
          <SkillCard icon={SiNodedotjs} label="Node.js" color="#83cd29" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-5 text-center">
          Complementary Skills
        </h3>
        <div className="flex flex-wrap justify-center md:grid-cols-3 gap-4 max-w-[500px]">
          <SkillCard icon={SiPostman} label="Postman" color="#FF713E" />
          <SkillCard icon={SiGit} label="Git" color="#f34f29" />
          <SkillCard
            icon={SiLinux}
            label="Linux"
            color="#070707 dark:#dddddd"
          />
          <SkillCard
            icon={SiAdobephotoshop}
            label="Photoshop"
            color="#2A65D3"
          />
          <SkillCard
            icon={SiAdobeillustrator}
            label="Illustrator"
            color="CE5D08"
          />
          <SkillCard icon={SiFigma} label="Figma" color="red" />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-5 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center md:grid-cols-3 gap-4 max-w-[600px]">
            <SkillCard
              icon={HiOutlineChatBubbleLeft}
              label="Spanish - Native"
              overlayText="es"
            />
            <SkillCard
              icon={HiOutlineChatBubbleLeft}
              label="English - C2
      "
              overlayText="en"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
