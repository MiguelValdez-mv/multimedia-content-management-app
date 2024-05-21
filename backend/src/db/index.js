import mongoose from "mongoose";
import consola from "consola";

export async function connectDb() {
  const uri = `mongodb://localhost/multimedia-content-management-db`;
  const config = {
    useNewUrlParser: true,
  };

  try {
    await mongoose.connect(uri, config);

    consola.info("Database Connected");
  } catch (err) {
    consola.error(err);
  }
}
