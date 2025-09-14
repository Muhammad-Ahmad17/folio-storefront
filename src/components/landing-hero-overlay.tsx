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

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none transition-all duration-1000 ease-out ${isScrolled
          ? 'translate-y-4 scale-50'
          : 'translate-y-1/2 scale-100'
        }`}
      style={{
        top: isScrolled ? '1rem' : '50vh'
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white/90 tracking-wider drop-shadow-2xl">
          CORE
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-body mt-2 tracking-wide">
          Sports Wears Manufacturing
        </p>
      </div>
    </div>
  );
};

export default LandingHeroOverlay;