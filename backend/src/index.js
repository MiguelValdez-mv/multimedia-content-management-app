import express from "express";
import consola from "consola";
import cors from "cors";

import { connectDb } from "./db";
import { ENV } from "./constants";
import userRouter from "./api/routes/users";
import { errorHandler } from "./api/middlewares/error";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRouter);

// Error handling
app.use(errorHandler);

app.listen(ENV.PORT, async () => {
  consola.info(`Server started at port ${ENV.PORT}`);

  await connectDb();
});
