import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
// import "./App.css";

const Button = styled.button`
  color: hotpink;
`;

function App(props) {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter((counter) => counter + 1);
  };
  const desc = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <div className="App">
      <header>
        <p>My name is {props.product}</p>
        <div onClick={inc}>
          <Button>Click me to inc</Button>
        </div>
        <div onClick={desc}>
          <Button>Click me to desc</Button>
        </div>

        <p>{counter}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
