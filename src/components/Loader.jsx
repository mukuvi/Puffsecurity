import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-dark-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">P</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4 animate-pulse">
          PUFFSECURITY ACTIVATED
        </h1>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-dark-700 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-secondary-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 animate-fade-in-up">
          Initializing secure connection...
        </p>
      </div>
    </div>
  );
};

export default Loader;