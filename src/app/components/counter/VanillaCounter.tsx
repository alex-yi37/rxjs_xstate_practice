"use client";
import { useState } from "react";
import { Button } from "../../lib-components";

const counterStyles = {
  border: "1px solid green",
};

const VanillaCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>Hello Counter</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>{count}</p>
        <Button handleClick={increment}>Increment</Button>
      </div>
    </div>
  );
};

export default VanillaCounter;
