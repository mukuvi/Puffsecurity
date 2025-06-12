import React, { useState } from "react";
import {
  FaCoffee,
  FaCreditCard,
  FaMobileAlt,
  FaHeart,
  FaGithub,
  FaPaypal,
  FaBitcoin,
  FaArrowRight,
  FaUsers,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const donationTiers = [
  {
    amount: 5,
    title: "Coffee Supporter",
    icon: <FaCoffee className="text-3xl text-amber-400" />,
    description: "Buy us a coffee to fuel our late-night coding sessions",
    perks: ["Our eternal gratitude", "Supporter badge on Discord"],
  },
  {
    amount: 25,
    title: "Code Contributor",
    icon: <FaCode className="text-3xl text-blue-400" />,
    description: "Help us maintain and improve our open source projects",
    perks: [
      "All previous perks",
      "Early access to new tools",
      "Monthly newsletter",
    ],
  },
  {
    amount: 50,
    title: "Community Champion",
    icon: <FaUsers className="text-3xl text-green-400" />,
    description: "Support our community events and educational content",
    perks: [
      "All previous perks",
      "Exclusive community events",
      "Direct feedback channel",
    ],
  },
  {
    amount: 100,
    title: "Innovation Sponsor",
    icon: <FaRocket className="text-3xl text-purple-400" />,
    description: "Sponsor major features and community initiatives",
    perks: [
      "All previous perks",
      "Your name in our hall of fame",
      "Priority support",
    ],
  },
];

const paymentMethods = [
  {
    name: "PayPal",
    icon: <FaPaypal className="text-2xl" />,
    description: "Secure payment via PayPal",
    color: "hover:text-blue-500",
  },
  {
    name: "M-Pesa",
    icon: <FaMobileAlt className="text-2xl" />,
    description: "Mobile money transfer",
    color: "hover:text-green-500",
  },
  {
    name: "Crypto",
    icon: <FaBitcoin className="text-2xl" />,
    description: "Bitcoin and other cryptocurrencies",
    color: "hover:text-yellow-500",
  },
  {
    name: "GitHub Sponsors",
    icon: <FaGithub className="text-2xl" />,
    description: "Support us on GitHub Sponsors",
    color: "hover:text-gray-400",
  },
];

const impactStats = [
  { number: "50+", label: "Open Source Projects", icon: <FaCode /> },
  { number: "500+", label: "Community Members", icon: <FaUsers /> },
  { number: "1000+", label: "Hours of Free Content", icon: <FaCoffee /> },
  { number: "100+", label: "Contributors Helped", icon: <FaHeart /> },
];

const Donate = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = (method, amount = null) => {
    const donationAmount =
      amount || customAmount || (selectedTier ? selectedTier.amount : 0);

    if (!donationAmount || donationAmount <= 0) {
      alert("Please select a donation amount");
      return;
    }

    alert(
      `Thank you for choosing to donate $${donationAmount} via ${method}! Redirecting to payment...`
    );
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
            Support Our Mission
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Help us build a stronger open source community and create better
            resources for developers worldwide.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 text-center card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-primary-400 mb-3 flex justify-center text-2xl">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
            Choose Your Support Level
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className={`glass-effect rounded-2xl p-6 card-hover cursor-pointer transition-all duration-300 animate-fade-in-up ${
                  selectedTier?.amount === tier.amount
                    ? "ring-2 ring-primary-500 shadow-2xl shadow-primary-500/25"
                    : ""
                }`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                onClick={() => setSelectedTier(tier)}
              >
                <div className="text-center mb-4">{tier.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {tier.title}
                </h3>
                <div className="text-3xl font-bold gradient-text mb-4 text-center">
                  ${tier.amount}
                </div>
                <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
                  {tier.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                    Perks:
                  </h4>
                  {tier.perks.map((perk, perkIndex) => (
                    <div
                      key={perkIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                      {perk}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div
          className="glass-effect rounded-2xl p-8 mb-16 animate-fade-in-up"
          style={{ animationDelay: "1.2s" }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-6 text-center">
            Or Choose Your Own Amount
          </h2>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                $
              </span>
              <input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-4 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white text-lg"
                min="1"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div
          className="glass-effect rounded-2xl p-8 mb-16 animate-fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Choose Payment Method
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <button
                key={index}
                onClick={() => handleDonate(method.name)}
                className={`glass-effect rounded-xl p-6 card-hover transition-all duration-300 group ${method.color}`}
              >
                <div className="text-center">
                  <div className="text-gray-400 mb-4 flex justify-center transition-colors duration-300 group-hover:text-current">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {method.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* How Donations Help */}
        <div
          className="glass-effect rounded-2xl p-8 mb-16 animate-fade-in-up"
          style={{ animationDelay: "1.6s" }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
            How Your Donation Helps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Project Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Fund the development of new tools, libraries, and educational
                resources that benefit the entire community.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Education & Training
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Create free courses, workshops, and mentorship programs to help
                developers grow their skills.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Community Events
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Organize hackathons, conferences, and meetups that bring the
                community together and foster collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div
          className="text-center glass-effect rounded-2xl p-8 animate-fade-in-up"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold gradient-text mb-4">
            Every Contribution Matters
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you donate $5 or $500, your support makes a real difference
            in our ability to serve the developer community. Thank you for
            believing in our mission and helping us build a better future for
            open source!
          </p>
          <div className="flex items-center justify-center mt-6 text-red-500">
            <span className="text-white">Made by the Puffadders community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
