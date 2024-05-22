import express from "express";

import { catchErrors } from "../../middlewares/error";
import { verifyToken } from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

import { createThematic, getThematics } from "../../controllers/thematics";

const router = express.Router();

router.use(verifyToken);

router.post("/", upload.single("coverImage"), catchErrors(createThematic));
router.get("/", catchErrors(getThematics));

export default router;
