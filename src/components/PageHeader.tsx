import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  category: string;
  onNavigate: (path: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  category,
  onNavigate
}) => {
  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Zero-pill clean text */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-medium">{category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 font-medium truncate">{title}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
          {title}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
