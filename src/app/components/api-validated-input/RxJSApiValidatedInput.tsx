"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { fromEventPattern } from "rxjs";

import { simulatedFetch } from "@/utils";

export const RxJSApiValidatedInput = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h3>rxjs validated input</h3>
      <form>
        <div>
          <label htmlFor="inputVal">
            <input
              name="inputVal"
              type="text"
              onChange={handleChange}
              value={input}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
