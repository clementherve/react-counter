import Header from './Header';
import Text from './Text';
import FloatingActionButton from './FloatingActionButton';
import React, { useState }  from 'react';


function App () {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <Header title="my great counter app" reset = { () => { setCounter(0) } } />
      <div id="center">
        <Text value={ counter }/>
      </div>
      <FloatingActionButton id="incr" content="+" onclick = { () => increment() }/>
      <FloatingActionButton id="decr" content="-" onclick = { () => decrement() }/>
    </div>
  );
}

export default App;
