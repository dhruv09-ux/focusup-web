import React, { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="features" className="min-h-screen bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        Launching Soon
      </h2>
      
      <div className="flex justify-center gap-8 mb-16">
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">{timeLeft.days}</div>
          <div className="text-gray-600">Days</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">{timeLeft.hours}</div>
          <div className="text-gray-600">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">{timeLeft.minutes}</div>
          <div className="text-gray-600">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">{timeLeft.seconds}</div>
          <div className="text-gray-600">Seconds</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-red-600 mb-3">AI Study Assistant</h3>
          <p className="text-gray-700 text-sm">Get personalized study plans powered by AI</p>
        </div>
        <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-red-600 mb-3">PDF Analysis</h3>
          <p className="text-gray-700 text-sm">Upload PDFs and get instant AI insights</p>
        </div>
        <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-red-600 mb-3">Progress Tracking</h3>
          <p className="text-gray-700 text-sm">Monitor your study progress and goals</p>
        </div>
        <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-red-600 mb-3">Personalized Experience</h3>
          <p className="text-gray-700 text-sm">Customized study sessions tailored to your learning style</p>
        </div>
        <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-red-600 mb-3">Your Study Goals</h3>
          <p className="text-gray-700 text-sm">Set and achieve goals designed just for you</p>
        </div>
      </div>
    </div>
  );
}
