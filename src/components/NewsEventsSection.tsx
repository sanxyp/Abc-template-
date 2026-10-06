import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, X, Sparkles } from 'lucide-react';
import { 
  newsAndEvents, 
  NewsEvent,
  sportsEventsImg, 
  aboutLearningImg, 
  scienceLabImg, 
  heroCampusImg 
} from '../data/schoolData';

interface NewsEventsSectionProps {
  onViewAllEvents?: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({ onViewAllEvents }) => {
  const [selectedEvent, setSelectedEvent] = useState<NewsEvent | null>(null);

  const getEventImage = (id: string) => {
    switch (id) {
      case 'sports-day':
        return sportsEventsImg;
      case 'science-exhibition':
        return scienceLabImg;
      case 'cultural-festival':
        return heroCampusImg;
      default:
        return aboutLearningImg;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Campus Happenings & Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              News & Upcoming Events
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Stay connected with academic milestones, sports tournaments, cultural gatherings, and interactive parent symposiums.
            </p>
          </div>
          {onViewAllEvents && (
            <button
              onClick={onViewAllEvents}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold text-sm transition-colors shrink-0"
            >
              <span>View Full Calendar</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </button>
          )}
        </div>

        {/* 5 News & Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsAndEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Event Image with Date Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getEventImage(event.id)}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Clean unboxed date badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold font-heading flex items-center gap-1.5 shadow">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.formattedDate}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium flex items-center justify-between">
                    <span className="text-amber-300 font-semibold uppercase tracking-wider text-[10px]">
                      {event.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-300">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-900 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {event.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-amber-400 group-hover:text-slate-950 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-all duration-200"
                >
                  <span>Read Event Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
            <div 
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 sm:h-56">
                <img
                  src={getEventImage(selectedEvent.id)}
                  alt={selectedEvent.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    {selectedEvent.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span><strong>Date:</strong> {selectedEvent.formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span><strong>Time:</strong> {selectedEvent.time}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 pt-1 border-t border-slate-200">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span><strong>Venue:</strong> {selectedEvent.venue}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedEvent.fullDesc}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Open for students, parents and registered guests
                  </span>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
