import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Counter');

    const increaseCount = () => {
        setCount(count+1);
    }
    const decreaseCount = () => {
        setCount(count-1);
    }
  return (
    <div className="Counter">
      <h2>{title}</h2>

      <p>You clicked {count} times</p>

      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}

export default Counter;
