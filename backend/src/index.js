import express from "express";
import consola from "consola";

import { connectDb } from "./db";

const app = express();
const port = 8080;

app.listen(port, async () => {
  consola.info(`Server started at port ${port}`);

  await connectDb();
});
