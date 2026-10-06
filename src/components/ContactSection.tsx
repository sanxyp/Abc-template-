import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { schoolContact } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Reach Out to Our Campus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Contact ABC School
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We are always here to answer your queries, welcome you for a personalized campus tour, and assist with admission details.
          </p>
        </div>

        {/* Contact Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Campus Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Campus Address
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                  ABC SCHOOL
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  123 School Road,<br />
                  Chennai, Tamil Nadu, India – 600001
                </p>
              </div>

              {/* Direct Quick Action Buttons (Call / Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${schoolContact.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Campus</span>
                </a>

                <a
                  href={`mailto:${schoolContact.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4 text-slate-950" />
                  <span>Email Inquiries</span>
                </a>
              </div>

              {/* Detailed Contact Points */}
              <div className="pt-4 border-t border-slate-100 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Telephone & Helpdesk
                    </span>
                    <a href={`tel:${schoolContact.phone}`} className="font-semibold text-slate-900 hover:text-blue-900 block">
                      {schoolContact.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500">Admissions Mobile: {schoolContact.mobile}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Official Correspondence
                    </span>
                    <a href={`mailto:${schoolContact.email}`} className="font-semibold text-slate-900 hover:text-blue-900 block">
                      {schoolContact.email}
                    </a>
                    <span className="text-xs text-slate-500">Admissions: {schoolContact.admissionsEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Opening Hours
                    </span>
                    <p className="font-semibold text-slate-900">
                      Monday – Saturday: 8:30 AM – 4:30 PM
                    </p>
                    <span className="text-xs text-slate-500">Closed on Sundays & Gazetted Public Holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Card Placeholder */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Location & Directions
                  </span>
                </div>
                <span className="text-xs text-slate-400">Chennai Central Region</span>
              </div>

              {/* Styled Map Representation */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center group">
                {/* Visual Map Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-40" 
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* Road lines simulation */}
                <div className="absolute w-full h-4 bg-slate-300 -rotate-12 transform top-1/2 -translate-y-1/2" />
                <div className="absolute h-full w-4 bg-slate-300 rotate-45 transform left-1/3" />
                
                {/* Pin Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 font-heading">ABC School Campus</h5>
                    <p className="text-[11px] text-slate-500">123 School Road, Chennai</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3 text-center">
                Easily accessible via Metro and major suburban transport routes. Ample visitor parking available.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our administrative team will respond promptly to your inquiry.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message regarding "{formData.subject}" has been received. Our coordinator will reply to <span className="font-semibold">{formData.email}</span> or contact you at <span className="font-semibold">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Meenakshi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98400 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. meenakshi@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Subject of Inquiry *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admission Criteria">Admission Criteria & Fees</option>
                        <option value="Campus Tour Booking">Campus Tour Booking</option>
                        <option value="Transportation Route">Transportation Route Query</option>
                        <option value="Faculty Career">Careers & Faculty Recruitment</option>
                        <option value="TC or Document Request">Transfer Certificate / Records</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Question *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details about your ward's current grade or your specific query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      We respect your privacy and never share contact details.
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 shadow-md"
                    >
                      {submitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
