import { useReducer, useEffect } from "react";

// basically trying to implement the component  in this article:
// https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i

// typescript is fucking me up so will get back to this example later
// code sandbox link with just js:
// https://codesandbox.io/s/crazy-james-8hscjk?file=/src/DogFetcher.js

// also note that the "canceled" logic only applies in the case where we click the "cancel"
// button since doing so changes the state from "loading" to "idle" which runs the effect again. The
// return callback would then fire, setting "canceled" to true and simply return from the .then callbacks

// in the case where the user spams the "fetch" button, we aren't actually cancelling the fetch
// requests (and re-fetching), but rather the reducer is set up so that our reducer state does not change
// aka "status" continues to be "loading"

// this comment on the article also explains how the "canceled" variable is working
// in this example. In reality, probably would not want to implement a component in this fashion
// but still good to know

type Status = "idle" | "loading" | "success" | "failure";

type Dog = {
  dogData: {
    name: string;
    breed: string;
    age: number;
  };
};

// the REJECT event transitions the "loading" state to "error"
type EventType = "FETCH" | "RESOLVE" | "REJECT" | "CANCEL";

type TestEvent = {
  [E in EventType]: {
    type: E;
  };
}[EventType];

type Event =
  | { type: "FETCH" }
  | { type: "REJECT" }
  | { type: "RESOLVE"; data: Dog }
  | { type: "CANCEL" };

function dogFetcher() {
  return new Promise<Dog>((resolve, reject) => {
    const rand = Math.floor(Math.random() * 100);
    console.log(`promise func rand value ${rand}`);
    setTimeout(() => {
      if (rand <= 25) {
        // do one thing
        resolve({ dogData: { name: "steve", breed: "collie", age: 25 } });
      } else if (rand <= 50) {
        // do another thing
        resolve({
          dogData: { name: "kevin", breed: "golden retrieve", age: 50 },
        });
      } else if (rand <= 75) {
        // return another type
        resolve({ dogData: { name: "veronica", breed: "shepherd", age: 75 } });
      } else {
        // error here
        throw new Error("Failed to fetch dog");
      }
    }, 1000);
  });
}

type ReducerState = {
  status: "idle" | "loading" | "success" | "failure";
  error: {
    message: string;
  } | null;
  data: {
    name: string;
    breed: string;
    age: number;
  } | null;
};

const initialState = {
  status: "initial",
  error: null,
  data: null,
};

function exampleReducer(state: ReducerState, event: Event): ReducerState {
  switch (event.type) {
    case "FETCH": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RESOLVE": {
      return {
        ...state,
        status: "success",
        // data: event.data,
      };
    }
    default: {
      return state;
    }
  }
}

export function UseEffectFireOrder() {
  // const [state, send] = useReducer(exampleReducer, initialState);

  function cancel() {
    // send({ type: "CANCEL" });
  }

  function fetchDogsRequest() {}

  useEffect(() => {}, []);

  return (
    <div>
      {/* {state ? (
        <>
          <p>Name: {state.data}</p>
          <p>Breed: {state.data}</p>
          <p>Age: {state.data}</p>
        </>
      ) : null} */}
      <button>Fetch Dog</button>
      <button>Cancel</button>
    </div>
  );
}
