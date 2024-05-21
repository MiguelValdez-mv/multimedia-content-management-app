import express from "express";

import { catchErrors } from "../../middlewares/error";
import { verifyToken } from "../../middlewares/auth";
import { login, signUp, me } from "../../controllers/users";

const router = express.Router();

router.post("/login", catchErrors(login));

router.post("/sign-up", catchErrors(signUp));

router.use(verifyToken);

router.get("/me", catchErrors(me));

export default router;
