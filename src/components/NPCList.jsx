import React, { Component } from "react";

class NPCList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.list.map(npc => <li key={npc.name} onClick={() => this.props.handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
    );
  }
}

export default NPCList;
