import { useState } from "react";
import styled from "styled-components";

const calcArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
const mathOperations = ["-", "+", "/", "*"];

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
`;
const CalcButton = styled.button`
  width: 100px;
  height: 100px;
`;

function App() {
  const [number, setNumber] = useState("");

  function calc(event) {
    console.log(event.target.value);
    setNumber(prevNumber=>String(prevNumber)+event.target.value)
  }

  return (
    <>
      <Calculator>
        {calcArray.map((row) => (
          <Row key={row}>
            {row.map((number) => (
              <CalcButton onClick={calc} value={number} key={number}>
                {number}
              </CalcButton>
            ))}
          </Row>
        ))}
      </Calculator>
      <p>Output Number</p>
      <p>{number}</p>
    </>
  );
}

export default App;
