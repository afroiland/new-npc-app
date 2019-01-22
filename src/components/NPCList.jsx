import React, { Component } from "react";

class NPCList extends Component {
  render() {
    console.log("NPCList props: ", this.props);
    return (
      <button onClick={(e) => this.props.handleClick(e)}>ok</button>
    );
  }
}

export default NPCList;
