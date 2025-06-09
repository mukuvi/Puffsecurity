import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaLock, FaDatabase, FaCode, FaRocket, FaUsers, FaGithub } from "react-icons/fa";

const services = [
  {
    title: "Cybersecurity",
    description:
      "Protecting digital assets with cutting-edge security measures and ethical hacking practices.",
    icon: <FaLock size={80} />,
  },
  {
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using advanced analytics and machine learning.",
    icon: <FaDatabase size={80} />,
  },
  {
    title: "Software Development",
    description: "Building robust, scalable applications with modern technologies and best practices.",
    icon: <FaCode size={80} />,
  },
];

const stats = [
  { icon: <FaUsers size={40} />, number: "500+", label: "Community Members" },
  { icon: <FaGithub size={40} />, number: "50+", label: "Open Source Projects" },
  { icon: <FaRocket size={40} />, number: "100+", label: "Contributions" },
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
    <div className="home">
      <div className="hero-section">
        <h1 className="typed" ref={typedRef}></h1>
        <p className="hero-subtitle">
          Join a vibrant community of developers, security experts, and data scientists 
          working together to create innovative open source solutions.
        </p>
        
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-section">
        <h2 className="services-title">What We Do</h2>
        <div className="team-pages">
          {services.map((service, index) => (
            <div
              key={index}
              className={`team-card ${currentIndex === index ? "active" : ""}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;