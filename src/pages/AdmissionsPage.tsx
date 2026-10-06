import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  CheckCircle, 
  FileText, 
  Clock, 
  HelpCircle, 
  Send, 
  ShieldCheck, 
  DollarSign, 
  UserPlus, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { schoolContact } from '../data/schoolData';

interface AdmissionsPageProps {
  onNavigate: (path: string) => void;
  onOpenAdmissionModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onNavigate,
  onOpenAdmissionModal
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade I',
    dob: '',
    previousSchool: ''
  });

  const ageGuidelines = [
    { grade: 'Pre-KG / Nursery', age: '3 Years completed as of May 31' },
    { grade: 'LKG (Junior KG)', age: '4 Years completed as of May 31' },
    { grade: 'UKG (Senior KG)', age: '5 Years completed as of May 31' },
    { grade: 'Grade I', age: '6 Years completed (as per NEP norm)' },
    { grade: 'Grade II to X', age: 'Based on progressive age & TC from previous school' },
    { grade: 'Grade XI (Higher Sec)', age: 'Based on Class X Board examination score & counseling' }
  ];

  const documents = [
    'Original Birth Certificate (for verification) with attested photocopy',
    'Transfer Certificate (TC) counter-signed by competent authority (for Gr. II upwards)',
    'Previous academic progress report card and conduct certificate',
    'Student and Parents’ Aadhar Card photocopies',
    '4 recent passport-size color photographs of the student in white background',
    'Community Certificate photocopy (if applicable)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50">
      <PageHeader
        category="Admissions"
        title="Admissions 2026–2027"
        subtitle="Join our close-knit, inspiring academic community. Discover our transparent admission procedure, criteria, and documentation checklist."
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Important Notice Banner */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Registrations Now Open for Pre-KG to Grade XI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Limited vacancy in primary grades to preserve our ideal 1:15 student-teacher mentorship ratio.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAdmissionModal}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Launch Admission Form
          </button>
        </div>

        {/* Step-by-Step Admission Procedure */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Step-by-Step
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
              Our Admission Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A transparent, supportive, and stress-free enrollment pathway for prospective families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center mb-3">1</span>
                <h4 className="text-base font-bold text-slate-900 font-heading">Enquiry & Registration</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Submit the online enquiry or collect the physical registration kit from our school office between 8:30 AM and 4:30 PM.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center mb-3">2</span>
                <h4 className="text-base font-bold text-slate-900 font-heading">Campus Tour & Discussion</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Visit our smart classrooms, science labs, and sports grounds. Meet our academic coordinators to understand curriculum goals.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center mb-3">3</span>
                <h4 className="text-base font-bold text-slate-900 font-heading">Informal Interaction</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A warm, welcoming conversation with the child (for Kindergarten) or diagnostic skill assessment (for Grades VI to XI).
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center mb-3">4</span>
                <h4 className="text-base font-bold text-slate-900 font-heading">Admission Confirmation</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Upon verification of credentials and enrollment fee clearance, a welcome dossier with uniform and book schedules is issued.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Age Criteria & Document Checklist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Age Criteria Table */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 text-blue-900 rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Age Eligibility Norms
                </h4>
                <p className="text-xs text-slate-500">Academic Year 2026–27</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {ageGuidelines.map((row, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{row.grade}</span>
                  <span className="text-slate-600 text-right">{row.age}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Required Documentation
                </h4>
                <p className="text-xs text-slate-500">Submission along with enrollment form</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-600">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Interactive Application Form on Page */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Online Portal
              </span>
              <h3 className="text-3xl font-extrabold text-white font-heading">
                Apply for Admission Online
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Submit this preliminary application form. Our admissions officer will contact you within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center p-8 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white font-heading">
                  Application Acknowledged!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.parentName}. We have logged the application for <strong>{formData.studentName}</strong> into <strong>{formData.grade}</strong>. Our team will reach you at {formData.phone}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Sundaram"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Grade Applying For *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Pre-KG / Nursery">Pre-KG / Nursery</option>
                      <option value="LKG / Junior KG">LKG / Junior KG</option>
                      <option value="UKG / Senior KG">UKG / Senior KG</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II">Grade II</option>
                      <option value="Grade III">Grade III</option>
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X</option>
                      <option value="Grade XI - Science">Grade XI - Science</option>
                      <option value="Grade XI - Commerce">Grade XI - Commerce</option>
                      <option value="Grade XI - Humanities">Grade XI - Humanities</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sundaram"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Previous School Attended (If Any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai Montessori Academy"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-amber-400/10"
                  >
                    Submit Formal Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
