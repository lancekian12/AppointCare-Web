import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    // Simulated send — replace with actual fetch/axios call to your backend
    setTimeout(() => {
      console.log("Form submitted", form);
      setForm({ name: "", email: "", subject: "", message: "" });
      setSubmitting(false);
      setSuccess(true);

      // hide success after 3.5s
      setTimeout(() => setSuccess(false), 3500);
    }, 900);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-inter">
      {/* Page wrapper */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column (form + contacts) */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                Get in <span className="text-[#008081]">Touch</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Have questions about our services or need assistance with your appointment? Our team is here to help you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mb-12" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#008081] outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#008081] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#008081] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#008081] outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                aria-live="polite"
                className={`w-full sm:w-auto bg-[#008081] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 ${submitting ? "opacity-80 pointer-events-none" : ""}`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-icons text-sm">send</span>
                  </>
                )}
              </button>
            </form>

            {/* Contact info */}
            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#008081]/10 flex items-center justify-center text-[#008081]">
                  <span className="material-icons text-base">phone</span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white">Call Us</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">+1 (555) 000-0000</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#008081]/10 flex items-center justify-center text-[#008081]">
                  <span className="material-icons text-base">email</span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white">Email</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">info@appointcare.com</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#008081]/10 flex items-center justify-center text-[#008081]">
                  <span className="material-icons text-base">location_on</span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white">Visit Us</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">123 Health Ave, Medical District</p>
              </div>
            </div>
          </div>

          {/* Right column (doctor image + blob + response badge) */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative py-10">
            {/* blob shape */}
            <div className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 transform scale-110 -rotate-6"
              style={{
                borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
                background: "linear-gradient(135deg, #008081 0%, #81B641 100%)"
              }}
            />

            <div className="absolute w-[80%] h-[80%] lg:w-[450px] lg:h-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl ring-8 ring-white dark:ring-slate-800"
              style={{
                borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
                background: "linear-gradient(135deg, #008081 0%, #81B641 100%)",
              }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtBjkVe-l9b7uiQblmuCuDfUNkH2tacvBMcVpaea4IIe3Do7_sGompbZ3ECzmwsMtvj00E4_bektIGINXPXfWYA8RiQX8KmRwOy8_9h0r1cPlUnToR-eQ3IvmUi9t2Teurv7gCVTD6CEByUkgElSvS0BkmD1mFSAAkKRBvsWArcdx56p0b9XEjORwfKa9v2ppz2ziILTJh0rQ21S5VZcTt_3ag3th-D6xhVNtztFvipKqU8QZaCWeRBfVnvn4xWQ0iRmvevD1yqYM"
                alt="Healthcare professional smiling"
                className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#008081]/30 to-transparent" />
            </div>

            {/* Response Badge */}
            <div className="absolute bottom-10 left-0 sm:-left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-[#81B641] flex items-center justify-center text-white">
                <span className="material-icons">verified</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Time</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">Under 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* success toast / badge */}
        {success && (
          <div className="fixed right-6 bottom-6 z-50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#81B641] flex items-center justify-center text-white">
              <span className="material-icons">check</span>
            </div>
            <div>
              <div className="font-semibold text-slate-800 dark:text-white">Message sent</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Thanks — we’ll get back to you within 24 hours.</div>
            </div>
          </div>
        )}
      </section>



      {/* inline helper styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
