import React, { useState, useEffect } from 'react';

const LandingHeroOverlay = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Disable the floating overlay since it conflicts with the new hero design
};

export default LandingHeroOverlay;