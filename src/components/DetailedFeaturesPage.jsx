import React from 'react';
import { FaBrain, FaFileAlt, FaChartLine, FaUserCircle, FaBullseye } from 'react-icons/fa';

export default function DetailedFeaturesPage() {
  const features = [
    {
      icon: <FaBrain className="text-6xl text-red-600 mb-4" />,
      title: "AI Study Assistant",
      description: "Meet your personal AI tutor that never sleeps! Our smart assistant learns your study patterns and creates custom study plans just for you. It's like having a genius friend who knows exactly when you need a break and when to push harder.",
      benefits: [
        "24/7 personalized study recommendations",
        "Adapts to your learning speed",
        "Smart scheduling based on your goals",
        "Instant answers to your study questions"
      ],
      image: "🤖"
    },
    {
      icon: <FaFileAlt className="text-6xl text-red-600 mb-4" />,
      title: "PDF Analysis",
      description: "Upload any study material and watch the magic happen! Our AI reads through your PDFs faster than you can say 'exam prep' and gives you the key points, summaries, and even practice questions. No more endless highlighting!",
      benefits: [
        "Instant PDF summarization",
        "Auto-generated flashcards",
        "Key concept extraction",
        "Practice questions from your notes"
      ],
      image: "📄"
    },
    {
      icon: <FaChartLine className="text-6xl text-red-600 mb-4" />,
      title: "Progress Tracking",
      description: "See your growth in real-time! Track every study session, monitor your improvement, and celebrate your wins. Our beautiful charts and graphs make studying feel like a game you're winning!",
      benefits: [
        "Visual progress dashboards",
        "Study streak tracking",
        "Performance analytics",
        "Achievement badges and rewards"
      ],
      image: "📊"
    },
    {
      icon: <FaUserCircle className="text-6xl text-red-600 mb-4" />,
      title: "Personalized Experience",
      description: "Everyone learns differently, and we get that! Whether you're a visual learner, night owl, or early bird - Focus Up adapts to YOUR style. Your study space, your rules!",
      benefits: [
        "Custom themes and layouts",
        "Adaptive learning techniques",
        "Flexible study schedules",
        "Personal study preferences"
      ],
      image: "✨"
    },
    {
      icon: <FaBullseye className="text-6xl text-red-600 mb-4" />,
      title: "Your Study Goals",
      description: "Dream big, achieve bigger! Set your exam goals, track milestones, and watch yourself crush them one by one. We break down your big scary exam into bite-sized, achievable targets that keep you motivated!",
      benefits: [
        "Smart goal setting",
        "Milestone celebrations",
        "Deadline reminders",
        "Success probability tracker"
      ],
      image: "🎯"
    }
  ];

  return (
    <div id="detailed-features" className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-6">
          Powerful Features Built For You
        </h1>
        <p className="text-xl text-center text-gray-700 mb-16">
          Everything you need to ace your exams, all in one place 🚀
        </p>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow`}
            >
              {/* Image/Emoji side */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-9xl">{feature.image}</div>
              </div>

              {/* Content side */}
              <div className="flex-1">
                <div className="flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold text-red-600 mb-4">{feature.title}</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-red-600 mb-3">What you get:</h3>
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to transform your study life?
          </h3>
          <button className="bg-red-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
