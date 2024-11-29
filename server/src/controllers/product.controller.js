import Product from "../models/product.model.js";
import productSchema from "../schemas/product.schema.js"; // El schema de Zod

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Productos obtenidos exitosamente",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los productos",
      error: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;

  try {
    const validatedData = productSchema.parse({
      name,
      price,
      description,
      image,
    }); // Validación Zod
    const newProduct = new Product(validatedData); // Crear instancia de Mongoose
    const savedProduct = await newProduct.save(); // Guardar en MongoDB
    res.status(201).json({ message: "Producto creado", product: savedProduct });
  } catch (error) {
    console.error("Error al crear producto:", error); // Mostrar log del error completo
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};
