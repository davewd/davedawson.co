import React from 'react';
import './App.css';
import {NavHeader, OnlineIdentities} from './components'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />  
      <NavHeader/>
      <header className="App-header">
        <h1>DaveDawson.co</h1>
        <br/>
        <p>
          Product focused Quantitative Developer, enabling Institutional Finance with analytics & automation.
        </p>
        <br/>
        <h5>Sydney based, Leader, Mentor and Do-er!</h5>
        <br/>
        <OnlineIdentities/>
      </header>
    </div>
  );
}

export default App;
