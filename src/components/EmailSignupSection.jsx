import React, { useState } from 'react';

export default function EmailSignupSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      try {
        const response = await fetch('https://focusup-backend.onrender.com/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 3000);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Subscription failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div id="contact" className="py-16 bg-gradient-to-br from-red-100 to-pink-100">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Get Notified at Launch
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Be the first to know when Focus Up goes live. Sign up for early access!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-3 rounded-lg border-2 border-red-300 focus:outline-none focus:border-red-600 flex-1 max-w-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400"
          >
            {loading ? 'Submitting...' : 'Notify Me'}
          </button>
        </form>
        
        {submitted && (
          <p className="mt-4 text-green-600 font-semibold">
            ✓ Thanks! We'll notify you at launch.
          </p>
        )}
      </div>
    </div>
  );
}
