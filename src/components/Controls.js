import React, { Component } from 'react';
import {StartGame} from '../state/actions';
import { connect } from "react-redux";

class Controls extends Component {

  constructor(props) {
    super(props);
    //declare new field
    //use createRef to assgin memory
    //in your HTML attach this filed
    this.myImageInput = React.createRef();
  }


  render() {
    return (
      <div >
        <div id="connect">
          <input type="text" ref={this.myImageInput} placeholder="pic" /><br />
          <input type="button" value="join game!" onClick={this.startGame.bind(this)} />
        </div>
      </div>
    );
  }

  startGame() {

    let myImageString = this.myImageInput.current.value;
    let top = Math.floor((Math.random() * 800) + 1);
    let left = Math.floor((Math.random() * 800) + 1);

    var messageToSend = {
      pic: myImageString,
      pos: { top: top, left: left }
    } 
    this.props.StartGame(messageToSend); 
  }



}



const mapDispatchToProps = dispatch => {
  let propsObj = {
    //every field change new action will dispatch
    StartGame: dataChanged => dispatch(StartGame(dataChanged))
  }
  return propsObj;
};

const controls = connect(null , mapDispatchToProps)(Controls);

export default controls;
 