import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone, X } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface FloatingActionsProps {
  onOpenAdmissionModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenAdmissionModal
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Contact Mini Popup */}
      {quickContactOpen && (
        <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 mb-2 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Admissions Helpdesk
            </span>
            <button
              onClick={() => setQuickContactOpen(false)}
              className="text-slate-400 hover:text-slate-600"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-xs text-slate-500 py-2">
            Connect directly with our counseling desk for 2026-27 inquiries:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={`tel:${schoolContact.mobile}`}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-blue-100 text-blue-900">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>Call: {schoolContact.mobile}</span>
            </a>

            <button
              onClick={() => {
                setQuickContactOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors shadow-sm"
            >
              <span>Instant Enquiry Form</span>
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-3">
        {/* Floating Quick Contact / Helpdesk Button */}
        <button
          onClick={() => setQuickContactOpen(!quickContactOpen)}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl shadow-emerald-950/20 transition-all duration-200 transform hover:scale-105"
          aria-label="Admissions Helpdesk"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Admissions Help</span>
        </button>

        {/* Back-to-Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-950/20 transition-all duration-200 transform hover:scale-105 border border-slate-700"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-amber-400" />
          </button>
        )}
      </div>

    </div>
  );
};
