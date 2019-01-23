import React, { Component } from "react";

class NPCList extends Component {
  render() {
    //console.log("NPCList props: ", this.props);
    return (
      // <button onClick={(e) => this.props.handleNameClick(e)}>ok</button>

      <div>
        <ul>{this.props.list.map(npc => <li key={npc.name} onClick={() => this.props.handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
    );
  }
}

export default NPCList;
