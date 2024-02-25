import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "abhishek",
    age: 20
  }
  let newarr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>

                     {/* props  */}
      {/* <Card channel="chaiaurcode"someObj = {newarr} /> */}
      <Card username="chaiaurcode" btnText = "clickme" />
      <Card username="abhishek" />
    </>
  );
}

export default App;
