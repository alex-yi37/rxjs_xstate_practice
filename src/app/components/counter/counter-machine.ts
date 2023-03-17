import { createMachine, assign } from "xstate";

export const counterMachine = createMachine(
  {
    id: "counter",
    schema: {
      // The context (extended state) of the machine
      context: {} as { count: number },
      // The events this machine handles
      events: {} as { type: "INCREMENT" },
    },
    initial: "active",
    context: { count: 0 },
    states: {
      active: {
        on: { INCREMENT: { target: "active", actions: ["incrementCount"] } },
      },
    },
    /* Other config... */
  },
  {
    actions: {
      incrementCount: assign({
        count: (context) => context.count + 1,
      }),
    },
  }
);
