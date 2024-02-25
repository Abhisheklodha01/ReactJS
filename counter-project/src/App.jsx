import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15
  const addValue = () => {

    // console.log("Clicked ", counter);
    if(counter < 20)
    {
      counter = counter + 1;
      setCounter(counter);
    }
   
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value : {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
