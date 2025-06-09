import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="mb-8">
          <FaExclamationTriangle className="text-6xl text-red-400 mx-auto mb-6 animate-bounce" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-6 animate-fade-in-up">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Oops! Page Not Found
        </h2>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          The page you're looking for seems to have vanished into the digital void. 
          Don't worry, even the best hackers sometimes take a wrong turn!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            to="/"
            className="btn-primary flex items-center justify-center space-x-2 px-8 py-4"
          >
            <FaHome />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/community"
            className="bg-transparent border-2 border-primary-500 text-primary-400 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:text-white flex items-center justify-center space-x-2"
          >
            <span>Join Community</span>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 glass-effect rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-lg font-semibold text-white mb-3">
            Need Help?
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            If you believe this is an error, please check the URL or contact our community 
            through Discord. We're always here to help fellow developers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;