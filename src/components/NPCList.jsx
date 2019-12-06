import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const NPCList = ({ list, handleNameClick, searchString, selectedNPC }) => {

  const determineDisplay = (npc, searchString) => {
    let classes = "";

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
      classes = "block"
    } else {
      classes = "none"
    }
    return classes;
  }

  return (
    <SimpleBar style={{ height: 'calc(100% - 95px)', overflow: 'auto' }}>
      {list.map(npc => <ListItem dense button key={npc.name} style={{
        display: determineDisplay(npc, searchString),
        textAlign: 'right',
        backgroundColor: (selectedNPC === npc.name) ? "#009688" : "",
      }} onClick={() => handleNameClick(npc.name)}>
        <ListItemText primary={npc.name} secondary={npc.title} />
      </ListItem>)}
    </SimpleBar>
  );
};

export default NPCList;
