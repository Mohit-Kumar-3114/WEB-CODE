import { z } from 'zod';
import express from "express";
const app = express();
app.use(express.json())


// Define the schema for profile update
// Runtime validation
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }),
});


// Compile time validation
type hello = z.infer<typeof userProfileSchema>

// Inferred Type:
// type hello = {
//   name: string;
//   email: string;
//   age: number;
// };

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);

  if (!success) {
    res.status(411).json({});
    return
  }
  res.json({
    message: "User updated"
  })
});

app.listen(3001);

// z.infer is a TypeScript utility provided by Zod, a TypeScript-first schema validation library. It is used to
// infer the TypeScript type from a Zod schema.