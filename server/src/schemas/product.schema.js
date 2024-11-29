import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio."),
  price: z.number().positive("El precio debe ser un número positivo."),
  description: z.string().min(1, "La descripción es obligatoria."),
  image: z.string().url("La imagen debe ser una URL válida."),
});

export default productSchema;
