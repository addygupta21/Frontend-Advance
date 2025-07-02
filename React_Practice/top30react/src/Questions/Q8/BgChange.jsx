// create a component that changes it's background color when clicked
import React from 'react'

import { useState, useEffect } from 'react';
export default function BgChange() {
    const [color, setColor] = useState(false);
    const handleClick = () =>{
        setColor(!color);
    }

    useEffect(() => {
        const compGiven = document.querySelector('.givenComp');
        // compGiven.style.color = color ? 'skyblue' : 'lightcoral';
        // compGiven.style.backgroundColor = color ?   'lightcoral' :'skyblue'
    }, [color]);
  return (
    <div className="givenComp" onClick={handleClick} style = {{
        backgroundColor: color ? 'blue': 'black',
        padding: '50px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background color 0.3s ease'
    }}>
        <p1> Given Component</p1>
    </div>
  )
}
