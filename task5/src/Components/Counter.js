import React from 'react'
import { useCount } from "./CounterContext";


 
 const Counter = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ padding: "10px", cursor: "pointer", margin: "5px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ padding: "10px", cursor: "pointer", margin: "5px" }}>
        Decrement
      </button>
    </div>
  );
}


export default Counter;
