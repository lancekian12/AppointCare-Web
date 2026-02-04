import { Router } from "express";
import { signupController, loginController } from "../controllers/authController";
import {
  signupValidator,
  loginValidator,
} from "../middlewares/validators/authValidator";
import { validateRequest } from "../middlewares/validators/validateRequest";

const router = Router();

router.post("/signup", signupValidator, validateRequest, signupController);
router.post("/login", loginValidator, validateRequest, loginController);

export default router;
