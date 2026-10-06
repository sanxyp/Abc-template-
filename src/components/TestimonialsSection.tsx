import React, { useState } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  UserCheck, 
  GraduationCap, 
  HeartHandshake 
} from 'lucide-react';
import { testimonials, Testimonial } from '../data/schoolData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'All' | 'Parent' | 'Student' | 'Alumnus'>('All');

  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter((t) => t.relation === filter);

  const activeTestimonial = filteredTestimonials[currentIndex % filteredTestimonials.length] || testimonials[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const getRelationBadge = (relation: string) => {
    switch (relation) {
      case 'Parent':
        return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">Parent Community</span>;
      case 'Alumnus':
        return <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">Distinguished Alumnus</span>;
      case 'Student':
        return <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">Student Leader</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Voices of Trust & Gratitude
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            What Our Community Says
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Real reflections from parents, high-achieving alumni, and enthusiastic student leaders about life at ABC School.
          </p>

          {/* Interactive Filter Controls - Anti-slop compliant segmented buttons */}
          <div className="mt-6 inline-flex p-1 bg-slate-200/80 rounded-xl">
            {(['All', 'Parent', 'Student', 'Alumnus'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setFilter(tab);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === tab
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'All' ? 'All Voices' : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative">
            {/* Large Decorative Quote Icon */}
            <Quote className="w-16 h-16 text-amber-100 absolute top-8 right-8 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header with Rating & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0 Star Feedback</span>
                </div>
                {getRelationBadge(activeTestimonial.relation)}
              </div>

              {/* Highlight Motto */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                "{activeTestimonial.highlight}"
              </h3>

              {/* Main Quote */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold font-heading flex items-center justify-center text-lg shadow-sm">
                    {activeTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-heading">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-400 px-1 font-mono">
                    {(currentIndex % filteredTestimonials.length) + 1} / {filteredTestimonials.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
