import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  var userExist = true;
  // const [count, setCount] = useState(0);
  //const [isMousedOver, setMousedOver] = useState(false);
  //const [isMousedOut, setmousedOut] = useState(true);
  //function handleMousedOver() {
  //setMousedOver(true);
  //}
  //function handleMousedOut() {
  //setmousedOut(false);
  // }

  return <div className="container">{userExist ? <Login /> : <Signin />}</div>;
}

export default App;
