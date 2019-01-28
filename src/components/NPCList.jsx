import React, { Component } from "react";

class NPCList extends Component {
  render() {
    //console.log("this.props.list: ", this.props.list);
    return (
      <div>
        <ul>{this.props.list.map(npc => <li key={npc.name} style={{ display: npc.hideInList ? 'none' : 'block' }}
          style={{ color: npc.name === this.props.selectedNPC ? 'blue' : 'black'}}
          onClick={() => this.props.handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
    );
  }
}

export default NPCList;
