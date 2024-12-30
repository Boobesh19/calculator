import { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const num1 = parseFloat(input1) || 0;
    const num2 = parseFloat(input2) || 0;

    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error (Divide by 0)';
        break;
      default:
        res = 'Invalid Operation';
    }
    setResult(res);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter first number"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter second number"
        />
        <button onClick={calculate}>Calculate</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
