import { useState } from "react";
import "./index.css";

function App() {
  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState("");

  function onClick(event) {
    let value = event.currentTarget.innerText;
    if (value == "x") {
      value = "*";
    }

    if (event.currentTarget.id == "plus-minus") {
      const validation = calculation * -1;
      if (Number.isNaN(validation)) {
        reset();
      } else {
        setCalculation(calculation * -1);
      }
    } else {
      setCalculation(calculation + value);
    }
  }

  function reset() {
    setResult(0);
    setCalculation("");
  }

  function calculate() {
    try {
      const result = eval(calculation);
      setResult(String(result));
    } catch (error) {
      reset();
    }
  }

  return (
    <main>
      <div className="container">
        <section className="upperPart">
          <p className="calculationContainer">{calculation}</p>
          <p className="resultContainer">{result}</p>
        </section>
        <section className="lowerPart">
          <div className="column">
            <button onClick={reset}>C</button>
            <button onClick={onClick}>7</button>
            <button onClick={onClick}>4</button>
            <button onClick={onClick}>1</button>
            <button className="invisible"></button>
          </div>
          <div className="column">
            <button id="plus-minus" onClick={onClick}>
              <div className="textDiv">
                <p className="margin-top-20">+</p>
                <p>-</p>
              </div>
            </button>
            <button onClick={onClick}>8</button>
            <button onClick={onClick}>5</button>
            <button onClick={onClick}>2</button>
            <button onClick={onClick}>0</button>
          </div>
          <div className="column">
            <button onClick={onClick}>/</button>
            <button onClick={onClick}>9</button>
            <button onClick={onClick}>6</button>
            <button onClick={onClick}>3</button>
            <button onClick={onClick}>.</button>
          </div>
          <div className="column">
            <button onClick={onClick}>x</button>
            <button onClick={onClick}>-</button>
            <button onClick={onClick}>+</button>
            <button onClick={calculate} className="large-button">
              =
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
