import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  Trophy, 
  Palette, 
  Compass, 
  Target, 
  Map, 
  PartyPopper, 
  Shield, 
  Users, 
  Flag,
  ArrowRight
} from 'lucide-react';
import { 
  campusLifeItems, 
  sportsEventsImg, 
  aboutLearningImg, 
  heroCampusImg 
} from '../data/schoolData';

interface CampusLifePageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const houses = [
    { name: 'Ruby House', color: 'from-rose-600 to-red-700', motto: 'Valor & Courage', mascot: 'The Lion' },
    { name: 'Emerald House', color: 'from-emerald-600 to-teal-700', motto: 'Truth & Perseverance', mascot: 'The Falcon' },
    { name: 'Sapphire House', color: 'from-blue-600 to-indigo-700', motto: 'Wisdom & Honor', mascot: 'The Eagle' },
    { name: 'Topaz House', color: 'from-amber-500 to-yellow-600', motto: 'Integrity & Brilliance', mascot: 'The Stallion' }
  ];

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Campus Life"
        title="Student Life, Sports & Culture"
        subtitle="Cultivating leadership, camaraderie, artistic flair, and sportsmanship beyond academic textbooks."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Four School Houses System */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Esprit de Corps
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              The ABC School House System
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Every student from Grade I is assigned to one of our four historic houses, encouraging healthy inter-house rivalry, athletic competition, and collective loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house) => (
              <div
                key={house.name}
                className="rounded-2xl p-6 text-white bg-gradient-to-br shadow-lg flex flex-col justify-between"
                style={{
                  backgroundImage: house.name === 'Ruby House' 
                    ? 'linear-gradient(to bottom right, #be123c, #9f1239)' 
                    : house.name === 'Emerald House'
                    ? 'linear-gradient(to bottom right, #047857, #065f46)'
                    : house.name === 'Sapphire House'
                    ? 'linear-gradient(to bottom right, #1d4ed8, #1e3a8a)'
                    : 'linear-gradient(to bottom right, #b45309, #78350f)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="w-6 h-6 text-white/90" />
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/20 text-white">
                      Mascot: {house.mascot}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-heading">{house.name}</h4>
                  <p className="text-xs text-white/80 mt-1 italic font-medium">"{house.motto}"</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 text-[11px] text-white/80">
                  Participating in debate, quiz, athletics & drill displays.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Campus Life Categories In-Depth */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Holistic Growth
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              Clubs, Activities & Co-Curricular Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusLifeItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mb-3">
                    Active Program
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-blue-900 mt-1 italic">
                    "{item.tagline}"
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {item.details.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/gallery')}
                    className="text-xs font-semibold text-blue-900 hover:text-amber-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View {item.title} Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Council & Leadership */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                Democratic Governance
              </span>
              <h3 className="text-3xl font-extrabold font-heading text-white">
                Student Prefectorial Council & Investiture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Every academic session, senior students are elected by peers and mentors to hold offices of Head Boy, Head Girl, Sports Captain, Cultural Secretary, and House Captains. They take a solemn oath of service during the annual Investiture Ceremony.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenAdmissionModal}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Join Our Student Community
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
