
// // Build  a timer that count downs from a specified time
// import { useState } from "react";
// const Timer = () => {
//     const [num, setNum] = useState(0);
//     const [timeVal, setTimeVal] = useState(0);
//     handleChange = (e) =>{
//         timerCountDownFunction(e);
//     }

//     function timerCountDownFunction(e){
//         cont val = 
//     }
//     return (
//         <div className="timer">
//             <form onSubmit={handleChange}>
//             <p> Timer:</p>
//             <input type="number" value ={num} onChange={e => setNum(e)}></input>
//             <button onClick={() => {handleChange}}>Start</button>
//             </form>
//         </div>
//     );
// };
// export default Timer;

import { useEffect, useState } from "react";
const Timer = () => {
    const [timerValue, setTimerValue] = useState("");
    const [timeV, setTimeV] = useState(0);
    useEffect(() => {
        let interval;

        if(timeV > 0){
            interval = setInterval(() => {
                setTimeV(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timeV]);

    return(
        <div className="timer">
            <input type = "number" value = {timerValue} onChange={e => setTimerValue(e.target.value)}></input>
            <p> Timer: {timeV}</p>
            {/* <button onClick={() => setTimerValue(timerValue)} */}
            <button onClick = {() => setTimeV(parseInt(timerValue))}></button>
        </div>
    )
}

export default Timer;