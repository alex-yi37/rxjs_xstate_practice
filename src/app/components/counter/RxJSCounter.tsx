"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { fromEvent, interval } from "rxjs";

import { useSubscription } from "@/hooks/useSubscription";

const counterStyles = {
  border: "1px solid green",
};

// this implementation from SO uses a ref and useEffect:
// https://stackoverflow.com/a/58370178
// this is probably an instance where rxjs is overkill

function createClickObservable(buttonRef: any) {
  return fromEvent(buttonRef, "click");
}

const sourceOuter$ = interval(500);

// TODO: I want to be able to render a button that, when clicked, will stop the counter. Then when clicked again
// it will start the counter again without resetting the value

// using this component to test out the useSubscription custom hook
export function RxJSIncrementingCounter() {
  const [count, setCount] = useState(0);

  // console.log("component is rendering");
  const sourceInner$ = useMemo(() => interval(500), []);

  const sourceInnerSecond$ = interval(500);

  // note that we have sourceOuter$ defined outside the component and
  // sourceInner$ defined, and memoized with useMemo. If we subscribe
  // to sourceOuter$ (not being memoized by useMemo), the counter works as
  // expected and the number is incremented every 500ms.
  // note that if we don't memoize sourceInner$, the counter goes from 0 to 1
  // in the UI and then doesn't increment further
  useSubscription(sourceInner$, (num) => {
    // console.log("in useSub");
    setCount(num);
  });

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>RxJS Incrementing Counter</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>{count}</p>
      </div>
    </div>
  );
}

const RxJSCounter = () => {
  const [count, setCount] = useState(0);

  const buttonRef = useRef(null);

  // const clickObservable$ = createClickObservable(buttonRef.current);

  useEffect(() => {
    const clickObservable$ = createClickObservable(buttonRef.current).subscribe(
      () => {
        setCount((prevCount) => prevCount + 1);
      }
    );

    return () => {
      return clickObservable$.unsubscribe();
    };
  }, []);

  return (
    <div style={counterStyles}>
      <h3 style={{ padding: "16px" }}>Hello Counter RxJS</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ backgroundColor: "yellow", minWidth: 50 }}>{count}</p>
        <button type="button" ref={buttonRef}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default RxJSCounter;
