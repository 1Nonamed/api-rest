import { Router } from "express";

import {
  getDirectors,
  getDirectorById,
//   addDirector,
//   updateDirector,
//   deleteDirector,
} from "../controllers/directors";

const router = Router();

router.get("/", getDirectors);
// router.get("/:id", getDirectorById);

// router.post("/", addDirector);

// router.put("/:id", updateDirector);

router.delete("/:id", deleteDirector);

export default router;
