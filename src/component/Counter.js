import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="count">{count}</div>
      <button onClick={handleCount}>Increament Count</button>
    </>
  );
}
export default Counter;
