import { useRef, useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const num = useRef(0);
  function handleCount() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    num.current++;
    console.log(num.current);
  }
  return (
    <>
      <div className="count">{count} {num.current}</div>
      <button onClick={handleCount}>Increament Count</button>
    </>
  );
}
export default Counter;
