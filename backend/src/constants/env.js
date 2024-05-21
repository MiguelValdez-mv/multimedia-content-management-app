import * as dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: Number(process.env.PORT || "8080"),
  JWT_SECRET: process.env.JWT_SECRET ?? "default",
};
