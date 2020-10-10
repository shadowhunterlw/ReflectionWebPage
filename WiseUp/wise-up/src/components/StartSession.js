import React from 'react';
import '../styles/StartSession.css';

export default class StartSession extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0
    }

  }

  /*componentDidMount(){

  }*/
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
  }

  render() {


    return (
      <div className="StartSession">
        <button onClick={() => this.startTimer()}>
            Start
        </button>
      </div>
    )
  }



}
