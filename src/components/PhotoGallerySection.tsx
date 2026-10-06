import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { galleryPhotos, GalleryPhoto } from '../data/schoolData';

interface PhotoGallerySectionProps {
  onViewMore?: () => void;
  standalone?: boolean;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  onViewMore,
  standalone = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Cultural', 'Students', 'Activities'];

  const filteredPhotos = selectedCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === selectedCategory);

  const activeLightboxPhoto: GalleryPhoto | null = 
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section className={`py-20 lg:py-28 ${standalone ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Visual Campus Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Photo Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Capturing the joyous milestones, sports spirit, artistic celebrations, and scientific inquiries of ABC School.
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 bg-slate-900 aspect-4/3 transition-all duration-300"
            >
              <img
                src={photo.imgUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Floating Zoom Icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-slate-900/80 backdrop-blur-md text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Text Info */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  {photo.category}
                </span>
                <h4 className="text-sm font-bold font-heading line-clamp-1 group-hover:text-amber-200 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="p-4 bg-slate-950/80 flex items-center justify-between text-white border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-xs font-bold">
                    {activeLightboxPhoto.category}
                  </span>
                  <span className="text-sm font-semibold truncate max-w-xs sm:max-w-md">
                    {activeLightboxPhoto.title}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Preview Container */}
              <div className="relative aspect-16/10 max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeLightboxPhoto.imgUrl}
                  alt={activeLightboxPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left/Right Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-slate-950 text-slate-300 text-xs flex items-center justify-between">
                <p>{activeLightboxPhoto.caption}</p>
                <span className="text-slate-500 font-mono">
                  {lightboxIndex! + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
