import { z } from "zod";

const Event = z.object({
  id: z.string(),
});

export type Event = z.infer<typeof Event>;
