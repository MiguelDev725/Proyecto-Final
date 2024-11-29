import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/newproduct", createProduct);

export default router;