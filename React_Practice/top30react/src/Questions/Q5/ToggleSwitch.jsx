// Implement a basic toggle switch component
import { useState } from "react";
const ToggleComponent = () => {
  const [toggleElement, setToggleElement] = useState(false);
  const handleChange = () => {
    setToggleElement(!toggleElement);
  };
  return (
    <>
      <p> Okay{toggleElement} </p>

      <input type="checkbox" onChange={handleChange}></input>

      {/* <button onClick={() => setToggleElement(!toggleElement)}>Click </button> */}
      <p> {toggleElement ? "On" : "Off"}</p>
    </>
  );
};

export default ToggleComponent;
