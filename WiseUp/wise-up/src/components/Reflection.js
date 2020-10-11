import React from 'react';
import ReflectionCards from './ReflectionCards.js';

// child of StartSession
export default class Reflection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      componentData:[]
    };

  }

  componentDidMount(){

  }

  render() {
    const updatesCards = [];
    return (
      <div className="ReflectionRow">
        <div className="ReflectionHeading">
          <b>Reflection </b>
        </div>
        <div className="wrap">
        <ReflectionCards />
        <ReflectionCards />
        <ReflectionCards />

        </div>
      </div>
    )
  }



}
