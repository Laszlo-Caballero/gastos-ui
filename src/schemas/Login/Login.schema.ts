import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(255),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(255),
});
