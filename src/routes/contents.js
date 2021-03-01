import { Router } from "express";

import {
  getContents,
    getContentById,
  //   addContent,
  //   updateContent,
  //   deleteContent,
} from "../controllers/contents";

const router = Router();

router.get("/", getContents);
router.get("/:id", getContentById);

// router.post("/", addContent);

// router.put("/:id", updateContent);

router.delete("/:id", deleteContent);

export default router;
