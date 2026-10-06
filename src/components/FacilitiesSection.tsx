import React, { useState } from 'react';
import { 
  Laptop, 
  Microscope, 
  Cpu, 
  BookOpen, 
  Volume2, 
  Trophy, 
  Bus, 
  Coffee,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { schoolFacilities, scienceLabImg } from '../data/schoolData';

interface FacilitiesSectionProps {
  onExploreMore?: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onExploreMore }) => {
  const [activeFacilityId, setActiveFacilityId] = useState<string | null>(null);

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'smart-classrooms':
        return <Laptop className="w-5 h-5" />;
      case 'science-lab':
        return <Microscope className="w-5 h-5" />;
      case 'computer-lab':
        return <Cpu className="w-5 h-5" />;
      case 'library':
        return <BookOpen className="w-5 h-5" />;
      case 'auditorium':
        return <Volume2 className="w-5 h-5" />;
      case 'sports-ground':
        return <Trophy className="w-5 h-5" />;
      case 'transportation':
        return <Bus className="w-5 h-5" />;
      case 'canteen':
        return <Coffee className="w-5 h-5" />;
      default:
        return <Laptop className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Campus Facilities & Learning Spaces
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Our campus is purposefully engineered to provide safe, inspiring, and technologically sophisticated environments where children thrive.
          </p>
        </div>

        {/* Marquee Featured Facility Banner (Science Lab with generated high-fidelity photograph) */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 lg:h-96 relative overflow-hidden group">
              <img
                src={scienceLabImg}
                alt="ABC School Science Laboratory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-800" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-amber-300">
                Featured Infrastructure
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Research & Discovery
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Advanced Composite Science Laboratories
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equipped with precision optical instruments, analytical chemicals, anatomical models, and advanced digital sensors, allowing students from Grade VI upwards to test theoretical principles practically.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Physics & Optics Hub</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Fume-Hood Chemistry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Bio-Microscopy Wing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Safety Eye-Wash Stations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Facilities Rich Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolFacilities.map((facility) => {
            const isHovered = activeFacilityId === facility.id;
            return (
              <div
                key={facility.id}
                onMouseEnter={() => setActiveFacilityId(facility.id)}
                onMouseLeave={() => setActiveFacilityId(null)}
                className="group relative rounded-2xl bg-slate-800/80 hover:bg-slate-800 p-6 border border-slate-700/80 hover:border-amber-400/80 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/70 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-400 flex items-center justify-center transition-colors">
                      {getFacilityIcon(facility.id)}
                    </div>
                    <span className="text-[11px] text-slate-400 group-hover:text-slate-200 font-medium">
                      {facility.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                    {facility.name}
                  </h4>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Features List inside Card */}
                <div className="mt-5 pt-4 border-t border-slate-700/60 space-y-1.5">
                  {facility.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400 group-hover:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Facilities Action */}
        {onExploreMore && (
          <div className="mt-12 text-center">
            <button
              onClick={onExploreMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
            >
              <span>Explore All Infrastructure & Campus Safety Details</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
