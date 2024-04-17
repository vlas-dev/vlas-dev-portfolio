import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { Squash as Hamburger } from "hamburger-react";
import LogoBlue from "/images/assets/logoBlue.png";
import LogoRed from "/images/assets/logoRed.png";

const Navbar = () => {
  // Initialize darkMode state from localStorage or system preferences
  const [darkMode, setDarkMode] = useState(() => {
    const localSetting = localStorage.getItem("darkMode");
    return localSetting ? localSetting === "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [nav, setNav] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isClickable, setIsClickable] = useState(true);

  const handleClick = (section) => {
    if (isClickable) {
      setNav(false);
      setActiveSection(section);
      setIsClickable(false);
      setTimeout(() => {
        setIsClickable(true);
      }, 300);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const path = location.pathname; // Get the current URL path
    const sectionURLs = {
      "/": "home",
      "/projects": "projects",
      "/about": "about",
      "/contact": "contact",
    };
    setActiveSection(sectionURLs[path]); // Set the active section based on the current URL
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      if (isLargeScreen) {
        const path = location.pathname;
        const sectionURLs = { "/": "home", "/projects": "projects", "/about": "about", "/contact": "contact" };
        setActiveSection(sectionURLs[path]);
        return;
      }

      const sections = ["home", "projects", "about", "contact"];
      for (let section of sections) {
        const sectionEl = document.getElementById(section);
        if (sectionEl) {
          const bounds = sectionEl.getBoundingClientRect();
          if (bounds.top <= window.innerHeight / 2 && bounds.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection, location.pathname]);

  return (
    <div className="sticky top-0 w-full h-[65px] bg-stone-100 dark:bg-stone-900 nav-index border-b-2 border-stone-200 dark:border-stone-700 ">
      <div className="max-w-[800px] mx-auto flex justify-between items-center">
        <div className="ml-4 mt-2 mb-2 md:ml-2 md:mt-3 hidden lg:block">
          <RouterLink to="/" onClick={() => handleClick("home")}>
            <img
              src={darkMode ? LogoRed : LogoBlue}
              alt=""
              style={{ width: "40px" }}
            />{" "}
          </RouterLink>
        </div>

        <ul className="hidden lg:flex flex-grow justify-center text-lg">
          <li>
            <RouterLink
              to="/"
              onClick={() => handleClick("home")}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "home"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaHome className="inline-block pb-1 mr-2" size={20} />
                Home
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/projects"
              onClick={() => handleClick("projects")}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "projects"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaBriefcase className="inline-block pb-1 mr-2" size={20} />
                Projects
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              onClick={() => handleClick("about")}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "about"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaUser className="inline-block pb-1 mr-2" size={20} />
                About
              </span>
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/contact"
              onClick={() => handleClick("contact")}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "contact"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaPhone className="inline-block pb-1 mr-2" size={20} />
                Contact
              </span>
            </RouterLink>
          </li>
        </ul>

        {/* MD SCREENS BUTTONS */}

        <li className="ml-4 mt-2 mb-2 md:ml-2 md:mt-3 block lg:hidden">
          <ScrollLink to="home" smooth={true} offset={-70} duration={500}>
            <img
              src={darkMode ? LogoRed : LogoBlue}
              alt=""
              style={{ width: "40px" }}
            />
          </ScrollLink>
        </li>

        <ul className="hidden md:flex lg:hidden flex-grow justify-center text-gray-600 dark:text-gray-300 text-lg">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "home"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaHome className="inline-block pb-1 mr-2" size={20} />
                Home
              </span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "projects"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaBriefcase className="inline-block pb-1 mr-2" size={20} />
                Projects
              </span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "about"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaUser className="inline-block pb-1 mr-2" size={20} />
                About
              </span>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              style={{ pointerEvents: isClickable ? "auto" : "none" }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === "contact"
                    ? "text-blue-500 dark:text-[#fd204f]"
                    : ""
                }`}
              >
                <FaPhone className="inline-block pb-1 mr-2" size={20} />
                Contact
              </span>
            </ScrollLink>
          </li>
        </ul>

        <button
          className="ml-auto lg:p-2 focus:outline-none  md:mt-0 "
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <div className="flex items-center justify-center p-3 mt-2 md:p-0 md:mt-0 md:mr-10 lg:mr-0">
              <IoIosSunny className="h-8 w-8 text-gray-300 hover:text-blue-500  hover:dark:text-[#fd204f] transition-colors duration-200" />
            </div>
          ) : (
            <div className="flex items-center justify-center p-3 mt-2 md:p-0 md:mt-0 md:mr-10 lg:mr-0">
              <IoIosMoon className="h-8 w-8 text-gray-500  hover:text-blue-500 hover:dark:text-[#fd204f] transition-colors duration-200" />
            </div>
          )}
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="hamburger-index md:hidden mt-2 mr-4"
        >
          <Hamburger
            color={darkMode ? "rgb(209 213 219)" : "rgb(107 114 128)"}
            size={30}
            toggled={nav}
            toggle={setNav}
            onToggle={(toggled) => setNav(toggled ? "times" : "hamburger")}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black bg-opacity-50 z-40 transition-opacity ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNav(false)}
      ></div>
      <ul
        className={`lg:hidden fixed top-0 right-0 h-screen px-10 bg-white dark:bg-[#181a1b] flex flex-col justify-center z-50  text-gray-600 dark:text-gray-300 transform  ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick("home")}
            className="ml-16 mr-20 text-3xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200 ${
                activeSection === "home"
                  ? "text-blue-500 dark:text-[#fd204f]"
                  : ""
              }`}
            >
              <FaHome className="inline-block mr-2 pb-1" size={30} />
              Home
            </span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick("projects")}
            className="ml-16 mr-20 text-3xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200 ${
                activeSection === "projects"
                  ? "text-blue-500 dark:text-[#fd204f]"
                  : ""
              }`}
            >
              <FaBriefcase className="inline-block mr-2 pb-1" size={30} />
              Projects
            </span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick("about")}
            className="ml-16 mr-20 text-3xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200 ${
                activeSection === "about"
                  ? "text-blue-500 dark:text-[#fd204f]"
                  : ""
              }`}
            >
              <FaUser className="inline-block mr-2 pb-1" size={30} />
              About
            </span>
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick("contact")}
            className="ml-16 mr-20 text-3xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200 ${
                activeSection === "contact"
                  ? "text-blue-500 dark:text-[#fd204f]"
                  : ""
              }`}
            >
              <FaPhone className="inline-block mr-2 pb-1" size={30} />
              Contact
            </span>
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
