import { useCallback, useMemo, useRef, useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(20);
  const num = useRef(0);
  function handleCount() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    num.current++;
    console.log(num.current);
  }

  const fibFx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMemoized = useMemo(() => fibFx(count), [count, fibFx]);

  return (
    <>
      <div className="count">
        {count} | {fibMemoized}
      </div>
      <button onClick={handleCount}>Increament Count</button>
    </>
  );
}
export default Counter;
