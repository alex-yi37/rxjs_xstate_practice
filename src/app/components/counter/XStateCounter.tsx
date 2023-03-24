"use client";
import { useMachine } from "@xstate/react";

import { Button } from "../../lib-components";

import { counterMachine } from "./counter-machine";

const counterStyles = {
  border: "1px solid green",
};

export const XStateCounter = () => {
  const [current, send] = useMachine(counterMachine);

  const increment = () => {
    console.log("sending inc xstate");
    send({ type: "INCREMENT" });
  };

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>Hello Counter XState</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>
          {current.context.count}
        </p>
        <Button handleClick={increment}>Increment</Button>
      </div>
    </div>
  );
};
