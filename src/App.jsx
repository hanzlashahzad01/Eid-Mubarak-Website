import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Stickers from './components/Stickers';
import Wishes from './components/Wishes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scrolling to body
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Characters />
        <Stickers />
        <Wishes />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
