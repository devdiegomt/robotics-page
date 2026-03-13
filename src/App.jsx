import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Signup from './components/Signup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--gla-dark)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Benefits />
      <Achievements />
      <Gallery />
      <Schedule />
      <Testimonials />
      <Signup />
      <Footer />
    </div>
  );
}
