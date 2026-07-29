import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [userInput, setUserInput] = useState("");

  function handleAddition() {
    setResult(result + Number(userInput));
  }
  function handleSubtraction() {
    setResult(result - Number(userInput));
  }
  function handleMultiplication() {
    setResult(result * Number(userInput));
  }
  function handleDivision() {
    if (Number(userInput) !== 0) {
      setResult(Math.round((result / Number(userInput)) * 100) / 100);
    }
  }
  function handleResetResult() {
    setResult(0);
  }
  function handleResetInput() {
    setUserInput("");
  }

  return (
    <div className="App">
      <h2 className="calc-title">Yusuf Calculator</h2>
      <h1>{result}</h1>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div className="math-button">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div className="reset-button">
        <button onClick={handleResetResult}>Reset Result</button>
        <button onClick={handleResetInput}>Reset Input</button>
      </div>
    </div>
  );
}

export default App;
