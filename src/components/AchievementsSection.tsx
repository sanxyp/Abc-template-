import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { schoolAchievements } from '../data/schoolData';

interface AchievementsSectionProps {
  onViewAll?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onViewAll }) => {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case 'academic':
        return <Award className="w-7 h-7 text-amber-500" />;
      case 'sports':
        return <Trophy className="w-7 h-7 text-blue-600" />;
      case 'cultural':
        return <Sparkles className="w-7 h-7 text-purple-600" />;
      case 'olympiad':
        return <Medal className="w-7 h-7 text-emerald-600" />;
      default:
        return <Trophy className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-blue-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            Proud Milestones & Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Celebrating Excellence
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            From top positions in state board examinations to international olympiads and inter-school championships, our students consistently reach the pinnacle of distinction.
          </p>
        </div>

        {/* 4 Major Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-400 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-amber-400/5 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900 rounded-xl group-hover:scale-110 transition-transform">
                    {getBadgeIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {item.highlight}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {item.category}
                </span>

                <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white font-heading tabular-nums group-hover:text-amber-300 transition-colors">
                  {item.statistic}
                </div>

                <h4 className="mt-1 text-sm font-bold text-slate-200">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified School Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Stats Row */}
        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-heading">
              100% Board Exam Success for 15+ Consecutive Years
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              ABC School alumni currently excel at IITs, NITs, AIIMS, top national law schools, and prestigious international universities.
            </p>
          </div>
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow"
            >
              <span>View Hall of Fame</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
