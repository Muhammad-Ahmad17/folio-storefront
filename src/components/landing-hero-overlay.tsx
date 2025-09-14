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
      className={`fixed left-1/2 transform -translate-x-1/2 z-30 pointer-events-none transition-all duration-1000 ease-out ${isScrolled
        ? 'opacity-0 scale-50 -translate-y-96'
        : 'opacity-100 scale-100 translate-y-1/2'
        }`}
      style={{
        top: isScrolled ? '0' : '50vh'
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-white/90 tracking-wider drop-shadow-2xl">
          CORE
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-body mt-2 tracking-wide">
          Sports Wears Manufacturing
        </p>
      </div>
    </div>
  );
};

export default LandingHeroOverlay;