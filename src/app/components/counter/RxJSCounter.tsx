"use client";
import React, { useState, useRef, useEffect } from "react";
import { fromEvent } from "rxjs";

const counterStyles = {
  border: "1px solid green",
};

// this implementation from SO uses a ref and useEffect:
// https://stackoverflow.com/a/58370178
// this is probably an instance where rxjs is overkill

export const RxJSCounter = () => {
  const [count, setCount] = useState(0);

  const buttonRef = useRef(null);

  useEffect(() => {
    const clickObservable$ = fromEvent(
      buttonRef.current as any,
      "click"
    ).subscribe(() => {
      setCount(count + 1);
    });
    console.log("effect runs and count", count);

    return () => {
      clickObservable$.unsubscribe();
      console.log("effect cleanup and count", count);
    };
  }, [count]);

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>Hello Counter RxJS</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>{count}</p>
        <button type="button" ref={buttonRef}>
          Count
        </button>
      </div>
    </div>
  );
};
