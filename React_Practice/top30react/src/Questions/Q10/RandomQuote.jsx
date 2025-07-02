import React from 'react'

export default function RandomQuote() {
    const quotesArr = ["q1", "q2", "q3", "q4", "q5"];
    const randomIndex = Math.floor(Math.random() * quotesArr.length);

    const isQuote = quotesArr[randomIndex];
  return (
    <div>
        {isQuote};
    </div>
  )
}
