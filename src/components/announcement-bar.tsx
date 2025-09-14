import React from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "🌍 Free Worldwide Delivery",
    "📦 Bulk Orders Welcome",
    "✨ Custom Orders Available",
    "💯 100% Quality Guarantee",
    "🎯 Lowest Prices Guaranteed",
    "⚡ Fast 12-15 Days Manufacturing"
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium">
          {announcements.map((announcement, index) => (
            <span key={index} className="mx-8">
              {announcement}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {announcements.map((announcement, index) => (
            <span key={`duplicate-${index}`} className="mx-8">
              {announcement}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;