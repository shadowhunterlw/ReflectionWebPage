import React from 'react';

export default class StartSession extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
      start: 0,
      accomplish: "",
      feeling: "",
      hours: 0,
      list:[]
    }

  }

  componentDidMount(){

  }
  /*startTimer() {
    // start global timer here
    setInterval(() => {
      return this.setState((state, props) => {

        return{
          seconds: state.seconds===59?0:state.seconds+1,
          minutes:state.second===59?state.minute+1:state.minutes
        }

      })
    }, 1000)
  }*/

  startTimer() {
    console.log("started study session");
    // copy current list of items
    const list = [...this.state.list];
    console.log(list);
    //let value={this.state.start}
    //value = 1
  }
  stopTimer() {
    console.log("stopped study session");
    const list = [...this.state.list];
    console.log(list);
    //let value={this.state.start}
    //value = 0

  }

  updateInput(key, value) {
  // update react state
  this.setState({ [key]: value });
}

  addAccom(){
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.accomplish.slice()

    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      accomplish: ""
    });
  }

  addFeelings(){
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.feeling.slice()

    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      feeling: ""
    });
  }

  addHours(){
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.hours.slice()

    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      hours: ""
    });
  }

  render() {
    console.log('tiggered during render');
    return (
      <div className="StartContainer">
          <div className="session_container_blue">
                  <div>
                    <label for="reason">
                    What do you want to accomplish in this session?
                    </label>
                      <input className="session_input"
                      type="text"
                      id="reason"
                      value={this.state.accomplish}
                      onChange={e => this.updateInput("accomplish", e.target.value)}
                      />
                      <button className="SubmitButton" onClick={() => this.addAccom()}>
                          Submit
                      </button>
                  </div>
                  <br/>
                  <div>
                      <label for="feeling">How are you feeling before this study session</label>
                      <input className="session_input"
                      type="text"
                      id="feeling"
                      value={this.state.feeling}
                      onChange={e => this.updateInput("feeling", e.target.value)}
                      />
                      <button className="SubmitButton" onClick={() => this.addFeelings()}>
                          Submit
                      </button>
                  </div>
                  <br/>
                  <div>
                      <label for="time">How long will this session be? <span>*In hours</span></label>
                      <br/>
                      <input className="session_input_num"
                      type="number"
                      id="time"
                      value={this.state.hours}
                      onChange={e => this.updateInput("hours", e.target.value)}
                      />
                  </div>
                  <button className="SubmitButton" onClick={() => this.addHours()}>
                      Submit
                  </button>
          </div>
          <br/> <br/>
          <button className="StartButton" onClick={() => this.startTimer()}>
            Start
          </button>
          <button className="StopButton" onClick={() => this.stopTimer()}>
            Stop
          </button>
      </div>
    )
  }



}
