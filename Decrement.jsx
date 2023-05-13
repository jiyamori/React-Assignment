import { useState } from 'react';

function Count() {
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
    };

    const decrement = () => {
        setcount(count - 1);
    };
    const Reset = () => {
        setcount(0);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Count;

