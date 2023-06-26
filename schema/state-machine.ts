import { z } from "zod";

// TODO: Full ASL schema in zod

const States = z
  .object({
    Pass: z.object({
      End: z.boolean(),
      Type: z.string(),
    }),
  })
  .strict();

const StateMachine = z
  .object({
    Comment: z.string().optional(),
    StartAt: z.string(),
    States: States,
  })
  .strict();

export type StateMachine = z.infer<typeof StateMachine>;
