import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

import { simulatedFetch } from "@/utils";

const XStateApiValidatedInput = () => {
  return (
    <div>
      <h3>xstate validated input</h3>
      <form>
        <div>
          <label htmlFor="inputVal">
            <input name="inputVal" type="text" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default XStateApiValidatedInput;
