import React, { useState } from 'react';
import { FaComments, FaQuestionCircle } from 'react-icons/fa';

export default function FloatingIcons() {
  const [showChat, setShowChat] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      {/* Floating icons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          aria-label="Chat with us"
          onClick={() => setShowChat(true)}
        >
          <FaComments className="text-2xl" />
        </button>
        <button
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          aria-label="Help"
          onClick={() => setShowHelp(true)}
        >
          <FaQuestionCircle className="text-2xl" />
        </button>
      </div>

      {/* Chat Pop-up */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-6 m-8 max-w-sm w-full relative">
            <h2 className="text-xl font-bold text-red-600 mb-2">Welcome!</h2>
            <p className="text-gray-700 mb-2">Hi! How can we help you?</p>
            <input
              type="text"
              placeholder="Type your message..."
              className="border px-3 py-2 w-full rounded-lg mb-3"
              disabled
            />
            <div className="mb-4">
              <a
                href="mailto:focusup@email.com"
                className="text-red-600 underline mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Support
              </a>
              <a
                href="#resources"
                className="text-red-600 underline"
              >
                Resources
              </a>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Live chat & FAQ bot coming soon!
            </p>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg mt-2 float-right hover:bg-red-700"
              onClick={() => setShowChat(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Help Pop-up */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-6 m-8 max-w-sm w-full relative">
            <h2 className="text-xl font-bold text-red-600 mb-2">Contact Info</h2>
            <ul className="mb-4">
              <li className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:focusup@email.com" className="text-red-600 underline">focusup@email.com</a>
              </li>
              <li className="text-gray-700">
                <strong>Phone:</strong> +91-99999-99999
              </li>
            </ul>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg mt-2 float-right hover:bg-red-700"
              onClick={() => setShowHelp(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
