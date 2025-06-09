import React, { useState, useEffect } from 'react';

const GlitchText = ({ children, className = '', glitchIntensity = 'medium' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const glitchStyles = {
    low: 'animate-pulse',
    medium: isGlitching ? 'animate-bounce' : '',
    high: isGlitching ? 'animate-ping' : ''
  };

  return (
    <span 
      className={`${className} ${glitchStyles[glitchIntensity]} transition-all duration-200 ${
        isGlitching ? 'text-shadow-lg filter hue-rotate-180' : ''
      }`}
      style={{
        textShadow: isGlitching ? '2px 2px 0px #ff0000, -2px -2px 0px #00ff00' : 'none'
      }}
    >
      {children}
    </span>
  );
};

export default GlitchText;