// types/ScheduleTypes.ts
import { Types } from 'mongoose';

export type ScheduleStatus =
  | 'Pending'
  | 'Accepted'
  | 'Rejected'
  | 'Request'
  | 'Dismiss'
  | 'Done';

export interface IScheduleBase {
  patientId: Types.ObjectId | string;
  doctorId: Types.ObjectId | string;
  fullName: string;
  email: string;
  imageData?: string | null;
  number: string;
  online: boolean;
  time: string;
  date: string;
  localTime?: string | null;
  localDate?: string | null;
  status?: ScheduleStatus;
  symptoms?: string[] | null;
  observation?: string | null;
  prescription?: string | null;
}
