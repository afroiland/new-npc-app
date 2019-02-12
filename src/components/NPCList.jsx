import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class NPCList extends Component {
  render() {
    const { list, handleNameClick, searchString } = this.props;
    //console.log("this.props: ", this.props);
    return (
      <div className="textList">
        <ul>{list.map(npc => <li key={npc.name} className={this.determineDisplay(npc, searchString)}
          onClick={() => handleNameClick(npc.name)}>{npc.name}</li>)}</ul>
      </div>
      // <List>
      //   {list.map(npc => <ListItem key={npc.name} className={this.determineDisplay(npc, searchString)}
      //     onClick={() => handleNameClick(npc.name)}> <ListItemText
      //       // primary="Single-line item"
      //       // secondary={secondary ? 'Secondary text' : null}
      //     />
      //     {npc.name}</ListItem>)}
      // </List>
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

export default withStyles(styles)(NPCList);
