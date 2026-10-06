import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { heroCampusImg } from '../data/schoolData';

interface HeroSectionProps {
  onOpenAdmissionModal: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAdmissionModal,
  onExploreClick
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Campus Image with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampusImg}
          alt="ABC School Campus, Chennai"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-1000"
        />
        {/* Anti-Slop Measured Scrim: Ensuring strict WCAG AA 4.5:1 text contrast across all luminances */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Floating subtle ambient graphic */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Unboxed editorial kicker - Zero-pill discipline */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-amber-400 mb-4 uppercase">
            <span>CBSE Affiliated Premier Institution</span>
            <span aria-hidden="true">·</span>
            <span>Chennai, Tamil Nadu</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2001</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
            Welcome to <span className="text-amber-400 font-academic">ABC School</span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl text-slate-200 font-light italic font-serif">
            "Where Knowledge Meets Character"
          </p>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Empowering students with knowledge, creativity, confidence and values to become responsible citizens of tomorrow. Delivering integrated academics, modern laboratories, and vibrant campus life.
          </p>

          {/* Buttons: Explore Our School + Admission Enquiry */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-base shadow-lg shadow-amber-400/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/5 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              <Compass className="w-5 h-5 text-amber-300" />
              <span>Explore Our School</span>
            </button>
          </div>

          {/* Trust Highlights Row */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Nursery to Grade XII Comprehensive Syllabi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Smart Classrooms & STEM Robotics Lab</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Safe GPS-Tracked Campus Transportation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
