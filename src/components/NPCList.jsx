import React, { Component } from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

class NPCList extends Component {
  render() {
    const { list, handleNameClick, searchString } = this.props;
    return (
      // <div className="textList">
      <List component="ul">
        {/* <ul>{list.map(npc => <li key={npc.name} className={this.determineDisplay(npc, searchString)}
          onClick={() => handleNameClick(npc.name)}>{npc.name}</li>)}</ul> */}
          {list.map(npc => <ListItem dense button key={npc.name} onClick={() => handleNameClick(npc.name)}>
            <ListItemText>
            <Typography >{npc.name}</Typography>
          </ListItemText>
          </ListItem>)}
      </List>
    );
  }

  determineDisplay = (npc, searchString) => {
    let classes = "";
    classes += npc.name === this.props.selectedNPC ? "selected " : "notSelected ";

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
    allWordList += npc.weapon;
    allWordList += npc.items;
    allWordList += npc.affiliation;
    allWordList += npc.notes;
    if (allWordList.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
      classes += "notHidden";
    } else {
      classes += "hidden";
    }
    return classes;
  }
}

export default NPCList;
