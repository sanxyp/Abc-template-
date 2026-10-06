import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { QuickInfoBar } from '../components/QuickInfoBar';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AcademicsSection } from '../components/AcademicsSection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { CampusLifeSection } from '../components/CampusLifeSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PhotoGallerySection } from '../components/PhotoGallerySection';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const handleExploreClick = () => {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/about');
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenAdmissionModal={onOpenAdmissionModal}
        onExploreClick={handleExploreClick}
      />

      {/* 2. Quick Information Bar */}
      <QuickInfoBar />

      {/* 3. About ABC School */}
      <AboutSection onLearnMore={() => onNavigate('/about')} />

      {/* 4. Why Choose ABC School */}
      <WhyChooseUs onLearnMore={() => onNavigate('/about')} />

      {/* 5. Academics Section */}
      <AcademicsSection
        onViewMore={() => onNavigate('/academics')}
        onOpenAdmissionModal={onOpenAdmissionModal}
      />

      {/* 6. School Facilities */}
      <FacilitiesSection onExploreMore={() => onNavigate('/facilities')} />

      {/* 7. Campus Life */}
      <CampusLifeSection onExploreMore={() => onNavigate('/campus-life')} />

      {/* 8. Achievements: Celebrating Excellence */}
      <AchievementsSection onViewAll={() => onNavigate('/achievements')} />

      {/* 9. Principal's Message */}
      <PrincipalMessage />

      {/* 10. Admissions Section CTA */}
      <AdmissionsCTA
        onApply={onOpenAdmissionModal}
        onContact={() => onNavigate('/contact')}
      />

      {/* 11. News & Events */}
      <NewsEventsSection onViewAllEvents={() => onNavigate('/events')} />

      {/* 12. Testimonials Carousel */}
      <TestimonialsSection />

      {/* 13. Photo Gallery */}
      <PhotoGallerySection onViewMore={() => onNavigate('/gallery')} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* 14. Contact Section */}
      <ContactSection />
    </div>
  );
};
