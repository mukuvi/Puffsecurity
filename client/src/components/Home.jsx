import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaLock, FaDatabase, FaCode, FaRocket, FaUsers, FaGithub, FaStar } from "react-icons/fa";

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
  const typedRef = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to the Puffadders Community!",
        "Hack Like There's No Tomorrow!",
        "Building the Future Together!",
        "Open Source. Open Minds. Open Possibilities."
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

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
              <span className="gradient-text" ref={typedRef}></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join a vibrant community of developers, security experts, and data scientists 
              working together to create innovative open source solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg px-8 py-4">
              Join Our Community
            </button>
            <button className="bg-transparent border-2 border-primary-500 text-primary-400 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:text-white">
              Explore Projects
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What We Do
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
                  currentIndex === index ? "ring-2 ring-primary-500 shadow-2xl shadow-primary-500/25" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center animate-float">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of developers who are already contributing to open source projects 
              and building the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-gray-500 text-gray-300 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:border-primary-500 hover:text-primary-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;