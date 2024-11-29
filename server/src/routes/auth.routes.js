import { Router } from "express";
import { registerSchema, LoginSchema } from "../schemas/auth.schema.js";
import {
  register,
  login,
  logout,
  veryfyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validate.token.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(LoginSchema), login);
router.post("/logout",logout);
router.get("/verify", veryfyToken);

    

export default router;
