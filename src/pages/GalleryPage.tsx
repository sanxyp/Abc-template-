import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoGallerySection } from '../components/PhotoGallerySection';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Media & Archives"
        title="Campus Photo Gallery"
        subtitle="Explore snapshots of life at ABC School—from classroom discoveries to championship celebrations."
        onNavigate={onNavigate}
      />

      <PhotoGallerySection standalone />
    </div>
  );
};
