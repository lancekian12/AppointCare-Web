import { Request, Response } from "express";
import * as authService from "../services/authServices";
import { SignupInput, LoginInput } from "../types/auth.types";

// ===== Signup Controller =====
export const signupController = async (req: Request, res: Response) => {
  try {
    const data: SignupInput = req.body;
    const result = await authService.signup(data);
    return res.status(201).json(result);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: "Server error" });
  }
};

// ===== Login Controller =====
export const loginController = async (req: Request, res: Response) => {
  try {
    const data: LoginInput = req.body;
    const result = await authService.login(data);
    return res.status(200).json(result);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: "Server error" });
  }
};
