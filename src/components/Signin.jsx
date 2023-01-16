import React, { useState } from "react";
import Input from "./Input";

function Signin() {
  //let url = "shorturl.at/gjrCX";
  //const [count, setCount] = useState(0);
  const [isMousedOver, setMousedOver] = useState(false);
  const [isMousedOut, setmousedOut] = useState(true);
  function handleMousedOver() {
    setMousedOver(true);
  }
  function handleMousedOut() {
    setMousedOver(false);
  }
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Enter Username" />
        <Input type="password" placeholder="Enter password" />
        <Input type="password" placeholder="Confirm Your Password" />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMousedOver}
          onMouseOut={handleMousedOut}
        >
          SignIn
        </button>
      </form>
    </div>
  );
}

export default Signin;
