// types/auth.types.ts
import { Request } from 'express';

export interface AuthPayload {
  userId?: string;
  adminId?: string;
  role: string;
  name: string;
}

export interface AuthRequest extends Request {
  user?: AuthPayload;
}
