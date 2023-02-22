import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoPower, setAutoPower] = useState(0);
  
  // Increase count by clickPower
  const handleClick = () => {
    setCount(count + clickPower);
  };
  
  // Increase count by autoPower every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + autoPower);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [count, autoPower]);
  
  // Increase clickPower by 1 when count reaches 10
  useEffect(() => {
    if (count >= 10) {
      setClickPower(clickPower + 1);
    }
  }, [count, clickPower]);
  
  // Increase autoPower by 1 when count reaches 20
  useEffect(() => {
    if (count >= 20) {
      setAutoPower(autoPower + 1);
    }
  }, [count, autoPower]);
  
  return (
    <div>
      <h1>My Incremental Game</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me!</button>
      <p>Click Power: {clickPower}</p>
      <p>Auto Power: {autoPower}</p>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));