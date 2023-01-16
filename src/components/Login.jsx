import React, { useState } from "react";
import Input from "./Input";
//import Button from "./Button";

function Login() {
  //const [count, setCount] = useState(0);
  const [heading, setHeading] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);
  function handleMousedOver() {
    setMousedOver(true);
  }
  function handleMousedOut() {
    setMousedOver(false);
  }
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Enter your Username" />
        <Input type="password" placeholder="Enter your Password" />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMousedOver}
          onMouseOut={handleMousedOut}
        >
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;
