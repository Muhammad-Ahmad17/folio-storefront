import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', hideText = false }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const isWhiteText = className.includes('text-white');

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square bg-gradient-primary rounded-lg flex items-center justify-center shadow-medium`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-2/3 h-2/3 text-primary-foreground"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            fill="currentColor"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {!hideText && (
        <div className="flex flex-col leading-none">
          <span className={`font-heading font-bold ${isWhiteText ? 'text-white' : 'text-foreground'} ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
            }`}>
            CORE
          </span>
          <span className={`font-body ${isWhiteText ? 'text-white/80' : 'text-muted-foreground'} ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
            }`}>
            Sports Wears
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;