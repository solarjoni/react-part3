import React from 'react';
import './App.css';
const { useEffect, useState } = React;

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      console.log('TimerID ' + timerID)
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

const ButtonExample = () => {

  return (
    <div>
      <button onClick={() => console.log('You clicked submit!')}>
        Click me!
			</button>
    </div>
  );
};

const ButtonExample2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter is currently: {counter}</p>
      <button onClick={() => setCounter(x => x - 1)}>DEC </button>
      <button onClick={() => setCounter(x => x + 1)}>INC </button>
    </div>
  );
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('You clicked submit form!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Clock />
      <ButtonExample />
      <Form />
      <ButtonExample2 />
    </div>
  );
};

export default App;
