import mongoose from "mongoose";
import consola from "consola";

export async function connectDb() {
  const uri = `mongodb://0.0.0.0:27017/multimedia-content-management-db`;
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, config);

    consola.info("Database Connected");
  } catch (err) {
    consola.error(err);
  }
}

export * from "./models";
