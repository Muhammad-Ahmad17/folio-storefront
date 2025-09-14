import React from 'react';

interface ScrollingBannerProps {
  className?: string;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ className = "" }) => {
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
    <div className={`bg-primary text-primary-foreground py-3 overflow-hidden relative border-b-2 border-primary-foreground/20 ${className}`}>
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate messages for seamless scrolling */}
        {[...messages, ...messages].map((message, index) => (
          <span
            key={index}
            className="inline-block px-8 text-sm font-semibold font-body tracking-wide"
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
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;