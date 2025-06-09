import React from "react";
import { toast } from "react-toastify";
import { FaCoffee, FaCreditCard, FaMobileAlt, FaHeart, FaGift, FaHandHoldingHeart } from "react-icons/fa";

const donationOptions = [
  {
    amount: 5,
    title: "Coffee",
    description: "Buy us a coffee to fuel late-night coding sessions",
    icon: <FaCoffee className="text-3xl" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    amount: 15,
    title: "Lunch",
    description: "Support our team with a hearty meal",
    icon: <FaGift className="text-3xl" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    amount: 50,
    title: "Supporter",
    description: "Become a valued supporter of our mission",
    icon: <FaHeart className="text-3xl" />,
    color: "from-red-500 to-pink-500"
  },
  {
    amount: 100,
    title: "Champion",
    description: "Champion our open source initiatives",
    icon: <FaHandHoldingHeart className="text-3xl" />,
    color: "from-purple-500 to-indigo-500"
  }
];

const paymentMethods = [
  {
    name: "PayPal",
    icon: <FaCreditCard className="text-2xl" />,
    description: "Secure payment via PayPal",
    color: "hover:bg-blue-500/20 hover:border-blue-500"
  },
  {
    name: "M-Pesa",
    icon: <FaMobileAlt className="text-2xl" />,
    description: "Mobile payment via M-Pesa",
    color: "hover:bg-green-500/20 hover:border-green-500"
  }
];

const Donate = () => {
  const handleDonate = (method, amount = null) => {
    const message = amount 
      ? `Thank you for choosing to donate $${amount} via ${method}!`
      : `Thank you for choosing to donate via ${method}!`;
    
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Buy Us A Coffee
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your contributions help us keep going and support our open source mission. 
            Every donation, no matter how small, makes a difference in our community!
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 card-hover group text-center animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-primary-400 mb-4 flex justify-center animate-float">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ${option.amount}
                </h3>
                <h4 className="text-lg font-semibold text-primary-400 mb-3">
                  {option.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {option.description}
                </p>
                <button
                  onClick={() => handleDonate("PayPal", option.amount)}
                  className="btn-primary w-full group-hover:shadow-xl group-hover:shadow-primary-500/30"
                >
                  Donate ${option.amount}
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="glass-effect rounded-2xl p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-center gradient-text mb-8">
            Choose Your Payment Method
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <button
                key={index}
                onClick={() => handleDonate(method.name)}
                className={`glass-effect border border-gray-600 rounded-xl p-6 transition-all duration-300 ${method.color} group`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-4xl mb-4">☕</div>
          <h2 className="text-2xl font-bold gradient-text mb-4">
            Thank You for Your Support!
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every contribution, no matter how small, helps us maintain our servers, 
            fund community events, and continue building amazing open source projects. 
            You're not just buying us coffee – you're investing in the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <FaHeart className="text-red-400" />
              <span>Community Driven</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🚀</span>
              <span>Open Source</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🌟</span>
              <span>Transparent</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;