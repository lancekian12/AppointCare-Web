// src/pages/Login.tsx
import React, { useState } from "react";
import {  Calendar, MessageSquare, Pill, Mail, Lock } from "lucide-react";
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
    // simulate submit
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
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm hover:border-[#008081]/40 hover:text-[#008081] transition-all"
      >
        Back
      </button>
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro / Brand */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-slate-600">
            WELCOME TO
          </p>

          <div className="flex flex-col items-center gap-2">
            <div
              className="text-[#008081] flex items-center justify-center"
              aria-hidden
            >
              {/* logo: lucide Leaf to replace material-symbols 'eco' */}
              <span
                className="material-icons text-[#008081]"
                style={{ fontSize: "50px" }}
              >
                eco
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-800">
              APPOINT <span className="text-[#81B641]">CARE</span>
            </h1>
          </div>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-indigo-50 p-4 rounded-2xl mb-4">
              <Calendar className="text-indigo-500" size={36} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Book</h3>
            <p className="text-xs text-slate-500">
              Easily connect with your doctors
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-red-50 p-4 rounded-2xl mb-4">
              <MessageSquare
                className="text-red-400"
                fill="currentColor"
                size={36}
              />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Consult</h3>
            <p className="text-xs text-slate-500">
              Visit your doctor or consult online
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-cyan-50 p-4 rounded-2xl mb-4">
              <Pill className="text-cyan-400" size={36} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Prescription</h3>
            <p className="text-xs text-slate-500">
              You can take your medicine or prescription
            </p>
          </div>
        </div>

        <hr className="border-slate-100 mb-12" />

        {/* Login card */}
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#81B641] mb-2">Log In</h2>
            <p className="text-sm text-slate-500">
              Please complete the following details to proceed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Email *
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-1 focus:ring-[#008081] focus:border-[#008081] outline-none transition-all text-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password *
                </label>
                <a
                  className="text-sm text-[#008081] hover:underline font-medium"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-1 focus:ring-[#008081] focus:border-[#008081] outline-none transition-all text-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#008081] text-white py-3.5 rounded-lg font-bold text-base hover:brightness-110 transition-all shadow-sm flex items-center justify-center gap-2"
              disabled={submitting}
              aria-live="polite"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-sm text-slate-500">
              Don't have an account?
              <a
                className="text-[#008081] font-bold hover:underline ml-1"
                href="#"
              >
                Sign Up
              </a>
            </p>
            <p>
              <a
                className="text-xs text-slate-400 hover:text-[#008081] transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* success toast */}
      {success && (
        <div className="fixed right-4 bottom-4 z-50 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3">
          <div className="font-semibold text-slate-800">Logged in (demo)</div>
        </div>
      )}
    </div>
  );
}
