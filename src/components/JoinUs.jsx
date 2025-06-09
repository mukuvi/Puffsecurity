import React from "react";
import { FaShieldAlt, FaCode, FaChartBar, FaArrowRight, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";

const fields = [
  {
    title: "Cybersecurity",
    description: "Protecting systems, networks, and programs from digital attacks. Learn ethical hacking, penetration testing, and security analysis.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "from-red-500 to-pink-500",
    skills: ["Ethical Hacking", "Penetration Testing", "Security Analysis", "Incident Response"],
    url: "https://discord.com/invite/KgygxrfGNH"
  },
  {
    title: "Software Development",
    description: "Designing, coding, and maintaining software applications. Master modern frameworks and development practices.",
    icon: <FaCode className="text-4xl" />,
    color: "from-blue-500 to-cyan-500",
    skills: ["Full Stack Development", "DevOps", "Cloud Computing", "API Design"],
    url: "https://discord.com/invite/KgygxrfGNH"
  },
  {
    title: "Data Science",
    description: "Analyzing and interpreting complex data to help inform decision-making. Dive into machine learning and AI.",
    icon: <FaChartBar className="text-4xl" />,
    color: "from-purple-500 to-indigo-500",
    skills: ["Machine Learning", "Data Analysis", "Statistical Modeling", "AI Development"],
    url: "https://discord.com/invite/KgygxrfGNH"
  },
];

const benefits = [
  {
    icon: <FaUsers className="text-3xl text-primary-400" />,
    title: "Community Support",
    description: "Connect with like-minded individuals and get help from experienced mentors."
  },
  {
    icon: <FaRocket className="text-3xl text-secondary-400" />,
    title: "Real Projects",
    description: "Work on actual open source projects that make a real impact in the tech world."
  },
  {
    icon: <FaLightbulb className="text-3xl text-accent-400" />,
    title: "Continuous Learning",
    description: "Access to workshops, tutorials, and learning resources to advance your skills."
  },
];

const JoinUs = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Join Our Mission
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hack Like There's No Tomorrow!
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Choose your path and become part of a community that's building the future of technology. 
            Whether you're a beginner or an expert, there's a place for you here.
          </p>
        </div>

        {/* Fields Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {fields.map((field, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 card-hover group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-primary-400 mb-6 flex justify-center animate-float">
                  {field.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-primary-400 transition-colors duration-300">
                  {field.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {field.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {field.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={field.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center space-x-2 group-hover:shadow-xl group-hover:shadow-primary-500/30"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-effect rounded-3xl p-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12">
            Why Join Puffadders?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <a
              href="https://discord.com/invite/KgygxrfGNH"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Join Our Discord</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;