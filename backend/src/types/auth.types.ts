// types/auth.types.ts
import { Request } from 'express';

import { IUserDocument } from "../models/user";

// ===== Signup Input =====
export interface SignupInput {
  role: "Doctor" | "Patient";
  Fname: string;
  Lname: string;
  number: string;
  gender: "Male" | "Female";
  age: number;
  email: string;
  password: string;
  // Doctor-only fields
  hn?: number;
  barangay?: string;
  municipality?: string;
  province?: string;
  status?: "Accept" | "Reject" | "Pending";
  specialty?: string;
  md?: number;
  consultPrice?: number;
  f2f?: boolean;
  online?: boolean;
  imageLicense?: string;
}

// ===== Login Input =====
export interface LoginInput {
  email: string;
  password: string;
}

// ===== Auth Response =====
export interface AuthResponse {
  user: IUserDocument;
  token: string;
}


export interface AuthPayload {
  userId?: string;
  adminId?: string;
  role: string;
  name: string;
}

export interface AuthRequest extends Request {
  user?: AuthPayload;
}
