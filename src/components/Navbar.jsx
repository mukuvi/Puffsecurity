import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/community", label: "Community" },
    { path: "/blog", label: "Blog" },
    { path: "/joinus", label: "Join Us" },
    { path: "/store", label: "Store" },
    { path: "/donate", label: "Donate" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-effect sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 overflow-hidden">
            <img
              src="/puffadder.jpg"
              alt="Puff Adder"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-xl font-bold gradient-text hidden sm:block">
            Puffadders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                isActive(item.path) ? "text-primary-400 bg-primary-500/20" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors duration-300"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block nav-link ${
                isActive(item.path) ? "text-primary-400 bg-primary-500/20" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
