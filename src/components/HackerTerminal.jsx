import React, { useState, useEffect, useRef } from 'react';
import { FaTerminal, FaTimes, FaMinusSquare } from 'react-icons/fa';

const HackerTerminal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'Puffadders Terminal v2.0.1' },
    { type: 'system', text: 'Type "help" for available commands' },
    { type: 'prompt', text: 'puff@security:~$ ' }
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  hack        - Start hacking simulation',
      '  matrix      - Enter the matrix',
      '  scan        - Network scan',
      '  exploit     - Run exploit',
      '  clear       - Clear terminal',
      '  whoami      - Display user info',
      '  exit        - Close terminal'
    ],
    hack: () => {
      const targets = ['192.168.1.1', '10.0.0.1', '172.16.0.1'];
      const target = targets[Math.floor(Math.random() * targets.length)];
      return [
        `Initiating hack on ${target}...`,
        'Scanning for vulnerabilities...',
        'Found SQL injection vulnerability!',
        'Exploiting database...',
        'Access granted! 🎯',
        'Data extracted successfully!'
      ];
    },
    matrix: () => [
      'Entering the matrix...',
      '01001000 01100001 01100011 01101011',
      'Reality.exe has stopped working',
      'Welcome to the real world, Neo! 💊'
    ],
    scan: () => [
      'Starting network scan...',
      'Host discovery in progress...',
      'Found 42 active hosts',
      'Vulnerability assessment complete',
      'Critical vulnerabilities detected! ⚠️'
    ],
    exploit: () => [
      'Loading exploit framework...',
      'Selecting payload...',
      'Establishing reverse shell...',
      'Shell access obtained! 🚀',
      'You are now in the mainframe!'
    ],
    whoami: () => [
      'User: elite_hacker',
      'Group: puffadders',
      'Clearance: TOP SECRET',
      'Skills: Legendary 🔥'
    ],
    clear: () => {
      setOutput([{ type: 'prompt', text: 'puff@security:~$ ' }]);
      return [];
    }
  };

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === 'exit') {
      onClose();
      return;
    }

    const newOutput = [...output];
    newOutput.push({ type: 'input', text: `puff@security:~$ ${cmd}` });

    if (commands[command]) {
      const result = commands[command]();
      if (result.length > 0) {
        result.forEach(line => {
          newOutput.push({ type: 'output', text: line });
        });
      }
    } else if (command) {
      newOutput.push({ type: 'error', text: `Command not found: ${command}` });
    }

    newOutput.push({ type: 'prompt', text: 'puff@security:~$ ' });
    setOutput(newOutput);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
      isMinimized ? 'w-64 h-12' : 'w-96 h-80'
    }`}>
      <div className="bg-black border border-green-500 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-green-500">
          <div className="flex items-center space-x-2">
            <FaTerminal className="text-green-400" />
            <span className="text-green-400 font-mono text-sm">Hacker Terminal</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaMinusSquare size={14} />
            </button>
            <button
              onClick={onClose}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        {!isMinimized && (
          <div className="h-64 flex flex-col">
            <div
              ref={terminalRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm"
            >
              {output.map((line, index) => (
                <div
                  key={index}
                  className={`${
                    line.type === 'system' ? 'text-cyan-400' :
                    line.type === 'input' ? 'text-white' :
                    line.type === 'output' ? 'text-green-400' :
                    line.type === 'error' ? 'text-red-400' :
                    'text-green-400'
                  } ${line.type === 'prompt' ? 'inline' : 'block'}`}
                >
                  {line.text}
                </div>
              ))}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent text-white font-mono outline-none border-none w-full"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackerTerminal;