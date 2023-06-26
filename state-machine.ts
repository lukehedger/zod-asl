import type { StateMachine } from "./schema/state-machine";
import type { Event } from "./schema/event";

const event: Event = {
  id: "123",
};

// TODO: Add input (Event), tasks and results
export const stateMachine: StateMachine = {
  StartAt: "Pass",
  States: { Pass: { Type: "Pass", End: true } },
};
