import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 5

  const addValue = () => {
    console.log('add', counter)
    // setCounter(() => {});
    if (counter >= 20) return;
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    console.log('remove', counter);
    // counter = counter + 1
    if (counter < 1) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Reacti Series</h1>
      <h2>Counter Value = {counter}</h2>
      <button onClick={removeValue}>Decrease Value {counter}</button> | <button onClick={addValue}>Increase Value {counter}</button>
      <footer>Footer {counter}</footer>
    </>
  )
}

export default App
