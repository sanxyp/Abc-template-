import React, { useState } from 'react';
import { ArrowRight, BookOpen, Check, Layers, Sparkles } from 'lucide-react';
import { academicStages } from '../data/schoolData';

interface AcademicsSectionProps {
  onViewMore: () => void;
  onOpenAdmissionModal: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({
  onViewMore,
  onOpenAdmissionModal
}) => {
  const [selectedStage, setSelectedStage] = useState(academicStages[0].id);

  const activeStage = academicStages.find((s) => s.id === selectedStage) || academicStages[0];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Scholastic Excellence & Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Academic Wings & Curriculum
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Structured developmental pathways fostering experiential learning, analytical reasoning, and rigorous board examination readiness.
            </p>
          </div>
          <div>
            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold text-sm transition-colors whitespace-nowrap"
            >
              <span>Full Curriculum Guide</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </button>
          </div>
        </div>

        {/* 4 Academic Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStages.map((stage) => {
            const isSelected = stage.id === selectedStage;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-blue-950 text-white shadow-xl shadow-blue-950/20 border-blue-900 ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-900 hover:bg-white hover:shadow-lg border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {stage.grades}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {stage.ageGroup}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-heading ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {stage.title}
                  </h3>

                  <p className={`mt-2 text-xs font-medium italic ${isSelected ? 'text-amber-300' : 'text-amber-700'}`}>
                    "{stage.tagline}"
                  </p>

                  <p className={`mt-3 text-xs leading-relaxed line-clamp-3 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/40 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-amber-300' : 'text-blue-900'}>
                    {isSelected ? 'Viewing Curriculum' : 'Select to View'}
                  </span>
                  <BookOpen className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-8 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs">
                  {activeStage.grades}
                </span>
                <span className="text-sm text-slate-400 font-medium">
                  Ideal for {activeStage.ageGroup}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {activeStage.title}: {activeStage.tagline}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Key Highlights list */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStage.keyHighlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Core Focus Disciplines
              </h4>
              <ul className="space-y-2.5">
                {activeStage.focusAreas.map((area, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-xs text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-medium">{area}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors text-center"
                >
                  Apply For {activeStage.title}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
