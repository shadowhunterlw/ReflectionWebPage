import React from 'react';
import LiveUpdatesCard from './NotificationCards.js';

export default class Notifications extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="StartContainer">
      <div className="updatesMessage">
          Remember who you are!
          <div className="messageDivider">
            WiseUp
          </div>
          <div className="lineDivider"></div>
      </div>
      <div className="updatesMessage">
          You got this!
          <div className="messageDivider">
            WiseUp
          </div>
          <div className="lineDivider"></div>
      </div>
      <div className="updatesMessage">
          In the zone!
          <div className="messageDivider">
            WiseUp
          </div>
          <div className="lineDivider"></div>
      </div>
      </div>
    )
  }



}
