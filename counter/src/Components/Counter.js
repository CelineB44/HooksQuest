import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Le compteur est  à : {count}</span>
      <input type="text"
        value={count}
        onChange={(e)=>setCount(e.target.value)}
        />
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
