import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div >
        <div id="connect">
          <input type="text" id="pic" placeholder="pic" /><br />
          <input type="button" value="join game!" onclick="startplay()" /> 
        </div>
      </div>
    );
  }
}

export default Controls;
