import { useState } from "react";
import logo_12 from "../assets/logo_12.svg"; // Import the logo
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "zaman", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Define animation variants for the navbar
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } },
  };

  return (
    <motion.header
      className="bg-white mx-auto container font-exo" // Add glass effect
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <nav className="p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-start">
          <a href="#" className="">
            <img src={logo_12} alt="Logo" className="h-20" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className=" text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <a
            href="#"
            className="text-white bg-black  px-4 py-2 rounded-md text-lg hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 p-2 rounded-md focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 font-bold" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6 font-bold" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-[6rem] p-7 mx-auto container z-10 bg-slate-300"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img src={logo_12} alt="Logo" className="" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 p-2 rounded-md"
            >
            </button>
          </div>

          <div className="mt-14">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 text-base py-2 hover:bg-gray-100 rounded-md px-4"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4">
              <a
                href="#"
                className="block w-full text-center text-white bg-black  px-4 py-2 rounded-md text-sm hover:bg-blue-700"
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
