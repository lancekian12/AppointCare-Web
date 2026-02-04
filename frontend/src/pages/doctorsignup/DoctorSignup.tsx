import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UploadCloud, Camera, Leaf } from "lucide-react";
import axios from "axios";
import WelcomeDesign from "../../components/reusecomponent/WelcomeDesign";

type FormState = {
  role: "Doctor";
  Fname: string;
  Lname: string;
  number: string;
  gender: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: File | null;
  status: string;
  specialty: string;
  md: string;
  consultPrice: string;
  f2f: boolean;
  online: boolean;
  hn: string;
  barangay: string;
  municipality: string;
  province: string;
};

type LicenseState = {
  licensePicture: File | null;
};

type Errors = Partial<Record<keyof FormState | keyof LicenseState, string>>;

export default function DoctorSignup(): JSX.Element {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState<any>(null);

  const [form, setForm] = useState<FormState>({
    role: "Doctor",
    Fname: "",
    Lname: "",
    number: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    status: "Pending",
    specialty: "",
    md: "",
    consultPrice: "",
    f2f: true,
    online: false,
    hn: "",
    barangay: "",
    municipality: "",
    province: "",
  });

  const [passLicense, setPassLicense] = useState<LicenseState>({
    licensePicture: null,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [emailExists, setEmailExists] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const newValue: any = type === "checkbox" ? checked : value;
    setForm((p) => ({ ...p, [name]: newValue }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    const file = files[0];

    // if (name === "image") {
    //   setForm((p) => ({ ...p, image: file }));
    //   setErrors((p) => ({ ...p, image: undefined }));
    // } else if (name === "licensePicture") {
    //   setPassLicense((p) => ({ ...p, licensePicture: file }));
    //   setErrors((p) => ({ ...p, licensePicture: undefined }));
    // }
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    if (!form.Fname.trim()) {
      newErrors.Fname = "First Name is required";
      isValid = false;
    }
    if (!form.Lname.trim()) {
      newErrors.Lname = "Last Name is required";
      isValid = false;
    }
    if (!form.age) {
      newErrors.age = "Age is required";
      isValid = false;
    } else if (Number(form.age) < 0) {
      newErrors.age = "Age cannot be negative";
      isValid = false;
    }
    if (!form.number.trim()) {
      newErrors.number = "Phone Number is required";
      isValid = false;
    } else if (form.number.length > 15) {
      newErrors.number = "Phone Number cannot exceed 15 digits";
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!form.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!form.specialty) {
      newErrors.specialty = "Specialty is required";
      isValid = false;
    }
    if (!form.md) {
      newErrors.md = "MD Year is required";
      isValid = false;
    }
    if (!form.consultPrice) {
      newErrors.consultPrice = "Consultation Price is required";
      isValid = false;
    }
    if (!form.hn) {
      newErrors.hn = "House Number is required";
      isValid = false;
    }
    if (!form.barangay) {
      newErrors.barangay = "Barangay is required";
      isValid = false;
    }
    if (!form.municipality) {
      newErrors.municipality = "Municipality is required";
      isValid = false;
    }
    if (!form.province) {
      newErrors.province = "Province is required";
      isValid = false;
    }
    if (!form.image) {
      newErrors.image = "Profile picture is required";
      isValid = false;
    }
    if (!passLicense.licensePicture) {
      newErrors.licensePicture = "License picture is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailExists(false);
    if (!validate()) return;

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("role", form.role);
      formData.append("Fname", form.Fname);
      formData.append("Lname", form.Lname);
      formData.append("age", form.age);
      formData.append("number", form.number);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("confirmPassword", form.confirmPassword);
      formData.append("gender", form.gender);
      if (form.image) formData.append("image", form.image);
      formData.append("status", form.status);
      formData.append("specialty", form.specialty);
      formData.append("md", form.md);
      formData.append("consultPrice", form.consultPrice);
      formData.append("f2f", String(form.f2f));
      formData.append("online", String(form.online));
      formData.append("hn", form.hn);
      formData.append("barangay", form.barangay);
      formData.append("municipality", form.municipality);
      formData.append("province", form.province);

      const response = await axios.post(
        "https://appointment-care-api.vercel.app/api/v1/auth/Signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response && response.data && response.data.user) {
        setDoctorId(response.data);
        setEmailExists(false);

        // upload license
        const licenseData = new FormData();
        if (passLicense.licensePicture) {
          licenseData.append("licensePicture", passLicense.licensePicture);
        }

        await axios.post(
          `https://appointment-care-api.vercel.app/api/v1/auth/signuplicense/${response.data.user.id}`,
          licenseData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
        );

        // redirect to login
        window.location.href = "/Login";
      } else {
        console.error("Unexpected response format", response);
      }
    } catch (err: any) {
      if (err?.response?.status === 500) {
        setEmailExists(true);
      } else {
        console.error("Registration failed:", err?.response ?? err);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-background-light text-slate-900 flex flex-col">
      {/* Top bar with back button */}
      <div className="w-full max-w-5xl mx-auto px-4">
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
      </div>

      <main className="flex-grow flex flex-col items-center justify-start max-w-2xl mx-auto px-4 py-8 w-full">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="text-primary flex items-center justify-center">
              <span
                className="material-icons text-[#008081]"
                style={{ fontSize: "50px" }}
              >
                eco
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800 uppercase">
              APPOINT <span className="text-secondary">CARE</span>
            </h1>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-primary mb-1">
              Doctor Registration
            </h2>
            <p className="text-slate-500">
              Join our network of healthcare professionals
            </p>
          </div>
        </div>

        <div className="w-full bg-white p-4 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="full-name"
                >
                  Full Name (including Title)
                </label>
                <input
                  id="full-name"
                  name="Fname"
                  value={form.Fname}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Sarah Jenkins"
                  type="text"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.Fname ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.Fname && (
                  <p className="mt-1 text-xs text-rose-600">{errors.Fname}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="license"
                >
                  Medical License Number
                </label>
                <input
                  id="license"
                  name="md"
                  value={form.md}
                  onChange={handleChange}
                  placeholder="MLN-12345678"
                  type="text"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.md ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.md && (
                  <p className="mt-1 text-xs text-rose-600">{errors.md}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="specialty"
                >
                  Specialty
                </label>
                <input
                  id="specialty"
                  name="specialty"
                  value={form.specialty}
                  onChange={handleChange}
                  placeholder="e.g. Cardiology"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.specialty ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.specialty && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.specialty}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="email"
                >
                  Professional Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@clinic.com"
                  type="email"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.email ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="address"
                >
                  Clinic/Hospital Address
                </label>
                <textarea
                  id="address"
                  name="barangay"
                  value={form.barangay}
                  onChange={handleChange}
                  placeholder="Enter your full practice address"
                  rows={2}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.barangay ? "border-rose-500" : "border-slate-200"}`}
                />
                {errors.barangay && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.barangay}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="password"
                >
                  Create Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  type="password"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition placeholder:text-slate-400 ${errors.password ? "border-rose-500" : "border-slate-200"}`}
                />
                <p className="mt-1.5 text-xs text-slate-400">
                  Must be at least 8 characters with a mix of letters and
                  numbers.
                </p>
                {errors.password && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Upload Medical License (PDF or Image)
                </label>

                <label
                  htmlFor="license-upload"
                  className="upload-zone w-full flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <UploadCloud size={36} className="text-slate-400" />
                  <p className="text-sm text-slate-600 font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Maximum file size: 5MB
                  </p>
                  <input
                    id="license-upload"
                    name="licensePicture"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                  />
                </label>
                {errors.licensePicture && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.licensePicture}
                  </p>
                )}
              </div>

              {/* <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Upload Profile Picture
                </label>
                <label
                  htmlFor="image-upload"
                  className="upload-zone w-full flex flex-row items-center gap-3 cursor-pointer"
                >
                  <Camera size={28} />
                  <span className="text-slate-600">Choose a photo</span>
                  <input
                    id="image-upload"
                    name="image"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
                {errors.image && (
                  <p className="mt-1 text-xs text-rose-600">{errors.image}</p>
                )}
              </div> */}

              <div className="flex items-start gap-3 md:col-span-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-slate-500 leading-tight"
                >
                  I confirm that the information provided is accurate and I
                  agree to AppointCare's{" "}
                  <a
                    className="text-primary hover:underline font-medium"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-primary hover:underline font-medium"
                    href="#"
                  >
                    Professional Guidelines
                  </a>
                  .
                </label>
              </div>
            </div>

            <div>
              <button
                disabled={submitting}
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-md shadow-primary/20"
              >
                {submitting ? "Submitting..." : "Complete Registration"}
              </button>

              {emailExists && (
                <p className="mt-2 text-sm text-rose-600">
                  Email already exists. Please use another email.
                </p>
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">
                Already registered?{" "}
                <a className="text-primary font-bold hover:underline" href="#">
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>

        <footer className="mt-8 w-full text-center text-slate-400 text-xs">
          © 2024 AppointCare. Providing quality healthcare for a brighter
          future.
        </footer>
      </main>
    </section>
  );
}
