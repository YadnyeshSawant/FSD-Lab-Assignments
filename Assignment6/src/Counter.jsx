import React, { useState } from 'react';

function Counter() {
  // State initialization using useState hook
  const [count, setCount] = useState(0);

  // Handler functions
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h2>Counter Value</h2>
      
      {/* Displaying current count value */}
      <div className="count-display">
        {count}
      </div>

      {/* Action buttons */}
      <div className="button-group">
        <button className="btn btn-decrement" onClick={handleDecrement}>
          - Decrement
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-increment" onClick={handleIncrement}>
          + Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
