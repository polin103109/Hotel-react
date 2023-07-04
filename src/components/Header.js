import React, { useState, useEffect } from "react";
//logos
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";
const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <a href="/">
          {header ? <img src={LogoDark} /> : <img src={LogoWhite} />}
        </a>
      </div>
    </header>
  );
};
export default Header;
