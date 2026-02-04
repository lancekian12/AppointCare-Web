import React from "react";
import { ShieldCheck, Calendar, BriefcaseMedical, Stethoscope, Users, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* keep only small CSS for shapes + details marker rotation - avoid Tailwind @apply so styles render reliably */}
      <style>{`
        .blob-shape { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary .expand-icon { transform: rotate(180deg); }
      `}</style>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wide bg-[#008081]/10 text-[#008081]">
                <ShieldCheck className="w-5 h-5" />
                TRUSTED HEALTHCARE PARTNER
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] text-slate-900 dark:text-white">
                Your Health,<br />Our <span className="text-[#008081]">Priority</span>
              </h1>

              <p className="text-xl max-w-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Experience world-class healthcare with personalized treatment plans. Book appointments with top specialists in minutes.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#008081] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center gap-2">
                  Book Appointment
                  <Calendar className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 rounded-full font-bold text-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  View Services
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-xs font-bold">DR</div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-300 flex items-center justify-center text-xs font-bold">AN</div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-400 flex items-center justify-center text-xs font-bold">MK</div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900 dark:text-white">500+ Specialists</p>
                  <p className="text-slate-500">Available for consultation</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] from-[#81B641] to-[#008081] blob-shape -rotate-12 blur-2xl bg-gradient-to-tr opacity-60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#008081]/10 to-[#81B641]/10 blob-shape rotate-6" />

              <div className="relative w-full max-w-[500px] aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#008081] to-[#81B641] blob-shape opacity-20 transform translate-x-4 translate-y-4" />

                <div className="relative w-full h-full blob-shape overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border-[12px] border-white dark:border-slate-800">
                  <img
                    alt="Healthcare professional smiling"
                    className="w-full h-full object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtBjkVe-l9b7uiQblmuCuDfUNkH2tacvBMcVpaea4IIe3Do7_sGompbZ3ECzmwsMtvj00E4_bektIGINXPXfWYA8RiQX8KmRwOy8_9h0r1cPlUnToR-eQ3IvmUi9t2Teurv7gCVTD6CEByUkgElSvS0BkmD1mFSAAkKRBvsWArcdx56p0b9XEjORwfKa9v2ppz2ziILTJh0rQ21S5VZcTt_3ag3th-D6xhVNtztFvipKqU8QZaCWeRBfVnvn4xWQ0iRmvevD1yqYM"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#008081]/20 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#81B641] flex items-center justify-center text-white">
                    <BriefcaseMedical className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Available</p>
                    <p className="text-xl font-extrabold text-slate-800 dark:text-white">24/7 Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-[#008081] font-bold tracking-widest uppercase text-sm mb-4">Our Specialties</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">High-Quality Services for You</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">We provide a wide range of medical services designed to support your health at every stage of life.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-[#008081]/10 rounded-2xl flex items-center justify-center text-[#008081] mb-6">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Primary Care</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Comprehensive health assessments and routine checkups for adults of all ages.</p>
                <a className="text-[#008081] font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <ChevronRight className="w-4 h-4" /></a>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-[#81B641]/10 rounded-2xl flex items-center justify-center text-[#81B641] mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Pediatrics</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Specialized medical care for infants, children, and adolescents in a friendly environment.</p>
                <a className="text-[#81B641] font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <ChevronRight className="w-4 h-4" /></a>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-[#008081]/10 rounded-2xl flex items-center justify-center text-[#008081] mb-6">
                  <BriefcaseMedical className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Dental Care</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Advanced dental treatments ranging from preventive cleanings to aesthetic restorations.</p>
                <a className="text-[#008081] font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <ChevronRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-[#0f172a] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#008081] font-bold tracking-widest uppercase text-sm mb-4">Support Center</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Find answers to common queries about our services and booking process.</p>
            </div>

            <div className="space-y-4">
              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">How do I book an appointment?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Booking an appointment is easy! You can click the "Book Appointment" button on our homepage, select your preferred specialist, choose a time slot that suits you, and confirm your booking instantly.</p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">What specialties do you offer?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We offer a wide range of specialties including Primary Care, Pediatrics, Dental Care, Cardiology, Dermatology, and more. Our network includes over 500 verified specialists across various medical fields.</p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">Are online consultations available?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Yes, we provide secure tele-health consultations for various medical needs. This allows you to speak with a specialist from the comfort of your home.</p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">What insurance plans do you accept?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We accept most major insurance plans. You can verify your specific insurance provider during the booking process or contact our support team for a detailed list.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
