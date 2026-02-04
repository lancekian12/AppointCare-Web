import { useNavigate, Link } from "react-router-dom";
import { User, Stethoscope } from "lucide-react";
export default function Signup(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className=" bg-background-light text-slate-900 flex flex-col">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm hover:border-[#008081]/40 hover:text-[#008081] transition-all"
      >
        Back
      </button>

      <main className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 py-12 w-full">
        {/* Brand / Intro */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="text-primary flex items-center justify-center">
              <span
                className="material-icons text-[#008081]"
                style={{ fontSize: "50px" }}
              >
                eco
              </span>{" "}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-800">
              APPOINT <span className="text-[#81B641]">CARE</span>
            </h1>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#008081] mb-2">
              Create an Account
            </h2>
            <p className="text-slate-500">
              Please select your account type to get started
            </p>
          </div>
        </div>

        {/* Selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Patient card */}
          <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-[#008081]/20 hover:-translate-y-1">
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-cyan-50 text-cyan-500">
              <User size={36} className="text-cyan-500" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Sign up as a Patient
            </h3>

            <p className="text-center text-slate-500 mb-8 text-sm leading-relaxed">
              Book appointments, manage your prescriptions, and consult with top
              healthcare professionals online.
            </p>

            <button
              onClick={() => navigate("/PatientSignup")}
              type="button"
              className="w-full bg-[#008081] text-white py-3.5 rounded-lg font-bold text-base hover:brightness-110 transition-all shadow-sm"
            >
              Select
            </button>
          </div>

          {/* Doctor card */}
          <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-[#008081]/20 hover:-translate-y-1">
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-emerald-50 text-emerald-500">
              <Stethoscope size={36} className="text-emerald-500" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Sign up as a Doctor
            </h3>

            <p className="text-center text-slate-500 mb-8 text-sm leading-relaxed">
              Manage your clinic schedule, connect with patients via
              teleconsultation, and streamline your practice.
            </p>

            <button
              onClick={() => navigate("/DoctorSignup")}
              type="button"
              className="w-full bg-[#008081] text-white py-3.5 rounded-lg font-bold text-base hover:brightness-110 transition-all shadow-sm"
            >
              Select
            </button>
          </div>
        </div>

        {/* bottom link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?
            <Link
              to="/Login"
              className="text-[#008081] font-bold hover:underline ml-1"
            >
              Log In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
