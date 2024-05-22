import express from "express";

import { catchErrors } from "../../middlewares/error";
import { verifyToken } from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

import { createThematic } from "../../controllers/thematics";

const router = express.Router();

router.use(verifyToken);

router.post("/", upload.single("coverImage"), catchErrors(createThematic));

export default router;
