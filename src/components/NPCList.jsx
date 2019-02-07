import React, { Component } from "react";

class NPCList extends Component {
  render() {
    const { list, handleNameClick, } = this.props;
    return (
      <div className="textList">
        <ul>{list.map(npc => <li key={npc.name} className={this.determineDisplay(npc)}
          onClick={() => handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
    );
  }

  determineDisplay = (npc) => {
    let classes = "";
    classes += npc.name === this.props.selectedNPC ? "selected " : "notSelected ";
    classes += npc.hideInList ? "hidden" : "notHidden";
    return classes;
  }
}

export default NPCList;
