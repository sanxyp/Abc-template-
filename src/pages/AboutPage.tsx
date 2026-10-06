import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  Target, 
  Eye, 
  Award, 
  Heart, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  History,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { principalImg, aboutLearningImg, heroCampusImg } from '../data/schoolData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const milestones = [
    { year: '2001', title: 'Inception & Foundation', desc: 'Established in Chennai with 120 students and a vision for holistic character and academic eminence.' },
    { year: '2008', title: 'CBSE Secondary Affiliation', desc: 'Achieved complete CBSE board affiliation and expanded science and sports laboratories.' },
    { year: '2015', title: 'Smart Campus Transformation', desc: 'Introduced 100% interactive digital classrooms, fiber networking, and multi-sport athletic turf.' },
    { year: '2021', title: 'STEM & Robotics Hub', desc: 'Commissioned specialized innovation maker spaces and AI educational curriculum for senior secondary.' },
    { year: '2026', title: 'Silver Jubilee Year', desc: 'Celebrating 25 glorious years of scholastic leadership, ethical upbringing, and alumni excellence worldwide.' }
  ];

  const leaders = [
    {
      name: 'Dr. K. S. Sundaram',
      role: 'Principal & Academic Director',
      quals: 'Ph.D., M.Ed., M.Sc.',
      image: principalImg,
      bio: 'Over 30 years guiding national curricula, teacher empowerment, and student-centered pedagogy.'
    },
    {
      name: 'Mrs. S. Rajalakshmi',
      role: 'Vice-Principal (Senior Secondary)',
      quals: 'M.Sc., B.Ed.',
      image: aboutLearningImg,
      bio: '20+ years of science teaching expertise, mentoring students for JEE, NEET, and Olympiads.'
    },
    {
      name: 'Mr. V. Arvind',
      role: 'Head of Sports & Physical Conditioning',
      quals: 'M.P.Ed., NIS Certified',
      image: heroCampusImg,
      bio: 'Former state athlete dedicated to instilling discipline, endurance, and sportsmanship.'
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="About Us"
        title="Our Heritage, Vision & Leadership"
        subtitle="Dedicated to fostering intellectual curiosity, ethical character, and lifelong love for learning since 2001 in Chennai."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-2xl w-fit mb-5">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Our Vision
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              To be a premier learning institution that nurtures enlightened, self-disciplined, and creative global citizens, capable of meeting the intellectual and ethical demands of a dynamically changing world.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Grounded in timeless Indian cultural and universal ethical values</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-2xl w-fit mb-5">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Our Mission
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              To empower young minds through rigorous scholastic foundations, holistic physical wellness, artistic sensitivity, digital technological literacy, and deeply ingrained civic values in an inclusive environment.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Personalized mentorship and 1:15 student-teacher care</span>
            </div>
          </div>
        </div>

        {/* 25-Year Chronological Journey */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1 block">
              A Legacy of Trust
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              Our 25-Year Milestone Journey
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              From humble beginnings to Chennai’s benchmark for holistic educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-2xl font-black text-amber-600 font-heading block">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2 font-heading">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1 block">
              Educational Custodians
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              School Leadership & Mentors
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Experienced educational leaders setting benchmarks for curriculum rigor, compassionate discipline, and student safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-amber-300 font-semibold">{leader.quals}</span>
                    <h4 className="text-lg font-bold font-heading">{leader.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                    {leader.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Public Disclosures */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Transparency & Governance
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                Mandatory CBSE Public Disclosures & Affiliation Status
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                ABC School operates in full compliance with CBSE, New Delhi and the Department of School Education, Tamil Nadu. Building safety certificates, water sanitation approvals, fire compliance, and annual academic reports are readily accessible.
              </p>
            </div>
            <button
              onClick={onOpenAdmissionModal}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Contact School Office
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
