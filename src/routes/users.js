import { Router } from "express";

import {
  getUsers,
  addRoleToUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users";
import { validate, userSchema } from "../utils/validations";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

router.post("/", validate(userSchema), addUser);
router.post("/:userId/roles/:roleId", addRoleToUser);

router.put("/:id", validate(userSchema), updateUser); // Update user is missing

router.delete("/:id", deleteUser);

export default router;
