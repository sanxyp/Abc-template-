/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on active route
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'ABC School – Inspiring Young Minds, Building Bright Futures',
      '/about': 'About Us – ABC School Chennai Heritage & Leadership',
      '/academics': 'Academics & Curriculum – ABC School Chennai',
      '/admissions': 'Admissions 2026–27 – ABC School Chennai',
      '/campus-life': 'Campus Life & Student Activities – ABC School',
      '/facilities': 'Campus Facilities & Labs – ABC School',
      '/achievements': 'Achievements & Excellence – ABC School',
      '/gallery': 'Photo Gallery – ABC School Campus Life',
      '/events': 'News & Events Calendar – ABC School',
      '/contact': 'Contact Us & Campus Directions – ABC School'
    };

    const title = pageTitles[currentPath] || 'ABC School – Inspiring Young Minds';
    document.title = title;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/academics':
        return (
          <AcademicsPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/admissions':
        return (
          <AdmissionsPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/campus-life':
        return (
          <CampusLifePage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/facilities':
        return (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/achievements':
        return (
          <AchievementsPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case '/events':
        return (
          <EventsPage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        // Fallback to Home if unknown route
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Header with Navigation and Admission CTA */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Institutional Large Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />

      {/* Global Interactive Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* Floating Actions (Helpdesk & Back to Top) */}
      <FloatingActions
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />
    </div>
  );
}
