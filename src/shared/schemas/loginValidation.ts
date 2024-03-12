import {z} from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message:"Email format is *@gmail.com or any other email service"
  }),
  password: z.string().min(5,"Password must contain at least 5 characters")
});