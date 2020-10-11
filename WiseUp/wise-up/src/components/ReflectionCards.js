import React from 'react';

// child of StartSession
export default class ReflectionCards extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    };

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="wkspcard">
        <div className="wkspDetails">
          <b className="titleColor">Goals: </b>
          study math
        </div>
        <div className="wkspDetails">
          <b className="titleColor">Feelings: </b>
          meh
        </div>
        <div className="wkspDetails">
          <b className="titleColor">Hours Studied: </b>
          3
        </div>
        </div>
    );
  }



}
