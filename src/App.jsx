import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle number and operator inputs
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Evaluate the expression
  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  // Clear the input
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button className="clear-btn" onClick={clearInput}>C</button>
        <button className="function-btn" onClick={() => handleClick("(")}>(</button>
        <button className="function-btn" onClick={() => handleClick(")")}>)</button>
        <button className="operator-btn" onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator-btn" onClick={() => handleClick("")}></button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator-btn" onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator-btn" onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("0")} className="zero">0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equals-btn" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;