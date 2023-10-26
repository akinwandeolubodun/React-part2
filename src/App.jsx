import { useState } from "react";
// import './App.css'

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  console.log("rerendered")
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1)
  }
  
  // let count = 0;
  return (
    <>
      <h1 onClick={handleIncrement}>{count}</h1>
      <button onClick={handleIncrement}>Add to count</button>
      <input onChange={handleIncrement} />
    </>
  )
}

export default App
