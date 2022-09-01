import React from "react";
import { useState, useEffect } from "react";

function Count1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked {count} times";
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Count1;
