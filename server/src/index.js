import app from "./app.js";
import { conectDB } from "./database.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || process.env.PORT;

conectDB();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
