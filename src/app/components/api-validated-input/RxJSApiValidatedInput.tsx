"use client";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import { switchMap, debounceTime } from "rxjs";
import { fromFetch } from "rxjs/fetch";

import { getValidateTextInput } from "@/utils";

const inputChange$ = fromFetch("");

const RxJSApiValidatedInput = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null) as any;
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("handle change value", event.target.value);
    setInput(event.target.value);
  };

  useEffect(() => {
    getValidateTextInput("huh")
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        }

        throw new Error("got non-ok response");
      })
      .then((data) => {
        // console.log("huh data", data);
      });
  }, []);

  useEffect(() => {
    const inputSub$ = inputChange$.subscribe({
      next: (value) => {
        console.log("wub value", value);
      },
    });

    return () => {
      inputSub$.unsubscribe();
    };
  }, []);

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
              ref={inputRef}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default RxJSApiValidatedInput;
