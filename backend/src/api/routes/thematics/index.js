import express from "express";

import { catchErrors } from "../../middlewares/error";
import { verifyToken } from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

import {
  createThematic,
  getThematics,
  getThematicById,
  deleteThematicById,
  updateThematicById,
} from "../../controllers/thematics";

const router = express.Router();

router.use(verifyToken);

router.post("/", upload.single("coverImage"), catchErrors(createThematic));
router.get("/", catchErrors(getThematics));

router.put("/thematic-by-id/:id", catchErrors(updateThematicById));
router.get("/thematic-by-id/:id", catchErrors(getThematicById));
router.delete("/thematic-by-id/:id", catchErrors(deleteThematicById));

export default router;
