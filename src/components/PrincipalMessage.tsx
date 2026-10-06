import React from 'react';
import { Quote, Award, Sparkles, CheckCircle } from 'lucide-react';
import { principalImg } from '../data/schoolData';

export const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
          
          {/* Subtle background crest accent */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none w-80 h-80">
            <svg viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4L8 10V22C8 33 15 41 24 44C33 41 40 33 40 22V10L24 4Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Principal Photo & Credentials */}
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
                  <img
                    src={principalImg}
                    alt="Principal of ABC School"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-slate-950 p-2.5 rounded-xl shadow-md border-2 border-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Dr. K. S. Sundaram, Ph.D., M.Ed.
                </h4>
                <p className="text-sm font-semibold text-blue-900">
                  Principal & Senior Academic Director
                </p>
                <p className="text-xs text-slate-500">
                  30+ Years in Transformative Secondary Pedagogy & Educational Leadership
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Recipient of National Best Educator Citation</span>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/50">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                    Leadership Perspectives
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                    Principal's Message
                  </h2>
                </div>
              </div>

              <blockquote className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  "Welcome to <strong className="text-slate-900">ABC School</strong>. Education is not merely the accumulation of facts and grades, but the harmonious awakening of the human spirit. At ABC School, we envision every child as an extraordinary repository of untapped potential, awaiting the guidance of committed mentors, the challenge of intellectual curiosity, and the warmth of a supportive school community."
                </p>

                <p>
                  "We place profound emphasis on character, integrity, discipline, and empathetic social consciousness. In an era accelerated by rapid digital transformation and artificial intelligence, the timeless virtues of truthfulness, resilience, ethical judgment, and creative empathy are the greatest gifts we can bestow upon the next generation. We partner closely with our parents to ensure that every student leaves our portals equipped not just for university entrance, but for life itself."
                </p>
              </blockquote>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">School Motto</span>
                  <span className="text-base font-serif italic text-blue-950 font-semibold">
                    "Vidya Dhanam Sarva Dhanat Pradhanam"
                  </span>
                </div>
                <div className="font-academic text-base text-slate-800 font-bold tracking-wider">
                  — Office of the Principal
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
