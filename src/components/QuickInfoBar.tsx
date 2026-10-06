import React from 'react';
import { Award, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { quickStats } from '../data/schoolData';

export const QuickInfoBar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'years':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'students':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'faculty':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'achievement':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      default:
        return <Award className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {quickStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading tabular-nums block">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-800 mt-1 block">
                  {stat.label}
                </span>
              </div>
              <div className="p-3 bg-slate-50 group-hover:bg-amber-50 rounded-xl transition-colors border border-slate-100">
                {getIcon(stat.id)}
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
