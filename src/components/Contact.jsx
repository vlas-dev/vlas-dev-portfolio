import React from "react";
import {
 
 
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";


const copyEmail = () => {
  navigator.clipboard.writeText("musiccofabian@gmail.com");
  toast.success("Email copied", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
  });
};



 


const Contact = () => {
  return (
    <div
    id="contact"
      name="/contact"
      className="flex justify-center lg:pt-14 pt-5 min-h-screen w-full text-center transition-colors duration-200"
    

    >
      <motion.div className="w-full max-w-[800px] mx-auto"
        
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{duration: 0.3 }} 
        style={{ overflowAnchor: "auto" }}
        >
        <div className="pb-5">
          <p className="text-4xl font-bold inline ">
            Contact
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center pt-8 gap-5">
            <a
              className="transition-all duration-300 ease-in-out transform  hover:text-blue-500 hover:dark:text-[#fd204f]"
              href="https://www.linkedin.com/in/musicco-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              className="transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:dark:text-[#fd204f]"
              href="https://github.com/vlas-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
            <button
              type="button"
              className="transition-all duration-300 ease-in-out transform cursor-pointer hover:text-blue-500 hover:dark:text-[#fd204f]"
              onClick={copyEmail}
            >
              <HiOutlineMail size={40} />
            </button>
          </div>
          <ToastContainer />
        </div>

        <form
          method="POST"
          action="https://getform.io/f/ff243ebd-e5c5-4af6-a8a3-27482096be97"
          className="flex flex-col items-center mx-auto pl-8 pr-8 h-screen md:h-full "
          style={{ maxWidth: "600px" }}
        >
          <input
            className="p-2 bg-stone-100 text-[#303030] placeholder-stone-400 hover:text-[#0e1621] w-full border-solid border-2 border-stone-300 rounded"
            type="text"
            placeholder="Name"
            name="name"
            style={{ outline: "none" }}
            required
          />
          <input
            className="my-4 p-2 bg-stone-100 text-[#303030] placeholder-stone-400 w-full border-solid border-2 border-stone-300 rounded"
            type="text"
            placeholder="Email"
            name="email"
            style={{ outline: "none" }}
            required
          />
          <textarea
            className="p-2 bg-stone-100 text-[#303030] placeholder-stone-400 w-full border-solid border-2 border-stone-300 rounded"
            name="message"
            rows="7"
            placeholder="Message"
            style={{ outline: "none" }}
            required
          ></textarea>
          <button className="text-stone-100  bg-blue-500 dark:bg-[#fd204f] hover:bg-blue-600 hover:dark:bg-[#911232]  hover:border-stone-600   px-5 py-3  my-5 mx-auto flex items-center rounded-full transition-colors duration-200">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
