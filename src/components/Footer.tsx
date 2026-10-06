import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ArrowUpRight,
  Shield,
  Award
} from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News & Events', path: '/events' },
    { label: 'Contact', path: '/contact' }
  ];

  const importantLinks = [
    { label: 'Mandatory Public Disclosure', path: '/about' },
    { label: 'Admission Guidelines & Fee Policy', path: '/admissions' },
    { label: 'Academic Calendar & Syllabus', path: '/academics' },
    { label: 'Child Protection & Safety Policy', path: '/facilities' },
    { label: 'Careers & Faculty Recruitment', path: '/contact' },
    { label: 'Student Transfer Certificate (TC) Portal', path: '/contact' }
  ];

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Pre-Footer Callout */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold font-heading">
                Admissions Open for Academic Year 2026–2027
              </h4>
              <p className="text-sm text-slate-400 mt-0.5">
                Limited seats available in Pre-KG, Kindergarten, Grade I and Grade XI streams.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissionModal}
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-400/10"
            >
              Enquire for Admission
            </button>
            <button
              onClick={() => handleLink('/contact')}
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/15"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Institutional Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: School Branding & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <SchoolLogo size="lg" light />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              ABC School is a distinguished center of educational distinction in Chennai, devoted to nurturing intellectual curiosity, ethical character, and all-round leadership in every child since 2001.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Affiliated to Central Board of Secondary Education (CBSE), New Delhi</span>
              </div>
              <div className="text-slate-500 pl-6">
                Affiliation Code: 1930452 · School Examination Code: 55432
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-3">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#facebook"
                  aria-label="ABC School on Facebook"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#instagram"
                  aria-label="ABC School on Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#youtube"
                  aria-label="ABC School on YouTube"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#linkedin"
                  aria-label="ABC School on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link.path)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Important Links / Policies */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-heading">
              Important Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link.path)}
                    className="text-slate-400 hover:text-white transition-colors flex items-start gap-1.5 group text-left"
                  >
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">›</span>
                    <span className="leading-snug">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-heading">
              Campus Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white block font-medium">ABC SCHOOL</strong>
                  123 School Road,<br />
                  Chennai, Tamil Nadu, India – 600001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${schoolContact.phone}`} className="hover:text-white transition-colors">
                  {schoolContact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${schoolContact.email}`} className="hover:text-white transition-colors">
                  {schoolContact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300">Office Hours</span>
                  <span>Monday – Saturday: 8:30 AM – 4:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ABC School. All Rights Reserved. Recognized by Govt. of Tamil Nadu & Affiliated to CBSE.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLink('/about')} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleLink('/about')} className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleLink('/contact')} className="hover:text-slate-400 transition-colors">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
