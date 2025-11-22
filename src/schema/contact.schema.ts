import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ required_error: "errors:required" }).min(4, {
    message: "errors:min-4",
  }),
  email: z.string({ required_error: "errors:required" }).email().min(4, {
    message: "errors:min-4",
  }),
  message: z
    .string({ required_error: "errors:required" })
    .min(4, {
      message: "errors:min-4",
    })
    .max(500, { message: "errors:max-500" }),
});
