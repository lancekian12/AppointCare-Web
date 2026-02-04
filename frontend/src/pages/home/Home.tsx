import React from "react";
import {
  ShieldCheck,
  Calendar,
  BriefcaseMedical,
  Stethoscope,
  Users,
  ChevronRight,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* small CSS for blob shape + details marker */}
      <style>{`
        .blob-shape { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary .expand-icon { transform: rotate(180deg); }
      `}</style>

      <main>
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: copy */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold tracking-wide bg-[#008081]/10 text-[#008081]">
                <ShieldCheck className="w-4 h-4" />
                TRUSTED HEALTHCARE PARTNER
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight sm:leading-[1.05] text-slate-900 dark:text-white">
                Your Health,
                <br />
                Our <span className="text-[#008081]">Priority</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
                Experience world-class healthcare with personalized treatment plans.
                Book appointments with top specialists in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-lg bg-[#008081] text-white hover:shadow-xl hover:brightness-110 transition-all"
                  aria-label="Book appointment"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>

                <button
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  aria-label="View services"
                >
                  View Services
                </button>
              </div>

              <div className="flex items-center gap-4 pt-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                    DR
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-300 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                    AN
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-400 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                    MK
                  </div>
                </div>

                <div className="text-sm">
                  <p className="font-bold text-slate-900 dark:text-white">500+ Specialists</p>
                  <p className="text-slate-500">Available for consultation</p>
                </div>
              </div>
            </div>

            {/* Right: image / art */}
            <div className="relative flex justify-center lg:justify-end">
              {/* blob backgrounds - smaller on xs, larger on sm+ */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[160%] sm:w-[120%] sm:h-[120%] bg-gradient-to-tr from-[#81B641]/60 to-[#008081]/60 blob-shape -rotate-12 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] sm:w-full sm:h-full bg-gradient-to-br from-[#008081]/10 to-[#81B641]/10 blob-shape rotate-6" />

              <div className="relative w-full max-w-[420px] sm:max-w-[500px]">
                {/* On very small screens use a fixed height; on sm+ keep aspect */}
                <div className="w-full h-64 sm:aspect-[4/5] sm:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#008081] to-[#81B641] blob-shape opacity-20 translate-x-4 translate-y-4" />

                  <div className="relative w-full h-full blob-shape overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border-[10px] sm:border-[12px] border-white dark:border-slate-800">
                    <img
                      alt="Healthcare professional smiling"
                      className="w-full h-full object-cover object-center"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtBjkVe-l9b7uiQblmuCuDfUNkH2tacvBMcVpaea4IIe3Do7_sGompbZ3ECzmwsMtvj00E4_bektIGINXPXfWYA8RiQX8KmRwOy8_9h0r1cPlUnToR-eQ3IvmUi9t2Teurv7gCVTD6CEByUkgElSvS0BkmD1mFSAAkKRBvsWArcdx56p0b9XEjORwfKa9v2ppz2ziILTJh0rQ21S5VZcTt_3ag3th-D6xhVNtztFvipKqU8QZaCWeRBfVnvn4xWQ0iRmvevD1yqYM"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#008081]/20 to-transparent" />
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#81B641] flex items-center justify-center text-white">
                    <BriefcaseMedical className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Available</p>
                    <p className="text-sm sm:text-xl font-extrabold text-slate-800 dark:text-white">24/7 Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-[#008081] font-bold tracking-widest uppercase text-sm mb-3">Our Specialties</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">High-Quality Services for You</h3>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400">We provide a wide range of medical services designed to support your health at every stage of life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <article className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#008081]/10 rounded-2xl flex items-center justify-center text-[#008081] mb-4 sm:mb-6">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Primary Care</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Comprehensive health assessments and routine checkups for adults of all ages.</p>
                <a className="text-[#008081] font-bold flex items-center gap-1 text-sm sm:text-base hover:gap-2 transition-all" href="#">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </article>

              <article className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#81B641]/10 rounded-2xl flex items-center justify-center text-[#81B641] mb-4 sm:mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Pediatrics</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Specialized medical care for infants, children, and adolescents in a friendly environment.</p>
                <a className="text-[#81B641] font-bold flex items-center gap-1 text-sm sm:text-base hover:gap-2 transition-all" href="#">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </article>

              <article className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#008081]/10 rounded-2xl flex items-center justify-center text-[#008081] mb-4 sm:mb-6">
                  <BriefcaseMedical className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Dental Care</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Advanced dental treatments ranging from preventive cleanings to aesthetic restorations.</p>
                <a className="text-[#008081] font-bold flex items-center gap-1 text-sm sm:text-base hover:gap-2 transition-all" href="#">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white dark:bg-[#0f172a] py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-[#008081] font-bold tracking-widest uppercase text-sm mb-3">Support Center</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400">Find answers to common queries about our services and booking process.</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">How do I book an appointment?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Booking an appointment is easy! Click the "Book Appointment" button, select your preferred specialist, choose a time slot, and confirm.
                  </p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">What specialties do you offer?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    We offer Primary Care, Pediatrics, Dental Care, Cardiology, Dermatology, and more. Our network includes 500+ verified specialists.
                  </p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">Are online consultations available?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Yes — secure tele-health consultations are available so you can speak with a specialist from home.
                  </p>
                </div>
              </details>

              <details className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">What insurance plans do you accept?</h4>
                  <ChevronRight className="text-[#008081] transition-transform duration-300 expand-icon" />
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    We accept most major insurance plans. Verify during booking or contact our support team for details.
                  </p>
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
