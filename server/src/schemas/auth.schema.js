import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is requiered",
  }),
  email: z
    .string({
      required_error: "Email is requiered",
    })
    .email({
      message: "Invalid Email",
    }),
  password: z
    .string({
      requiered_error: "The pasword is requiered",
    })
    .min(8, {
      message: "Password must be at least 8 caracters",
    }),
});

export const LoginSchema = z.object({
  email: z
    .string({
      require_error: "Email is requiered",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      requiered_error: "The pasword is requiered",
    })
    .min(8, {
      message: "Password must be at least 8 caracters",
    }),
});
