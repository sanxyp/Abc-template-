import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  BookOpen, 
  CheckCircle2, 
  Cpu, 
  FlaskConical, 
  Globe, 
  GraduationCap, 
  HelpCircle, 
  Layers, 
  Sparkles, 
  Target 
} from 'lucide-react';
import { academicStages } from '../data/schoolData';

interface AcademicsPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const streams = [
    {
      title: 'Group 1: Pure Sciences & Technology (MPC)',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science / Artificial Intelligence', 'English Core'],
      careers: 'Engineering, Data Science, Architecture, Physics Research, Defense Services'
    },
    {
      title: 'Group 2: Biological & Life Sciences (BiPC)',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics or Psychology', 'English Core'],
      careers: 'Medicine, Biotechnology, Pharmacy, Genetics, Agriculture, Bio-informatics'
    },
    {
      title: 'Group 3: Commerce & Financial Management',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics or Informatics Practices', 'English Core'],
      careers: 'Chartered Accountancy, Investment Banking, Corporate Law, Business Management'
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Academics"
        title="Curriculum & Scholastic Excellence"
        subtitle="Nurturing critical thinking, conceptual clarity, and board examination mastery from Foundational Primary to Advanced Higher Secondary."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Academic Philosophy Strip */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
              Our Pedagogical Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Inquiry-Based Learning & Experiential Rigor
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              At ABC School, we follow an active learning model inspired by the National Education Policy (NEP). Rather than passive rote memorization, students actively explore, experiment, hypothesize, and debate. Every concept taught in mathematics or science is supplemented by laboratory investigations and real-world case applications.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Foundational</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">Holistic Numeracy & Phonics</h4>
              <p className="text-xs text-slate-500 mt-1">Multi-sensory storytelling, experiential manipulatives, and joyful discovery.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Middle Wings</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">Conceptual Deduction</h4>
              <p className="text-xs text-slate-500 mt-1">Laboratory practicals, coding foundations, and inter-disciplinary projects.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Senior Wings</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">Entrance & Career Precision</h4>
              <p className="text-xs text-slate-500 mt-1">CBSE board preparation combined with JEE, NEET, and CUET foundational modules.</p>
            </div>
          </div>
        </div>

        {/* 4 Academic Wings Detailed */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Class Structure
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              Academic Stages & Wings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicStages.map((stage) => (
              <div key={stage.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg">
                      {stage.grades}
                    </span>
                    <span className="text-xs text-slate-500">{stage.ageGroup}</span>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    {stage.title}
                  </h4>
                  <p className="text-xs font-medium text-amber-700 mt-1 italic">
                    "{stage.tagline}"
                  </p>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Core Disciplines & Practical Elements:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.focusAreas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Continuous Assessment (CCE)</span>
                  <button
                    onClick={onOpenAdmissionModal}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                  >
                    Enquire for {stage.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Secondary Specialization Streams */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Grades XI & XII Specializations
            </span>
            <h3 className="text-3xl font-extrabold text-white font-heading">
              Higher Secondary Academic Streams
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Preparing future doctors, engineers, economists, and entrepreneurs for top university admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streams.map((stream, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-amber-400 font-heading">
                    {stream.title}
                  </h4>
                  <div className="mt-4 space-y-1.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Subjects:</span>
                    <ul className="text-xs text-slate-200 space-y-1">
                      {stream.subjects.map((sub, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 text-[11px] text-slate-400">
                  <span className="text-amber-300 font-semibold block mb-0.5">Target Pathways:</span>
                  <span>{stream.careers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
