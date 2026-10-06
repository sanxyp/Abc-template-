import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  Laptop, 
  Microscope, 
  Cpu, 
  BookOpen, 
  Volume2, 
  Trophy, 
  Bus, 
  Coffee,
  ShieldCheck,
  CheckCircle2,
  Video
} from 'lucide-react';
import { schoolFacilities, scienceLabImg, heroCampusImg } from '../data/schoolData';

interface FacilitiesPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'smart-classrooms':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'science-lab':
        return <Microscope className="w-6 h-6 text-emerald-600" />;
      case 'computer-lab':
        return <Cpu className="w-6 h-6 text-purple-600" />;
      case 'library':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'auditorium':
        return <Volume2 className="w-6 h-6 text-rose-600" />;
      case 'sports-ground':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'transportation':
        return <Bus className="w-6 h-6 text-indigo-600" />;
      case 'canteen':
        return <Coffee className="w-6 h-6 text-orange-600" />;
      default:
        return <Laptop className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Facilities"
        title="Campus Infrastructure & Facilities"
        subtitle="Designed with meticulous attention to safety, acoustic serenity, technological empowerment, and athletic vitality."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Safety & Hygiene Overview Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Safety, Surveillance & Green Campus Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                128 high-definition CCTV cameras across hallways and perimeters, biometric access gates, fire-hydrant systems certified by Tamil Nadu Fire Services, and continuous UV-purified RO drinking water stations.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs transition-colors shrink-0"
          >
            Request Campus Tour
          </button>
        </div>

        {/* 8 Facilities In-Depth Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schoolFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    {getFacilityIcon(fac.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                    {fac.category}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  {fac.name}
                </h4>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {fac.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Facility Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-amber-700">Fully Certified & Monitored</span>
                <span className="text-xs text-slate-400">ABC School Campus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transportation Fleet Highlight */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Secure Commute
            </span>
            <h3 className="text-3xl font-extrabold text-white font-heading">
              School Bus Transportation Routes
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Our GPS-monitored fleet covers Anna Nagar, Kilpauk, Chetpet, Nungambakkam, T. Nagar, Adyar, Velachery, Porur, and neighboring residential suburbs. Every vehicle is staffed with an experienced driver and a certified female conductor.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Inquire Bus Route for Your Area
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
