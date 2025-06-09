import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Store from "./components/Store";
import JoinUs from "./components/JoinUs";
import NotFound from "./components/NotFound";
import ParticleBackground from "./components/ParticleBackground";
import HackerTerminal from "./components/HackerTerminal";
import MatrixRain from "./components/MatrixRain";
import FloatingActionButton from "./components/FloatingActionButton";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  setTimeout(() => setLoading(false), 2000);

  return (
    <Router>
      {loading && <Loader />}
      
      {/* Background Effects */}
      <ParticleBackground />
      <MatrixRain isActive={matrixActive} />
      
      <div className="min-h-screen flex flex-col relative z-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/store" element={<Store />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Interactive Elements */}
      <FloatingActionButton 
        onTerminalOpen={() => setTerminalOpen(true)}
        onMatrixToggle={() => setMatrixActive(!matrixActive)}
        matrixActive={matrixActive}
      />
      
      <HackerTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
};

export default App;