import React, { useState } from "react";
import { FaLock, FaCode, FaDatabase, FaDiscord, FaGithub, FaTelegram, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const fields = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: <FaLock className="text-4xl text-red-400" />,
    description: "Protecting systems, networks and programs from digital attacks. Learn ethical hacking, penetration testing and security analysis.",
    skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "Malware Analysis", "Incident Response"],
    gradient: "from-red-500 to-pink-500",
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  },
  {
    id: "development",
    title: "Software Development",
    icon: <FaCode className="text-4xl text-purple-400" />,
    description: "Designing, coding and maintaining software applications. Master modern frameworks and development practices.",
    skills: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps", "Open Source"],
    gradient: "from-purple-500 to-indigo-500",
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  },
  {
    id: "datascience",
    title: "Data Science",
    icon: <FaDatabase className="text-4xl text-blue-400" />,
    description: "Analyzing and interpreting complex data to help inform decision-making. Work with AI, ML and big data technologies.",
    skills: ["Machine Learning", "Data Analysis", "AI Development", "Statistical Modeling", "Data Visualization"],
    gradient: "from-blue-500 to-cyan-500",
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  }
];

const benefits = [
  "Access to exclusive learning resources and tutorials",
  "Mentorship from industry professionals",
  "Collaborative projects and real-world experience",
  "Networking opportunities with like-minded individuals",
  "Career guidance and job placement assistance",
  "Regular workshops and technical sessions"
];

const JoinUs = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    field: "",
    experience: "",
    motivation: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Join the Puff Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Choose your path and start your journey with us. Hack Like There's No Tomorrow!
          </p>
        </div>

        {/* Fields Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className={`glass-effect rounded-2xl p-8 card-hover animate-fade-in-up relative overflow-hidden group cursor-pointer transition-all duration-300 ${
                selectedField === field.id ? "ring-2 ring-primary-500 shadow-2xl shadow-primary-500/25" : ""
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => setSelectedField(selectedField === field.id ? null : field.id)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {field.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{field.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{field.description}</p>
                
                {/* Skills */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {field.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discord Link */}
                <a
                  href={field.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaDiscord className="mr-2" />
                  Join Discord Channel
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-effect rounded-2xl p-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Why Join Puffadders?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Apply to Join</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Field</label>
              <select
                name="field"
                value={formData.field}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select a field</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="development">Software Development</option>
                <option value="datascience">Data Science</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Why do you want to join Puffadders?</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white resize-none"
                placeholder="Tell us about your goals and what you hope to achieve..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4 flex items-center justify-center group"
            >
              Submit Application
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-white mb-6">Connect with us on social media</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/puffadders" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://discord.gg/xqUWHBAYN9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <FaDiscord className="text-2xl" />
            </a>
            <a href="https://t.me/puffadders" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaTelegram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;