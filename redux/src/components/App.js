import Header from './Header';
import Text from './Text';
import FloatingActionButton from './FloatingActionButton';

import { useSelector } from 'react-redux'
import { increment, decrement } from '../redux/store';

function App () {

  const counter = useSelector((state) => {
    return state.count;
  });

  return (
    <div className="App">
      <Header title="my great counter app" />
      <div id="center">
        <Text value={ counter }/>
      </div>
      <FloatingActionButton id="incr" content="+" onclick = { () => increment(1) }/>
      <FloatingActionButton id="decr" content="-" onclick = { () => decrement(1) }/>
    </div>
  );
}

export default App;
