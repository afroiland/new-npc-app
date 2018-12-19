import React, { Component } from "react";

class NPCDetails extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.npc.name}</p>
        <p>Title: {this.props.npc.title}</p>
        <p>Level: {this.props.npc.level}</p>
        <p>Class: {this.props.npc.class}</p>
        <p>Current HP: {this.props.npc.currentHP}</p>
        <p>Max HP: {this.props.npc.maxHP}</p>
        <p>AC: {this.props.npc.ac}</p>
        {/* attributes */}
        {/* <p>Items: {this.props.npc.items}</p> */}
        <p>Ranking: {this.props.npc.ranking}</p>
        <p>Affiliation: {this.props.npc.affiliation}</p>
        {/* <p>Notes: {this.props.npc.notes}</p> */}
      </div>
    );
  }
}

export default NPCDetails;
