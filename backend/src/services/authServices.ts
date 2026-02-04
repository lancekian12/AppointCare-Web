import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user";
import { SignupInput, LoginInput, AuthResponse } from "../types/auth.types";

const SECRET_KEY = process.env.SECRETKEY || "defaultsecret";
const JWT_EXPIRES = "1d";

export const signup = async (data: SignupInput): Promise<AuthResponse> => {
  // check if user exists
  const existingUser = await UserModel.findOne({ email: data.email });
  if (existingUser) throw new Error("Email already registered");

  // hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // create user
  const user = await UserModel.create({
    ...data,
    password: hashedPassword,
  });

  // generate token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    SECRET_KEY,
    { expiresIn: JWT_EXPIRES }
  );

  return { user, token };
};

export const login = async (data: LoginInput): Promise<AuthResponse> => {
  const user = await UserModel.findOne({ email: data.email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await user.comparePassword(data.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    SECRET_KEY,
    { expiresIn: JWT_EXPIRES }
  );

  return { user, token };
};
