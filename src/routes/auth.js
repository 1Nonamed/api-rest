import { Router } from "express";

import {
  logIn,
  signUp,
  resetPassword,
  updatePassword,
} from "../controllers/auth";
import { validate, loginSchema, userSchema } from "../utils/validations";

const router = Router();

router.post("/login", validate(loginSchema), logIn);
router.post("/signup", validate(userSchema), signUp);
router.post("/reset-password", resetPassword); // Create a new UUID token in ResetTokens
router.post("/update-password", updatePassword); // Update an user based on the UUID Token

export default router;
