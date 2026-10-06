import React, { useState, useEffect } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenAdmissionModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar (Trust signals, contact, hours) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${schoolContact.phone}`} 
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{schoolContact.phoneDisplay}</span>
            </a>
            <a 
              href={`mailto:${schoolContact.email}`} 
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{schoolContact.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Mon – Sat: 8:30 AM – 4:30 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Sparkles className="w-3 h-3" />
              Admissions Open 2026-27 (Nursery to Gr. XI)
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{schoolContact.affiliation}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-slate-200/80 py-3' 
            : 'bg-white border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Crest */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-0.5"
            aria-label="ABC School Home"
          >
            <SchoolLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-1.5 rounded-md transition-colors relative whitespace-nowrap ${
                    isActive 
                      ? 'text-blue-900 font-semibold bg-blue-50/70' 
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Medium Desktop (Lg) - Top 6 links + dropdown or clean condensed view */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-medium">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmissionModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Admission Enquiry
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <SchoolLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="mt-4 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                        isActive 
                          ? 'bg-blue-50 text-blue-900 font-semibold' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-900' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-sm"
              >
                Admission Enquiry
              </button>
              
              <div className="text-xs text-slate-500 space-y-1 pt-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{schoolContact.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{schoolContact.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
