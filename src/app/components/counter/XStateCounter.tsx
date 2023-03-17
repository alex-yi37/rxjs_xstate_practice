"use client";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const counterStyles = {
  border: "1px solid green",
};

const counterMachine = createMachine(
  {
    id: "counter",
    schema: {
      // The context (extended state) of the machine
      context: { count: 0 } as { count: number },
      // The events this machine handles
      events: {} as { type: "INCREMENT" },
    },
    initial: "active",
    states: {
      active: {
        on: { INCREMENT: { target: "active", actions: "incrementCount" } },
      },
    },
    /* Other config... */
  },
  {
    actions: {
      incrementCount: (context) => {
        console.log("asd context vlaue", context);
      },
    },
  }
);

export const XStateCounter = () => {
  const [current, send] = useMachine(counterMachine);

  const increment = () => {
    send({ type: "INCREMENT" });
  };

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>Hello Counter XState</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>
          {current.context.count}
        </p>
        <button type="button" onClick={increment}>
          Count
        </button>
      </div>
    </div>
  );
};
