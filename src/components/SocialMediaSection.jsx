import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialMediaSection() {
  const socialIcons = [
    { icon: <FaFacebook />, label: 'Facebook' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
    { icon: <FaGithub />, label: 'GitHub' },
  ];

  return (
    <div className="py-16 bg-pink-50">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Follow Us
      </h2>
      <div className="flex justify-center space-x-8">
        {socialIcons.map(({ icon, label }) => (
          <div
            key={label}
            className="text-red-600 text-4xl hover:text-red-800 transition-colors hover:scale-110 transform cursor-pointer"
            aria-label={label}
          >
            {icon}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600 mt-8">
        © 2025 Focus Up. All rights reserved.
      </p>
    </div>
  );
}
