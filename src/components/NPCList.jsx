import React, { Component } from "react";

class NPCList extends Component {
  render() {
    console.log("this.props: ", this.props);
    return (
      <div>
        <ul>{this.props.list.map(npc => <li key={npc.name} style={{ display: npc.hideInList ? 'none' : 'block' }}
          onClick={() => this.props.handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
    );
  }
}

export default NPCList;
