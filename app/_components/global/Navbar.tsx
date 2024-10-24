import { Code, Home, Journey, Mail } from "@/public/svg/icons";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-20 py-3 px-2.5 rounded-2xl backdrop-blur bg-white/20 border border-white/30 flex flex-col">
        {
          // Nav Icons
        }
        <a
          href="#"
          className="w-10 h-10 fill-white stroke-white hover:bg-white/20 transition-all duration-300 p-1.5 rounded-lg mb-2"
        >
          <Home />
        </a>
        <a
          href="#"
          className="w-10 h-10 fill-white stroke-white hover:bg-white/20 transition-all duration-300 p-1.5 rounded-lg mb-2"
        >
          <Journey />
        </a>
        <a
          href="#"
          className="w-10 h-10 fill-white stroke-white hover:bg-white/20 transition-all duration-300 p-2 rounded-lg mb-1"
        >
          <Code />
        </a>
        <a
          href="#"
          className="w-10 h-10 fill-white stroke-white hover:bg-white/20 transition-all duration-300 p-2.5 rounded-lg"
        >
          <Mail />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
