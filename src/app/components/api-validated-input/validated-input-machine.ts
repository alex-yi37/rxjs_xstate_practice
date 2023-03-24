import { createMachine, assign } from "xstate";

export const validatedInputMachine = createMachine(
  {
    id: "validate-input",
    schema: {
      // The context (extended state) of the machine
      context: {} as { data: any },
      // The events this machine handles
      events: {} as { type: "INCREMENT" },
    },
    initial: "active",
    context: { data: {} },
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
        data: (context) => context.data,
      }),
    },
  }
);
