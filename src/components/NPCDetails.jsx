import React, { Component } from "react";

class NPCDetails extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.selectedNPC.name}</p>
        <p>Title: {this.props.selectedNPC.title}</p>
        <p>Level: {this.props.selectedNPC.level}</p>
        <p>Class: {this.props.selectedNPC.class}</p>
        <p>Current HP: {this.props.selectedNPC.currentHP}</p>
        <p>Max HP: {this.props.selectedNPC.maxHP}</p>
        <p>AC: {this.props.selectedNPC.ac}</p>
        {/* attributes */}
        {/* <p>Items: {this.props.selectedNPC.items}</p> */}
        <p>Ranking: {this.props.selectedNPC.ranking}</p>
        <p>Affiliation: {this.props.selectedNPC.affiliation}</p>
        {/* <p>Notes: {this.props.selectedNPC.notes}</p> */}
      </div>
    );
  }
}

export default NPCDetails;
