import express from "express";
import consola from "consola";
import cors from "cors";
import path from "path";

import { connectDb } from "./db";
import { ENV } from "./constants";
import { errorHandler } from "./api/middlewares/error";
import userRouter from "./api/routes/users";
import thematicRouter from "./api/routes/thematics";
import contentRouter from "./api/routes/contents";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static files
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// Routes
app.use("/users", userRouter);
app.use("/thematics", thematicRouter);
app.use("/contents", contentRouter);

// Error handling
app.use(errorHandler);

app.listen(ENV.PORT, async () => {
  consola.info(`Server started at port ${ENV.PORT}`);

  await connectDb();
});
