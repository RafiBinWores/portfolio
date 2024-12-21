import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [navToggle, setNavToggle] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 lg:top-[35px] left-0 z-50 w-full">
      <nav className="flex items-center justify-between font-workSans h-[80px] lg:h-[100px] mx-auto lg:rounded-md bg-white/10 container px-[30px]">
        {/* Nav Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="size-12 lg:size-auto"
            src="/logo.png"
            alt="Avatar"
          />
          <p className="text-2xl lg:text-[32px] font-semibold text-transparent bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
            Kahafil Ora.
          </p>
        </Link>

        {/* Nav Links */}
        <div className="hidden gap-12 text-xl font-medium text-white lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(index)}
              className={`py-1 duration-300 hover:text-primary-300 hover:custom-gradient ${
                activeLink === index ? "custom-gradient text-primary-300" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Nav Button */}
        <a
          href=""
          className="lg:flex hidden items-center gap-3 text-xl font-medium text-white bg-gradient-to-r from-primary-600 to-primary-300 rounded-md py-2.5 px-5 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-primary-300 hover:to-primary-600"
        >
          Contact
          <FiArrowUpRight />
        </a>
        
        {/* Menu Icon */}
        <button
          onClick={() => {
            setNavToggle((prev) => !prev);
          }}
          className="lg:hidden"
        >
          <CgMenuRight className="text-3xl text-white" />
        </button>

        {/* Small and medium device nav sidebar */}
        <div
          className={`fixed bg-black/50 h-full w-screen backdrop-blur-sm top-0 right-0 transition-all z-50 ${
            navToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-0 left-0 z-20 flex flex-col w-3/5 h-screen gap-8 p-8 text-black bg-white">
            <button
              onClick={() => {
                setNavToggle((prev) => !prev);
              }}
            >
              <RxCross2 className="mb-8 text-3xl text-primary-700" />
            </button>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setNavToggle(false)}
                className="font-bold text-primary-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
