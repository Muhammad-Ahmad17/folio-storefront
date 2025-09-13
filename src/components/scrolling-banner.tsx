import React from 'react';

const ScrollingBanner = () => {
  const messages = [
    "🌍 FREE WORLDWIDE DELIVERY ON BULK ORDERS",
    "📦 NO MINIMUM ORDER QUANTITY",
    "🎨 CUSTOM DESIGNS & PERSONALIZATION AVAILABLE", 
    "⚡ FAST 12-15 DAYS MANUFACTURING TIME",
    "💰 LOWEST PRICES GUARANTEED",
    "🆓 FREE SAMPLES & QUOTES",
    "🏭 BULK MANUFACTURING SPECIALISTS"
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate messages for seamless scrolling */}
        {[...messages, ...messages].map((message, index) => (
          <span
            key={index}
            className="inline-block px-8 text-sm font-medium font-body"
          >
            {message}
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;