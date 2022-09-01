import React from "react";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>You Clicked button {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Count;
