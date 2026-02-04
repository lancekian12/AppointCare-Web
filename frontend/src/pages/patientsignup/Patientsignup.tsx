import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

const initialForm: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

export default function Patientsignup(): JSX.Element {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormFields> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.dob) e.dob = "Date of birth is required";
    if (!form.gender) e.gender = "Please select a gender";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    // For now we just log the data. Replace with API call (axios/fetch) if you want.
    console.log("Submitting patient signup:", form);
    setSubmitted(true);
  };

  return (
    <div className="bg-background-light text-slate-900 min-h-screen flex flex-col">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
    inline-flex items-center justify-center
    w-fit
    self-start
    relative sm:fixed
    sm:top-6 sm:left-6
    mt-4 ml-4 sm:m-0
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
      <main
        className="
  flex-grow flex flex-col
  items-center
  justify-start sm:justify-center
  w-full max-w-lg mx-auto
  px-4 py-8 sm:py-12
"
      >
        {" "}
        <div className="text-center mb-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-primary flex items-center justify-center">
              <span
                className="material-icons text-[#008081]"
                style={{ fontSize: "50px" }}
              >
                eco
              </span>{" "}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800 uppercase">
              APPOINT <span className="text-[#81B641]">CARE</span>
            </h1>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[#008081] mb-2">
              Patient Registration
            </h2>
            <p className="text-slate-500">
              Join our community for better healthcare access
            </p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  type="text"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.firstName ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  type="text"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.lastName ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                type="email"
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.email ? "border-rose-500" : "border-slate-200"}`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                type="tel"
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.phone ? "border-rose-500" : "border-slate-200"}`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                type="date"
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.dob ? "border-rose-500" : "border-slate-200"}`}
              />
              {errors.dob && (
                <p className="mt-1 text-xs text-rose-600">{errors.dob}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em] ${errors.gender ? "border-rose-500" : "border-slate-200"}`}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-xs text-rose-600">{errors.gender}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a secure password"
                type="password"
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.password ? "border-rose-500" : "border-slate-200"}`}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-rose-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1.5"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                type="password"
                className={`w-full px-4 py-3 bg-white border rounded-lg text-slate-700 focus:outline-none transition placeholder:text-slate-400 ${errors.confirmPassword ? "border-rose-500" : "border-slate-200"}`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-rose-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="
    w-full bg-[#008081]
    text-white py-4
    rounded-lg
    font-bold text-base
    active:scale-[0.99]
    hover:brightness-110
    transition-all
    shadow-md shadow-primary/10
  "
              >
                Create Account
              </button>
            </div>

            {submitted && (
              <div className="mt-4 text-center text-sm text-emerald-600">
                Account data ready (check console). Replace console.log with API
                call if you want.
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?
              <a
                className="text-primary font-bold hover:underline ml-1"
                href="#"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
