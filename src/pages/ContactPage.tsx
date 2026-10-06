import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building, 
  ShieldCheck, 
  Bus, 
  HelpCircle 
} from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const departments = [
    {
      title: 'Admissions & Enrollment Desk',
      officer: 'Mrs. Jayashree Ramanathan',
      phone: schoolContact.mobile,
      email: schoolContact.admissionsEmail,
      hours: 'Mon – Sat: 8:30 AM – 4:00 PM'
    },
    {
      title: 'Accounts & Fee Clarification',
      officer: 'Mr. R. Balaji',
      phone: '+91 44 2835 1235',
      email: 'accounts@abcschool.com',
      hours: 'Mon – Fri: 9:00 AM – 3:30 PM'
    },
    {
      title: 'Transportation & Bus Logistics',
      officer: 'Mr. K. Murugan',
      phone: '+91 98401 55678',
      email: 'transport@abcschool.com',
      hours: 'Mon – Sat: 7:30 AM – 5:00 PM'
    },
    {
      title: 'Principal’s Secretariat',
      officer: 'Executive Secretary',
      phone: schoolContact.phone,
      email: 'principal@abcschool.com',
      hours: 'By prior appointment on working days'
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Contact"
        title="Get in Touch with ABC School"
        subtitle="We invite prospective parents, students, alumni, and educators to connect with our campus community in Chennai."
        onNavigate={onNavigate}
      />

      {/* Campus Helpdesks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
            Department Contacts
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Direct Campus Desks
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            For specialized administrative, financial, transport, or admissions assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {dept.title}
                </h4>
                <p className="text-xs font-medium text-amber-700 mt-0.5">
                  {dept.officer}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`tel:${dept.phone}`} className="hover:text-blue-900 font-medium">{dept.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`mailto:${dept.email}`} className="hover:text-blue-900 font-medium truncate">{dept.email}</a>
                  </div>
                  <div className="flex items-start gap-2 pt-1 text-slate-400 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                    <span>{dept.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Contact Section with Form & Map */}
      <ContactSection />
    </div>
  );
};
