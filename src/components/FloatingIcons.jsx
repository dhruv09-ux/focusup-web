import React from 'react';
import { FaComments, FaQuestionCircle } from 'react-icons/fa';

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <button
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110"
        aria-label="Chat with us"
      >
        <FaComments className="text-2xl" />
      </button>
      <button
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110"
        aria-label="Help"
      >
        <FaQuestionCircle className="text-2xl" />
      </button>
    </div>
  );
}
