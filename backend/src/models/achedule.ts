// models/Schedule.ts
import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import { IScheduleBase, ScheduleStatus } from '../types/admin.types';

export interface IScheduleDocument extends IScheduleBase, Document {
  createdAt: Date;
  updatedAt: Date;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const scheduleSchema = new Schema<IScheduleDocument>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      match: [emailRegex, 'Please provide a valid email'],
    },
    imageData: {
      type: String,
      required: false,
      default: null,
    },
    number: {
      type: String,
      required: [true, 'Please provide number'],
    },
    online: {
      type: Boolean,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    localTime: {
      type: String,
      default: null,
    },
    localDate: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected', 'Request', 'Dismiss', 'Done'],
      default: 'Pending',
    },
    symptoms: {
      type: [String],
      required: false,
      default: null,
    },
    observation: {
      type: String,
      required: false,
      default: null,
    },
    prescription: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const ScheduleModel: Model<IScheduleDocument> = mongoose.model<IScheduleDocument>('Schedule', scheduleSchema);
export default ScheduleModel;
