import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './page/Board';

function App() {

  const [s, setS] = React.useState(0);

  const [msg, setMsg] = React.useState("Click Image To Play!!!");

  const compoment = function() {
    if(s === 0) {
      return <img onClick={()=>{
        setS(1);
        setMsg("Click Me To Show Image!!!");
      }} src={logo} className="App-logo" alt="logo" />;
    }else {
      return <Game/>
    }
  }();

  return (
    <div className="App">
      <header className="App-header">
        {compoment}
        {/*<Game/>*/}
        <p onClick={()=>{
          setS(0);
          setMsg("Click Image To Play!!!");
        }}>
          {msg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
