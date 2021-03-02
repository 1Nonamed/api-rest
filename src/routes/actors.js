import { Router } from "express";

import {deleteActor, getActors, getActorById} from "../controllers/actors";

const router = Router();

router.get("/", getActors);
router.get("/:id", getActorById);

// router.post("/", add); 

// router.put("/:id", update); 

router.delete("/:id", deleteActor); 

export default router;
