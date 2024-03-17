import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const applicationSchema = z.object({
  id: z.number(),
  nullApplicationId: z.number(),
  type: z.string(),
  gitRepo: z.string(),
  gitSha: z.string(),
  name: z.string(),
  image: z.string().optional(),
  cpu: z.string(),
  memory: z.string(),
  storage: z.string(),
  buildId: z.string(),
});

export type Application = z.infer<typeof applicationSchema>;
