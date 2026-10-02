import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GymTransition from './components/GymTransition';
import AboutSection from './components/AboutSection';
import FacilitiesGallery from './components/FacilitiesGallery';
import VideoExperience from './components/VideoExperience';
import TrainingPrograms from './components/TrainingPrograms';
import MembershipPlans from './components/MembershipPlans';
import Testimonials from './components/Testimonials';
import FreeTrialBooking from './components/FreeTrialBooking';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('PRO');

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    scrollToSection('freetrial');
  };

  const handleEnquireProgram = (programTitle) => {
    setSelectedPlan(programTitle);
    scrollToSection('freetrial');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF2020] selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Sleek Minimal Navigation Bar */}
      <Navbar
        onJoinClick={() => scrollToSection('freetrial')}
      />

      {/* Luxury Redesigned Hero with Real Running Black Panther */}
      <Hero
        onExploreClick={() => scrollToSection('about')}
        onMembershipClick={() => scrollToSection('membership')}
      />

      {/* Cinematic Gym Atmosphere Transition */}
      <GymTransition />

      {/* About Section */}
      <AboutSection
        onDiscoverClick={() => scrollToSection('facilities')}
      />

      {/* Real Gym Facilities Photography Gallery */}
      <FacilitiesGallery />

      {/* Video Experience Section */}
      <VideoExperience />

      {/* Training Programs */}
      <TrainingPrograms
        onEnquireProgram={handleEnquireProgram}
      />

      {/* Membership Plans */}
      <MembershipPlans
        onSelectPlan={handleSelectPlan}
      />

      {/* Member Testimonials */}
      <Testimonials />

      {/* Free Trial Booking & Enquiry Form */}
      <FreeTrialBooking
        initialPlan={selectedPlan}
      />

      {/* Contact, Hours, WhatsApp & Location */}
      <ContactLocation />

      {/* Luxury Minimal Footer */}
      <Footer />

    </div>
  );
}
