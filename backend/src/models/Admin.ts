// models/Admin.ts
import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IAdminBase } from '../types/Admin.types';

export interface IAdminDocument extends IAdminBase, Document {
  createJWT(): string;
  comparePassword(entryPassword: string): Promise<boolean>;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const adminSchema = new Schema<IAdminDocument>(
  {
    role: {
      type: String,
      default: 'Admin',
      enum: ['Admin'],
    },
    username: {
      type: String,
      required: [true, 'Please provide username'],
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      match: [emailRegex, 'Please provide a valid email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
    },
    authentication: {
      type: String,
      required: [true, 'Please provide authentication'],
    },
  },
  { timestamps: true }
);

// adminSchema.pre<IAdminDocument>('save', async function (next) {
//   try {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err as any);
//   }
// });

// adminSchema.methods.createJWT = function (this: IAdminDocument) {
//   const secret = process.env.JWT_SECRET || '';
//   const lifetime = process.env.JWT_LIFETIME || '1d';
//   return jwt.sign({ adminId: this._id.toString(), name: this.username, role: this.role }, secret, {
//     expiresIn: lifetime,
//   });
// };

adminSchema.methods.comparePassword = async function (entryPassword: string) {
  return bcrypt.compare(entryPassword, this.password);
};

const AdminModel: Model<IAdminDocument> = mongoose.model<IAdminDocument>('Admin', adminSchema);
export default AdminModel;
