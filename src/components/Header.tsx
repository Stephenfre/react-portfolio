import { BriefcaseBusiness, FileUser, Home, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6  border-b border-gray-100 bg-[#fefef5] dark:bg-zinc-900 dark:text-white dark:border-zinc-800">
      {/* Left side */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-dark-gray">&lt;KEN&gt;</div> */}
        {/* Email */}
        <div className="flex items-center space-x-2 text-dark-gray dark:text-white">
          <Mail />
          <span className="text-sm">stephen.freeman.dev@gmail.com</span>
        </div>
      </div>

      {/* Right side - Navigation */}
      <nav className="flex items-center space-x-8">
        <Link
          to={"/"}
          className="flex  items-center space-x-2 text-dark-gray hover:text-accent-orange transition-colors dark:text-white dark:hover:text-accent-orange"
        >
          <Home />
          <span className="text-md font-medium">Home</span>
        </Link>
        <Link
          to={"/work"}
          className="flex  items-center space-x-2 text-dark-gray hover:text-accent-orange transition-colors dark:text-white dark:hover:text-accent-orange"
        >
          <BriefcaseBusiness />
          <span className="text-md font-medium">Works</span>
        </Link>

        <a
          href="/Stephen Resume_0825.pdf"
          onClick={(e) => {
            e.preventDefault();
            const newWindow = window.open("/Stephen Resume_0825.pdf");
            if (newWindow) {
              newWindow.addEventListener("load", () => newWindow.print());
            }
          }}
          className="flex items-center space-x-2 text-dark-gray hover:text-accent-orange transition-colors dark:text-white dark:hover:text-accent-orange"
        >
          <FileUser />
          <span className="text-sm font-medium">Resume</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
