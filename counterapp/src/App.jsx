import { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter app</h1>
      <div className="card">
        <MyButton onClick={() => setCount((count) => count + 1)} label="Increment" />
        <MyButton onClick={() => setCount((count) => count - 1)} label="Decrement" />
        <p>Count is: {count}</p>
      </div>
    </>
  );
}

export default App
