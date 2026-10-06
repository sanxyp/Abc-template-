import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  Trophy, 
  Award, 
  Medal, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Star,
  Users
} from 'lucide-react';
import { schoolAchievements } from '../data/schoolData';

interface AchievementsPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const toppers = [
    { name: 'Aditya Varma', score: '496 / 500 (99.2%)', exam: 'CBSE Grade XII - Science', badge: 'State Rank 2', college: 'IIT Madras (Computer Science)' },
    { name: 'Pooja Venkatesh', score: '494 / 500 (98.8%)', exam: 'CBSE Grade XII - Commerce', badge: 'Centum in Accountancy & Eco', college: 'SRCC, Delhi University' },
    { name: 'Siddharth M.', score: '492 / 500 (98.4%)', exam: 'CBSE Grade X', badge: 'Centum in Mathematics & Science', college: 'Senior Secondary Merit Scholar' },
    { name: 'Kavya Raman', score: '490 / 500 (98.0%)', exam: 'CBSE Grade XII - Science', badge: 'NEET 680 / 720 Score', college: 'Madras Medical College (MBBS)' }
  ];

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Achievements"
        title="Celebrating Excellence & Hall of Fame"
        subtitle="Recognizing the relentless dedication of our students, mentorship of faculty, and steadfast support of parents."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 4 Major Achievement Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mb-3">
                  {item.category}
                </span>

                <div className="text-3xl font-extrabold text-slate-900 font-heading tabular-nums">
                  {item.statistic}
                </div>

                <h4 className="mt-1 text-base font-bold text-blue-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Board Examination Merit Honors */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Scholastic Distinction
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              Board Examination Exemplars
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Students who set academic benchmarks in recent national board examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black font-heading flex items-center justify-center text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">{t.name}</h4>
                  <div className="text-sm font-extrabold text-blue-900 font-heading mt-1">{t.score}</div>
                  <p className="text-xs text-slate-500 mt-0.5">{t.exam}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {t.badge}
                  </span>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-600">
                  <span className="block font-semibold text-slate-800">Destination:</span>
                  <span>{t.college}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports & Co-Curricular Trophies Strip */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Trophy className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-lg font-bold font-heading text-white">State Athletics Shield</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Overall champions in Tamil Nadu State Inter-School Track & Field Meet with gold medals in 100m, 4x100m relay, and shot put.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Medal className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-lg font-bold font-heading text-white">National Science Olympiad</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                18 zonal medals and 3 international rank holders qualifying for premier national research orientation camps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Sparkles className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-lg font-bold font-heading text-white">South India Cultural Fest</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                First prize in Carnatic vocal choir, Bharatanatyam group presentation, and English Parliamentary Debate championship.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
