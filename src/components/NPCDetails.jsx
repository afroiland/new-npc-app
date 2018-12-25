import React, { Component } from "react";

class NPCDetails extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.npc.name}</p>
        <p>Title: {this.props.npc.title}</p>
        <p>Level: {this.props.npc.level}</p>
        <p>Class: {this.props.npc.class}</p>

        {this.props.npc.ex_str ? (<p>Str: {this.props.npc.str}/{this.props.npc.ex_str}</p>
          ) : (
            <p>Str: {this.props.npc.str}</p>
          )}
        <p>Int: {this.props.npc.int}</p>
        <p>Dex: {this.props.npc.dex}</p>
        <p>Con: {this.props.npc.con}</p>
        <p>Wis: {this.props.npc.wis}</p>
        <p>Cha: {this.props.npc.cha}</p>

        <p>Current HP: {this.props.npc.currentHP}</p>
        <p>Max HP: {this.props.npc.maxHP}</p>
        <p>AC: {this.props.npc.ac}</p>
        {/* <p>Items: {this.props.npc.items}</p> */}
        <p>Gold: {this.props.npc.gold}</p>
        <p>Ranking: {this.props.npc.ranking}</p>
        <p>Affiliation: {this.props.npc.affiliation}</p>
        {/* <p>Notes: {this.props.npc.notes}</p> */}
      </div>
    );
  }
}

export default NPCDetails;
