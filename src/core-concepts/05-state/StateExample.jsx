import { useState } from "react";
import "../../App.css";

export default function StateExample() {
  const [count, setCount] = useState(0);
  console.log("StateExample Rendered");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>State Example</h1>
      <h3>Counter {count}</h3>
      <button onClick={handleClick} className="bg-color">
        Increment
      </button>
    </div>
  );
}
