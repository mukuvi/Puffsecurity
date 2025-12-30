import React from "react";
import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="text-6xl" />,
    name: "GitHub",
    description: "Explore our repositories",
    url: "https://github.com/puffadders",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-500/20",
  },
  {
    icon: <FaTelegram className="text-6xl" />,
    name: "Telegram",
    description: "Join our chat",
    url: "https://t.me/puffadders",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/20",
  },
  {
    icon: <FaDiscord className="text-6xl" />,
    name: "Discord",
    description: "Connect with the community",
    url: "https://discord.gg/SdnKjuN2Ny",
    color: "hover:text-indigo-400",
    bgColor: "hover:bg-indigo-500/20",
  },
  {
    icon: <FaLinkedin className="text-6xl" />,
    name: "LinkedIn",
    description: "Professional network",
    url: "https://www.linkedin.com/company/puffadders",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-600/20",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fade-in-up">
            Join the Puff Team
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hack Like There's No Tomorrow!
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Connect with like-minded developers, contribute to open source projects 
            and be part of a community that's shaping the future of technology.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-effect rounded-2xl p-8 card-hover group transition-all duration-300 ${social.bgColor} animate-fade-in-up`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`text-gray-400 transition-colors duration-300 ${social.color} mb-4 flex justify-center`}>
                {social.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {social.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {social.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Join Our Community?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Learn & Grow</h4>
              <p className="text-gray-300 text-sm">
                Access to learning resources, mentorship and collaborative projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary-400 mb-2">Network</h4>
              <p className="text-gray-300 text-sm">
                Connect with professionals from cybersecurity, data science and development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-2">Contribute</h4>
              <p className="text-gray-300 text-sm">
                Make meaningful contributions to open source projects that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;