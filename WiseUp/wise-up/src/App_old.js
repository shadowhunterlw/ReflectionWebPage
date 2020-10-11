import React from 'react';
import StartSession from './components/StartSession';

function App() {
  return (
    // this will be majority of the HTML
    <div className="App">
    <body>
        <header>
            <h1>WiseUp study buddie</h1>
              <div>
                <p>The app that helps you stay motivated</p>
              </div>
        </header>

        <main>
            <div class="session_container">
                <h2>Start a Session</h2>
                <div class="session_container_blue">
                    <h3>Session form</h3>
                    <form class="session">
                        <div>
                            <input class="session_input" type="text" id="reason"/>
                            <label for="reason"><br/>What do you want to accomplish in this session?</label>
                        </div>
                        <br/>
                        <div>
                            <input class="session_input" type="text" id="feeling"/>
                            <label for="feeling"><br />How are you feeling before this study session</label>
                        </div>
                        <br/>
                        <div>
                            <input class="session_input_num" type="number" id="time"/>
                            <label for="time"><br />How long will this session be? <span>*In hours</span></label>
                        </div>
                        <br/>
                        <div>
                            <input id="button" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>

        </main>

        <nav>
            <div>
                <p>Navigation</p>
            </div>
        </nav>

        <aside>
            <div>
                <p>Changes and updates</p>
            </div>
        </aside>

        <footer>
            <p> Author: LYC</p>
        </footer>
    </body>
    </div>
  );
}

export default App;
