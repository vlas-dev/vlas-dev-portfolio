import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const copyEmail = () => {
  navigator.clipboard.writeText("musiccofabian@gmail.com");
  toast.success("Email copied", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
  });
};

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-[#151617] border-t-2 border-gray-300 dark:border-[#222425] text-gray-700 dark:text-gray-100 h-40 text-center p-4 w-full sticky">
      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          className="transition-all duration-200 ease-in-out transform  hover:text-blue-500 hover:dark:text-[#fd204f]"
          href="https://www.linkedin.com/in/musicco-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          className="transition-all duration-200 ease-in-out transform hover:text-blue-500 hover:dark:text-[#fd204f]"
          href="https://github.com/vlas-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <button
          type="button"
          className="transition-all duration-200 ease-in-out transform cursor-pointer hover:text-blue-500 hover:dark:text-[#fd204f]"
          onClick={copyEmail}
        >
          <HiOutlineMail size={40} />
        </button>

        <ToastContainer />
      </div>
      <p className="mt-4">
        © {new Date().getFullYear()} | Coded and designed by Fabian. All lefts
        reserved.
      </p>
    </footer>
  );
}
