import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>This is the homepage for ontime app</h2>
    </div>
  );
}

export default App;
