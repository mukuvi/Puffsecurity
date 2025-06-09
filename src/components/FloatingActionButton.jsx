import React, { useState } from 'react';
import { FaTerminal, FaCode, FaRocket, FaBolt } from 'react-icons/fa';

const FloatingActionButton = ({ onTerminalOpen, onMatrixToggle, matrixActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <FaTerminal />,
      label: 'Hacker Terminal',
      onClick: onTerminalOpen,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <FaCode />,
      label: 'Matrix Mode',
      onClick: onMatrixToggle,
      color: matrixActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <FaRocket />,
      label: 'Boost Mode',
      onClick: () => {
        document.body.style.animation = 'shake 0.5s';
        setTimeout(() => document.body.style.animation = '', 500);
      },
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Action Buttons */}
      <div className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group`}
            title={action.label}
          >
            {action.icon}
            <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <FaBolt size={20} />
      </button>
    </div>
  );
};

export default FloatingActionButton;