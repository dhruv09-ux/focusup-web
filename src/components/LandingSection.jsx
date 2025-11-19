import React from 'react';
import { FaPencilAlt, FaBook, FaEraser, FaPen, FaCalculator, FaRuler, FaBrain, FaMobileAlt, FaLaptop, FaBookOpen, FaGraduationCap, FaRobot } from 'react-icons/fa';

export default function LandingSection() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-pink-200 to-red-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Rest of the code stays the same */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaPencilAlt className="absolute text-red-300 opacity-20 text-6xl animate-float" style={{top: '10%', left: '10%', animationDelay: '0s'}} />
        <FaBook className="absolute text-red-300 opacity-20 text-7xl animate-float" style={{top: '20%', right: '15%', animationDelay: '1s'}} />
        <FaEraser className="absolute text-red-300 opacity-20 text-5xl animate-float" style={{bottom: '30%', left: '20%', animationDelay: '2s'}} />
        <FaPen className="absolute text-red-300 opacity-20 text-6xl animate-float" style={{bottom: '20%', right: '10%', animationDelay: '1.5s'}} />
        <FaCalculator className="absolute text-red-300 opacity-20 text-8xl animate-float" style={{top: '50%', left: '5%', animationDelay: '0.5s'}} />
        <FaRuler className="absolute text-red-300 opacity-20 text-7xl animate-float" style={{top: '60%', right: '20%', animationDelay: '2.5s'}} />
        <FaBrain className="absolute text-red-300 opacity-20 text-8xl animate-float" style={{top: '15%', left: '50%', animationDelay: '1.8s'}} />
        <FaMobileAlt className="absolute text-red-300 opacity-20 text-6xl animate-float" style={{bottom: '40%', right: '25%', animationDelay: '2.2s'}} />
        <FaLaptop className="absolute text-red-300 opacity-20 text-7xl animate-float" style={{top: '70%', left: '15%', animationDelay: '1.2s'}} />
        <FaBookOpen className="absolute text-red-300 opacity-20 text-6xl animate-float" style={{top: '35%', right: '5%', animationDelay: '0.8s'}} />
        <FaGraduationCap className="absolute text-red-300 opacity-20 text-8xl animate-float" style={{bottom: '10%', left: '35%', animationDelay: '2.8s'}} />
        <FaRobot className="absolute text-red-300 opacity-20 text-7xl animate-float" style={{top: '40%', left: '80%', animationDelay: '1.3s'}} />
      </div>

      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">
          Focus Up
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Your AI-powered exam preparation companion
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition">
          Coming Soon
        </button>
      </div>
    </div>
  );
}
