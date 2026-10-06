import React, { useState } from 'react';
import { 
  Trophy, 
  Palette, 
  Compass, 
  Target, 
  Map, 
  PartyPopper,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { campusLifeItems, sportsEventsImg, aboutLearningImg } from '../data/schoolData';

interface CampusLifeSectionProps {
  onExploreMore?: () => void;
}

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({ onExploreMore }) => {
  const [activeTab, setActiveTab] = useState('sports');

  const getLifeIcon = (id: string) => {
    switch (id) {
      case 'sports':
        return <Trophy className="w-5 h-5" />;
      case 'cultural':
        return <Palette className="w-5 h-5" />;
      case 'clubs':
        return <Compass className="w-5 h-5" />;
      case 'competitions':
        return <Target className="w-5 h-5" />;
      case 'field-trips':
        return <Map className="w-5 h-5" />;
      case 'celebrations':
        return <PartyPopper className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentItem = campusLifeItems.find((c) => c.id === activeTab) || campusLifeItems[0];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Vibrant Student Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Life at ABC School
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every school day is filled with opportunities to discover hidden talents, build enduring friendships, and celebrate diverse cultural traditions.
            </p>
          </div>
          {onExploreMore && (
            <button
              onClick={onExploreMore}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-amber-600 transition-colors"
            >
              <span>Explore Student Life Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dynamic Image & Activity Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Main Visual Feature */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
            <img
              src={activeTab === 'sports' ? sportsEventsImg : aboutLearningImg}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                {currentItem.title}
              </span>
              <h3 className="text-2xl font-bold font-heading">
                "{currentItem.tagline}"
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Activity Focus Cards */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-900 text-amber-400 rounded-xl">
                {getLifeIcon(currentItem.id)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-amber-700 font-medium">
                  {currentItem.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {currentItem.description}
            </p>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Program Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentItem.details.map((detail, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Category Tabs / Segmented Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {campusLifeItems.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-md border-blue-900 ring-2 ring-amber-400'
                    : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200 hover:shadow'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-3 ${
                  isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                }`}>
                  {getLifeIcon(item.id)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading line-clamp-1">
                    {item.title}
                  </h4>
                  <span className={`text-[10px] mt-0.5 block ${isActive ? 'text-amber-300' : 'text-slate-500'}`}>
                    Active Guild
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
