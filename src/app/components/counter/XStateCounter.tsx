"use client";
import { useMachine } from "@xstate/react";

import { Button } from "../../lib-components";

import { counterMachine, incrementCounterMachine } from "./counter-machine";

const counterStyles = {
  border: "1px solid green",
};

const XStateCounter = () => {
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
        <Button handleClick={increment}>Increment</Button>
      </div>
    </div>
  );
};

export function XStateIncCounter() {
  const [current, send] = useMachine(incrementCounterMachine);

  function pause() {
    send("PAUSE");
  }

  function resume() {
    send("RESUME");
  }

  console.log("current inc state", current.value);

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>XState Incrementing Counter</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>
          {current.context.count}
        </p>
        <Button
          handleClick={
            current.value === "paused" ? () => resume() : () => pause()
          }
        >
          {current.value === "paused" ? "Resume" : "Pause"}
        </Button>
      </div>
    </div>
  );
}

export default XStateCounter;
