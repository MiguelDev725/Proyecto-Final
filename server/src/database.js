import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

export const conectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};
