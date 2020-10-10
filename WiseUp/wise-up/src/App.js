import React from 'react';
import StartSession from './components/StartSession.js';

function App() {
  return (
    // this will be majority of the HTML
    <div className="App">
      <body>
      <div class="header">
        <h1>WiseUp</h1>
        <p>Productivity Reflection: Quality over Quantity</p>
        </div>

    <div class="topnav">
      <a>Home</a>
      <a>Sessions</a>
      <a>Reflection Summary</a>
    </div>

    <div class="wrapper">
      <div class="column">
      <b>Inspirational Notifications</b>
        <br/>
          <div class="NotificationsContainer">
            <div class="NotificationCards">
              <b> Start </b>
            </div>
          </div>
      </div>
      <div class="column">
        <b>Get Started!</b>
          <br/>
          <div class="StartContainer">
            <div class="StartSession">
              <b> Start </b>
            </div>
            <div class="StartSession">
              <b> Stop </b>
            </div>
          </div>
      </div>
    </div>



    </body>
    </div>
  );
}

export default App;
