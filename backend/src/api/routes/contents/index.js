import express from "express";

import { catchErrors } from "../../middlewares/error";
import { verifyToken } from "../../middlewares/auth";
import { getContentById, deleteContentById } from "../../controllers/contents";

const router = express.Router();

router.use(verifyToken);

router.get("/content-by-id/:id", catchErrors(getContentById));
router.delete("/content-by-id/:id", catchErrors(deleteContentById));

export default router;
