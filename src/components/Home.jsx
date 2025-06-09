import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaLock, FaDatabase, FaCode, FaRocket, FaUsers, FaGithub, FaStar } from "react-icons/fa";
import GlitchText from "./GlitchText";

const services = [
  {
    title: "Cybersecurity",
    description:
      "Protecting digital assets with cutting-edge security measures and ethical hacking practices.",
    icon: <FaLock className="text-6xl mb-4 text-primary-400" />,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using advanced analytics and machine learning.",
    icon: <FaDatabase className="text-6xl mb-4 text-secondary-400" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Software Development",
    description: "Building robust, scalable applications with modern technologies and best practices.",
    icon: <FaCode className="text-6xl mb-4 text-accent-400" />,
    gradient: "from-purple-500 to-indigo-500",
  },
];

const stats = [
  { icon: <FaUsers className="text-3xl" />, number: "500+", label: "Community Members" },
  { icon: <FaGithub className="text-3xl" />, number: "50+", label: "Open Source Projects" },
  { icon: <FaRocket className="text-3xl" />, number: "100+", label: "Contributions" },
  { icon: <FaStar className="text-3xl" />, number: "1K+", label: "GitHub Stars" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedRef = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to the <span style='color: #60a5fa;'>Puffadders</span> Community!",
        "Hack Like There's <span style='color: #f59e0b;'>No Tomorrow!</span>",
        "Building the <span style='color: #10b981;'>Future</span> Together!",
        "Open Source. Open Minds. <span style='color: #8b5cf6;'>Open Possibilities.</span>"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    };

    if (typedRef.current) {
      new Typed(typedRef.current, options);
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive cursor effect */}
      <div 
        className="fixed w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1.5)'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-8 h-8 border-2 border-primary-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-secondary-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent-400 transform rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Heading with Glitch Effect */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
              <GlitchText className="gradient-text" glitchIntensity="medium">
                <span ref={typedRef}></span>
              </GlitchText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join a vibrant community of developers, security experts, and data scientists 
              working together to create innovative open source solutions.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg px-8 py-4 relative overflow-hidden group">
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button className="bg-transparent border-2 border-primary-500 text-primary-400 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1">
              Explore Projects
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl p-6 card-hover animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              <GlitchText glitchIntensity="low">What We Do</GlitchText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our core areas of expertise and how we're making an impact in the tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-effect rounded-2xl p-8 card-hover animate-fade-in-up relative overflow-hidden group ${
                  currentIndex === index ? "ring-2 ring-primary-500 shadow-2xl shadow-primary-500/25 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center animate-float group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                <GlitchText glitchIntensity="high">Ready to Make an Impact?</GlitchText>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of developers who are already contributing to open source projects 
                and building the future of technology together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4 relative overflow-hidden group">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="bg-transparent border-2 border-gray-500 text-gray-300 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:border-primary-500 hover:text-primary-400 hover:shadow-lg hover:shadow-primary-500/25">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;