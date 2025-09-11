import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      
      <div className="counter-section">
        <h2>Counter: {count}</h2>
        <div className="counter-buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;