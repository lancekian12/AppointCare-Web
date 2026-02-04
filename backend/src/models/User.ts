// models/User.ts
import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserBase } from "../types/UserTypes.types";

export interface IUserDocument extends IUserBase, Document {
  createJWT(): string;
  comparePassword(entryPassword: string): Promise<boolean>;
  updateImageData(imageData: string): Promise<void>;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema<IUserDocument>(
  {
    role: {
      type: String,
      required: [true, "Please provide role"],
      enum: ["Doctor", "Patient"],
    },
    Fname: {
      type: String,
      required: [true, "Please provide first name"],
      minLength: 3,
      maxLength: 50,
    },
    Lname: {
      type: String,
      required: [true, "Please provide last name"],
      minLength: 3,
      maxLength: 50,
    },
    number: {
      type: String,
      required: [true, "Please provide number"],
    },
    gender: {
      type: String,
      required: [true, "Please provide gender"],
      enum: ["Male", "Female"],
    },
    age: {
      type: Number,
      required: [true, "Please provide age"],
      min: 0,
      max: 150,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [emailRegex, "Please provide a valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 8,
    },
    imageData: {
      type: String,
      required: false,
      default: null,
    },

    // Doctor-only fields
    hn: {
      type: Number,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    barangay: {
      type: String,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    municipality: {
      type: String,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    province: {
      type: String,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    status: {
      type: String,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
      enum: ["Accept", "Reject", "Pending"],
    },
    specialty: {
      type: String,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    md: {
      type: Number,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
      min: [0, "MD price must be at least 0"],
    },
    consultPrice: {
      type: Number,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
      min: [0, "Consultation price must be at least 0"],
    },
    f2f: {
      type: Boolean,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    online: {
      type: Boolean,
      required: function (this: IUserDocument) {
        return this.role === "Doctor";
      },
    },
    imageLicense: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true },
);

// // Hash password on save only if changed
// userSchema.pre<IUserDocument>("save", async function (next) {
//   try {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err as any);
//   }
// });

// userSchema.methods.createJWT = function (this: IUserDocument) {
//   const secret = process.env.JWT_SECRET || "";
//   const lifetime = process.env.JWT_LIFETIME || "1d";
//   return jwt.sign(
//     { userId: this._id.toString(), name: this.Fname, role: this.role },
//     secret,
//     { expiresIn: lifetime },
//   );
// };

userSchema.methods.comparePassword = async function (entryPassword: string) {
  return bcrypt.compare(entryPassword, this.password);
};

userSchema.methods.updateImageData = async function (imageData: string) {
  this.imageData = imageData;
  await this.save();
};

const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  userSchema,
);
export default UserModel;
