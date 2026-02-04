// src/pages/Login.tsx
import React, { useState } from "react";
import {
  Calendar,
  MessageSquare,
  Pill,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setEmail("");
      setPassword("");
      setTimeout(() => setSuccess(false), 3000);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      {/* Back button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
          relative sm:fixed
          sm:top-6 sm:left-6
          mx-4 mt-4 sm:mt-0
          z-50
          rounded-lg border border-slate-200
          bg-white px-4 py-2
          text-sm font-semibold text-slate-600
          shadow-sm
          hover:border-[#008081]/40 hover:text-[#008081]
          transition-all
        "
      >
        Back
      </button>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Intro / Brand */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 text-slate-600">
            WELCOME TO
          </p>

          <div className="flex flex-col items-center gap-2">
            <span
              className="material-icons text-[#008081]"
              style={{ fontSize: "44px" }}
            >
              eco
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
              APPOINT <span className="text-[#81B641]">CARE</span>
            </h1>
          </div>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-indigo-50 p-4 rounded-2xl mb-3">
              <Calendar className="text-indigo-500" size={32} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Book</h3>
            <p className="text-xs text-slate-500">
              Easily connect with your doctors
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-red-50 p-4 rounded-2xl mb-3">
              <MessageSquare
                className="text-red-400"
                fill="currentColor"
                size={32}
              />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Consult</h3>
            <p className="text-xs text-slate-500">
              Visit your doctor or consult online
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-cyan-50 p-4 rounded-2xl mb-3">
              <Pill className="text-cyan-400" size={32} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Prescription</h3>
            <p className="text-xs text-slate-500">
              You can take your medicine or prescription
            </p>
          </div>
        </div>

        <hr className="border-slate-100 mb-10 sm:mb-12" />

        {/* Login card */}
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#81B641] mb-2">
              Log In
            </h2>
            <p className="text-sm text-slate-500">
              Please complete the following details to proceed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-3
                  rounded-lg border border-slate-200
                  bg-white
                  focus:ring-1 focus:ring-[#008081]
                  focus:border-[#008081]
                  outline-none
                  transition-all
                  text-sm
                "
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password *
                </label>

              </div>

              <input
                type="password"
                required
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full px-4 py-3
                  rounded-lg border border-slate-200
                  bg-white
                  focus:ring-1 focus:ring-[#008081]
                  focus:border-[#008081]
                  outline-none
                  transition-all
                  text-sm
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="
                w-full bg-[#008081] text-white
                py-3.5 rounded-lg
                font-bold text-base
                hover:brightness-110
                transition-all
                shadow-sm
                flex items-center justify-center gap-2
              "
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-slate-500">
              Don&apos;t have an account?
              <a className="text-[#008081] font-bold ml-1 hover:underline" href="#">
                Sign Up
              </a>
            </p>
            <a
              className="text-xs text-slate-400 hover:text-[#008081]"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </main>

      {/* Success toast */}
      {success && (
        <div
          className="
            fixed bottom-4
            left-1/2 -translate-x-1/2
            sm:left-auto sm:right-4 sm:translate-x-0
            z-50
            bg-white border border-slate-200
            rounded-xl shadow-lg
            px-4 py-3
          "
        >
          <div className="font-semibold text-slate-800">
            Logged in (demo)
          </div>
        </div>
      )}
    </div>
  );
}
