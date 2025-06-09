import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setanimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setanimatedProgress(progress);
    }, 1000);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: progress < 5 ? "black" : "white",
        }}
        // role="progressbar"
        // aria-valuenow={progress}
        // aria-valuemax="100"
        // area-valuemin="0"
      >
        {" "}
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [2, 3, 5, 10, 15, 25, 40, 50, 70, 80];
  return (
    <div className="App">
      <h1>Progress bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
