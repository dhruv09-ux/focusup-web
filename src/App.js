import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import FeaturesSection from './components/FeaturesSection';
import DetailedFeaturesPage from './components/DetailedFeaturesPage';
import AboutSection from './components/AboutSection';
import EmailSignupSection from './components/EmailSignupSection';
import SocialMediaSection from './components/SocialMediaSection';
import FloatingIcons from './components/FloatingIcons';

function App() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <FeaturesSection />
      <DetailedFeaturesPage />
      <AboutSection />
      <EmailSignupSection />
      <SocialMediaSection />
      <FloatingIcons />
    </div>
  );
}

export default App;
