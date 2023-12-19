import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { Squash as Hamburger } from "hamburger-react";
import LogoBlue from "../assets/logoBlue.png";
import LogoRed from "../assets/logoRed.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
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

    // Map the section URLs to their corresponding IDs
    const sectionURLs = {
      "/": "home",
      "/about": "about",
      "/projects": "projects",
      "/contact": "contact",
    };

    setActiveSection(sectionURLs[path]); // Set the active section based on the current URL
  }, [location]);

  return (
    <div className="fixed w-full h-[65px] bg-gray-100 dark:bg-[#151617] nav-index border-b-2 border-gray-200 dark:border-[#222425] transition-colors duration-200 ">
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
        <ul className="hidden lg:flex flex-grow justify-center text-gray-600 dark:text-gray-300 text-lg">
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
        <li className="ml-4 mt-2 mb-2 md:ml-2 md:mt-3 block lg:hidden">
          <ScrollLink  to="home"
            smooth={true}
            offset={-70}
            duration={500}>
            <img
              src={darkMode ? LogoRed : LogoBlue}
              alt=""
              style={{ width: "40px" }}
            />
          </ScrollLink>
        </li>
        <button
          className="ml-auto p-2 focus:outline-none  mt-2 md:mt-0 "
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <div className="flex items-center justify-center">
              <IoIosSunny className="md:h-6 md:w-6 h-8 w-8 text-gray-300 hover:text-blue-500  hover:dark:text-[#fd204f] transition-colors duration-200" />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <IoIosMoon className="md:h-6 md:w-6 h-8 w-8 text-gray-500  hover:text-blue-500 hover:dark:text-[#fd204f] transition-colors duration-200" />
            </div>
          )}
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="hamburger-index lg:hidden mt-2 mr-4"
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
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200`}
            >
              <FaHome className="inline-block mr-2 pb-1" size={30} />
              Home
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
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200`}
            >
              <FaUser className="inline-block mr-2 pb-1" size={30} />
              About
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
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200`}
            >
              <FaBriefcase className="inline-block mr-2 pb-1" size={30} />
              Projects
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
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
          >
            <span
              className={`flex items-center transition-colors duration-200`}
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
