import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import SingleItem from './components/SingleItem';
import AllItems from './components/AllItems';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        {/* <Login /> */}
        <AllItems />
        {/* <SingleItem /> */}
    </div>
  );
}

export default App;
