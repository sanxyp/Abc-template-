import React from 'react';
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, Compass } from 'lucide-react';
import { aboutLearningImg } from '../data/schoolData';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const pillars = [
    {
      title: 'Quality & Value-Based Education',
      desc: 'Rigorous curriculum harmonizing conceptual fundamentals with creative problem-solving.'
    },
    {
      title: 'Character & Moral Leadership',
      desc: 'Instilling empathy, honesty, discipline, and responsible citizenship in every student.'
    },
    {
      title: 'Technology-Enabled Smart Learning',
      desc: 'Interactive smart boards, dedicated computer & robotics labs, and experiential modules.'
    },
    {
      title: 'Safe, Nurturing & Inclusive Campus',
      desc: '24/7 CCTV surveillance, verified security staff, and personalized student wellness care.'
    }
  ];

  return (
    <section id="about-section" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: School Learning Image with Aesthetic Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative subtle backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-blue-50 rounded-3xl -rotate-1 -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src={aboutLearningImg}
                  alt="Students learning interactively at ABC School"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Caption on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
                      Holistic Development
                    </span>
                    <span className="text-sm font-medium">
                      Inspiring minds through interactive inquiry & innovation
                    </span>
                  </div>
                  <Compass className="w-6 h-6 text-amber-400 shrink-0 hidden sm:block" />
                </div>
              </div>

              {/* Floating Established Badge */}
              <div className="absolute -top-5 -left-5 bg-blue-900 text-white p-4 rounded-2xl shadow-xl border-2 border-white flex items-center gap-3">
                <Shield className="w-8 h-8 text-amber-400" />
                <div>
                  <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Established</span>
                  <span className="text-xl font-bold font-heading">2001 · Chennai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                Nurturing Future Leaders
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                About ABC School
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">ABC School</strong>, we believe that true education extends far beyond textbooks. Founded in 2001 in Chennai, our institution is dedicated to creating a vibrant, safe, and academically rigorous learning ecosystem where each student’s unique potential is recognized and cultivated.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Through technology-enabled smart learning, individualized faculty guidance, comprehensive laboratory facilities, and dynamic extracurricular arts and sports programs, we prepare young learners to excel in higher education and face the global future with courage and compassion.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-md group"
              >
                <span>Learn More About Our Heritage</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
