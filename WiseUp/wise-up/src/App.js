import React from 'react';
import './styles/core.css'
import './styles/StartSession.css';
import './styles/Notifications.css';
import './styles/ReflectionRow.css';
import './styles/Summary.css';
import StartSession from './components/StartSession.js';
import Reflection from './components/Reflection.js';
import Summary from './components/Summary.js';
import Notifications from './components/Notifications.js';


function App() {



  return (
    // this will be majority of the HTML
    <div className="App">
      <div className="header">
        <h1>WiseUp</h1>
        <p>Reflect and motivate yourself along your journey to healthy productivity</p>
        </div>

    <div className="topnav">
      <a>Home</a>
      <a>Sessions</a>
      <a>Reflection Summary</a>
    </div>

    <div className="wrapper">
      <div className="column">
      <b>Inspirational Notifications</b>
        <br/>
          <Notifications/>
      </div>
      <div className="column">
        <b>Start a Session!</b>
          <br/>
          <StartSession/>
      </div>
    </div>
    <Reflection/>
    <Summary/>

    </div>
  );
}

export default App;
