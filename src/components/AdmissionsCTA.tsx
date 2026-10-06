import React from 'react';
import { ArrowRight, PhoneCall, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface AdmissionsCTAProps {
  onApply: () => void;
  onContact: () => void;
}

export const AdmissionsCTA: React.FC<AdmissionsCTAProps> = ({ onApply, onContact }) => {
  const steps = [
    { num: '01', title: 'Submit Enquiry', desc: 'Fill online form or visit admissions desk' },
    { num: '02', title: 'Campus Tour', desc: 'Interact with faculty & explore facilities' },
    { num: '03', title: 'Interaction', desc: 'Friendly age-appropriate student review' },
    { num: '04', title: 'Enrollment', desc: 'Complete documentation & welcome kit' }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open for Academic Year 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Begin Your Child's Journey With <span className="text-amber-400 font-academic">ABC School</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            "Give your child an environment where curiosity grows, confidence develops and dreams take shape."
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-400/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>Contact Admissions Team</span>
            </button>
          </div>

          {/* Admission Journey Steps */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6 block">
              Simple 4-Step Admission Pathway
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {steps.map((step) => (
                <div key={step.num} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <span className="text-2xl font-black text-amber-400 font-heading">
                    {step.num}
                  </span>
                  <div className="mt-2">
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
