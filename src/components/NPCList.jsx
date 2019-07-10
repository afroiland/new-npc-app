import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

class NPCList extends Component {
  render() {
    const { list, handleNameClick, searchString, selectedNPC } = this.props;
    return (
      <List component="ul" style={{height: 'calc(100% - 95px)', overflow: 'auto'}}>
        {list.map(npc => <ListItem dense button key={npc.name} style={{
          display: this.determineDisplay(npc, searchString),
          textAlign: 'right',
          backgroundColor: (selectedNPC === npc.name) ? "#009688" : "",
        }} onClick={() => handleNameClick(npc.name)}>
          <ListItemText primary={npc.name} secondary={npc.class !== "Civilian" ? "Lv" + npc.level + " " + npc.class : "Civilian"} />
        </ListItem>)}
      </List>
    );
  }

  determineDisplay = (npc, searchString) => {
    let classes = "";
    // classes += npc.name === this.props.selectedNPC ? "selected " : "notSelected ";

    let allWordList = "";
    allWordList += npc.name;
    allWordList += npc.title;
    allWordList += npc.class;
    allWordList += npc.race;
    allWordList += npc.memorized;
    allWordList += npc.SBLvl_1;
    allWordList += npc.SBLvl_2;
    allWordList += npc.SBLvl_3;
    allWordList += npc.SBLvl_4;
    allWordList += npc.SBLvl_5;
    allWordList += npc.SBLvl_6;
    allWordList += npc.SBLvl_7;
    allWordList += npc.SBLvl_8;
    allWordList += npc.SBLvl_9;
    allWordList += npc.weapon;
    allWordList += npc.armor;
    allWordList += npc.items;
    allWordList += npc.affiliation;
    allWordList += npc.notes;
    if (allWordList.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
      // classes += "notHidden";
      classes = "block"
    } else {
      // classes += "hidden";
      classes = "none"
    }
    return classes;
  }
}

export default NPCList;
