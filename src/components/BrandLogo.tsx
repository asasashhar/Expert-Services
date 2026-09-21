import React from 'react';

interface BrandLogoProps {
  variant?: 'dark-text' | 'light-text';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark-text',
  size = 'md',
  showSubtitle = true
}) => {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 48 : 42;

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Precision SVG Emblem matching the uploaded brand asset */}
      <div 
        style={{ width: iconSize, height: iconSize }}
        className="relative flex-shrink-0 bg-[#0c121e] rounded-xl flex items-center justify-center shadow-sm border border-slate-800"
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-[85%] h-[85%]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dashed outer technical track */}
          <circle 
            cx="50" 
            cy="50" 
            r="42" 
            stroke="#334155" 
            strokeWidth="3.5" 
            strokeDasharray="4 4" 
          />
          {/* Main blue mechanical gear/rotor arc */}
          <path 
            d="M 50 16 A 34 34 0 0 1 84 50" 
            stroke="#2563eb" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <path 
            d="M 84 50 A 34 34 0 0 1 50 84" 
            stroke="#2563eb" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <path 
            d="M 50 84 A 34 34 0 0 1 16 50" 
            stroke="#2563eb" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <path 
            d="M 22 28 A 34 34 0 0 1 40 18" 
            stroke="#2563eb" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />

          {/* Cross spokes */}
          <line x1="24" y1="50" x2="76" y2="50" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="50" y1="24" x2="50" y2="76" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Diagonal white accent spokes */}
          <line x1="32" y1="32" x2="68" y2="68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="68" x2="68" y2="32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

          {/* Central cyan sensor core */}
          <circle cx="50" cy="50" r="10" fill="#00e5ff" />
          <circle cx="50" cy="50" r="4.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span 
          className={`font-extrabold tracking-tight leading-none ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
          } ${variant === 'dark-text' ? 'text-slate-950' : 'text-white'}`}
        >
          EXPERT SERVICES
        </span>
        {showSubtitle && (
          <span 
            className={`font-bold tracking-wider uppercase text-[9px] sm:text-[10px] mt-1 leading-none ${
              variant === 'dark-text' ? 'text-blue-600' : 'text-blue-400'
            }`}
          >
            AC • APPLIANCE REPAIR • MUMBAI
          </span>
        )}
      </div>
    </div>
  );
};
