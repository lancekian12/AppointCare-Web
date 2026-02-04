import { Router } from "express";
// import { signup, login } from "../controllers/authController";
import {
  signupValidator,
  loginValidator,
} from "../middlewares/validators/authValidator";
import { validateRequest } from "../middlewares/validators/validateRequest";

const router = Router();

router.post("/signup", signupValidator, validateRequest, signup);
router.post("/login", loginValidator, validateRequest, login);

export default router;
