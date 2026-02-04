import { Router, Request, Response, NextFunction } from "express";
import { AuthController } from "../controllers/authController";
import {
  signupValidator,
  loginValidator,
} from "../middlewares/validators/authValidator";
import { validateRequest } from "../middlewares/validators/validateRequest";
import { SignupInput, LoginInput, AuthResponse } from "../types/auth.types";

const router = Router();
const authController = new AuthController();

// ===== Signup Route =====
router.post(
  "/signup",
  signupValidator,
  validateRequest,
  async (req: Request<{}, {}, SignupInput>, res: Response<AuthResponse>, next: NextFunction) => {
    try {
      const result = await authController.signup(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
);

// ===== Login Route =====
router.post(
  "/login",
  loginValidator,
  validateRequest,
  async (req: Request<{}, {}, LoginInput>, res: Response<AuthResponse>, next: NextFunction) => {
    try {
      const result = await authController.login(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
