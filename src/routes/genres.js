import { Router } from "express";

import {
  getGenres,
    getGenreById,
  //   addGenre,
  //   updateGenre,
  //   deleteGenre,
} from "../controllers/genres";

const router = Router();

router.get("/", getGenres);
router.get("/:id", getGenreById);

// router.post("/", addGenre);

// router.put("/:id", updateGenre);

router.delete("/:id", deleteGenre);

export default router;
