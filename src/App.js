import React, { useState } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  color: hotpink;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
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
    <div>
      <header>
        <h3>This is {props.product}</h3>
        {props.product === "live" && <h3>This content is for live only</h3>}
        <ButtonWrapper>
          <div onClick={inc}>
            <Button>Click me to inc</Button>
          </div>
          <p>{counter}</p>
          <div onClick={desc}>
            <Button>Click me to desc</Button>
          </div>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
