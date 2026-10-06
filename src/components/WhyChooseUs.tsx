import React from 'react';
import { 
  GraduationCap, 
  Laptop, 
  Sparkles, 
  Trophy, 
  Microscope, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { whyChooseFeatures } from '../data/schoolData';

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onLearnMore }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-500" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-600" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Distinctive Educational Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Choose ABC School
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We provide an enriching environment where academic dedication merges seamlessly with athletic vigor, artistic innovation, and ethical leadership.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Icon & Unboxed Highlight */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-amber-50/80 flex items-center justify-center border border-slate-100 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50/90 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-900 group-hover:text-amber-600 transition-colors">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
