import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  light?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  light = false
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Heraldic School Crest Emblem */}
      <div className={`relative shrink-0 flex items-center justify-center rounded-xl p-1.5 shadow-sm transition-transform duration-300 hover:scale-105 ${
        light 
          ? 'bg-white/10 text-amber-300 ring-1 ring-white/20' 
          : 'bg-slate-900 text-amber-500 shadow-slate-900/10 ring-1 ring-slate-900/10'
      } ${iconDimensions}`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Shield base */}
          <path
            d="M24 4L8 10V22C8 33 15 41 24 44C33 41 40 33 40 22V10L24 4Z"
            fill="currentColor"
            fillOpacity={light ? "0.2" : "0.15"}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Open Book */}
          <path
            d="M16 28C19 26 22 26.5 24 28C26 26.5 29 26 32 28V19C29 17.5 26 18 24 19.5C22 18 19 17.5 16 19V28Z"
            stroke={light ? "#FCD34D" : "#D97706"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 19.5V28"
            stroke={light ? "#FCD34D" : "#D97706"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Academic Torch / Flame */}
          <path
            d="M24 9C23.2 11.2 24.5 12.8 24 14C23.5 12.8 24.8 11.2 24 9Z"
            fill={light ? "#F59E0B" : "#B45309"}
          />
          {/* Olive Leaf branch accents */}
          <circle cx="13" cy="21" r="1.5" fill="currentColor" fillOpacity="0.7" />
          <circle cx="35" cy="21" r="1.5" fill="currentColor" fillOpacity="0.7" />
          <circle cx="24" cy="36" r="2" fill={light ? "#FCD34D" : "#D97706"} />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-academic font-bold tracking-wider leading-tight ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${light ? 'text-white' : 'text-slate-900'}`}>
            ABC SCHOOL
          </span>
          <span className={`text-[10px] md:text-xs tracking-normal font-medium leading-none mt-0.5 ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Inspiring Young Minds, Building Bright Futures
          </span>
        </div>
      )}
    </div>
  );
};
