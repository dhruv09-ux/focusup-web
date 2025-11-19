import React from 'react';

export default function AboutSection() {
  return (
    <div id="about" className="py-16 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
          About Focus Up
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Focus Up is an AI-powered exam preparation platform designed to help students achieve their academic goals through personalized study plans, intelligent PDF analysis, and progress tracking.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Our mission is to make studying more efficient, effective, and enjoyable for every student.
        </p>
      </div>
    </div>
  );
}
