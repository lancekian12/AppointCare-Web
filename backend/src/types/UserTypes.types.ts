// types/UserTypes.ts
export type Role = 'Doctor' | 'Patient';
export type Gender = 'Male' | 'Female';
export type DoctorStatus = 'Accept' | 'Reject' | 'Pending';

export interface IUserBase {
  role: Role;
  Fname: string;
  Lname: string;
  number: string;
  gender: Gender;
  age: number;
  email: string;
  password: string;
  imageData?: string | null;

  // doctor-only fields (may be undefined for Patients)
  hn?: number;
  barangay?: string;
  municipality?: string;
  province?: string;
  status?: DoctorStatus;
  specialty?: string;
  md?: number;
  consultPrice?: number;
  f2f?: boolean;
  online?: boolean;
  imageLicense?: string | null;
}
