// Build a counter application with increment and decrement buttons

import { useState } from "react";
const Q2 = () => {
    const [count,setCount] = useState(0);
    return (
        <div className="counter-buttons">
            <h1> {count} </h1>
            <button className="btn-1" onClick={() => setCount(prev => prev + 1)}> Increment: </button>
            <button className="btn-2" onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
    );
};

export default Q2;