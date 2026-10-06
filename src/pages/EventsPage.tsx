import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Filter, 
  ArrowRight,
  Sparkles,
  Share2
} from 'lucide-react';
import { 
  newsAndEvents, 
  sportsEventsImg, 
  scienceLabImg, 
  heroCampusImg, 
  aboutLearningImg 
} from '../data/schoolData';

interface EventsPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});

  const categories = ['All', 'School Event', 'Sports', 'Academic', 'Cultural', 'Academic Meeting'];

  const filteredEvents = activeCategory === 'All'
    ? newsAndEvents
    : newsAndEvents.filter((e) => e.category === activeCategory);

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

  const handleRegisterRSVP = (id: string) => {
    setRegisteredEvents((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Events & News"
        title="School Calendar & Happenings"
        subtitle="Keep track of academic assemblies, cultural showcases, athletics meets, and parent-teacher interactions."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-8">
          {filteredEvents.map((evt) => {
            const isRegistered = registeredEvents[evt.id];
            return (
              <div
                key={evt.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Event Photo */}
                <div className="lg:col-span-5 h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={getEventImage(evt.id)}
                    alt={evt.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold font-heading flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{evt.formattedDate}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {evt.category}
                  </div>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">
                      {evt.title}
                    </h3>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                        <span><strong>Timings:</strong> {evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                        <span><strong>Venue:</strong> {evt.venue}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                      {evt.fullDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">
                      Invited: Students, Parents & Registered Guests
                    </span>
                    
                    <button
                      onClick={() => handleRegisterRSVP(evt.id)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 ${
                        isRegistered
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>RSVP Confirmed</span>
                        </>
                      ) : (
                        <>
                          <span>Add to Calendar / RSVP</span>
                          <ArrowRight className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
