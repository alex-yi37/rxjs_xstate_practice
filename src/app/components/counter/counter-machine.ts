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

export const incrementCounterMachine = createMachine(
  {
    id: "inc-counter",
    schema: {
      // The context (extended state) of the machine
      context: {} as { count: number },
      // The events this machine handles
      events: {} as { type: "TICK" } | { type: "PAUSE" } | { type: "RESUME" },
    },
    initial: "active",
    context: { count: 0 },
    states: {
      active: {
        invoke: {
          id: "incInterval",
          src: (context, event) => (callback, onReceive) => {
            const incId = setInterval(() => {
              callback("TICK");
            }, 500);

            return () => {
              clearInterval(incId);
            };
          },
        },
        on: {
          TICK: { target: "active", actions: ["incrementCount"] },
          PAUSE: { target: "paused" },
        },
      },
      paused: {
        on: { RESUME: { target: "active" } },
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
