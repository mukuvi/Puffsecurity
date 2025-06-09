import React from "react";
import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/puffadders",
      label: "GitHub",
    },
    { icon: <FaTelegram />, url: "https://t.me/puffadders", label: "Telegram" },
    {
      icon: <FaDiscord />,
      url: "https://discord.gg/xqUWHBAYN9",
      label: "Discord",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/puffadders/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="glass-effect border-t border-primary-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} Puffadders Community.</span>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-xs">
            All rights reserved. Building the future, one commit at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
