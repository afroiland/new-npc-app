import React, { Component } from 'react';
import NPCList from "./NPCList";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Paper, InputLabel } from "@material-ui/core";
import axios from "axios";
import { fight } from "./../functions/combat";

class Combat extends Component {
  state = {
    NPCList: [],
    groupA: [],
    groupB: [],
    selectedNPC: "",
    combatLog: [],
    searchString: ""
  }

  render() {
    const { groupA, groupB, selectedNPC, searchString } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            <Paper style={{ marginLeft: 5, marginTop: 5, height: "100%" }}>
              <TextField
                id="standard-search"
                label="Search..."
                type="search"
                className="textList"
                margin="normal"
                style={{ width: "95%" }}
                onChange={e => this.handleSearchChange(e.target.value)}
              />
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} selectedNPC={selectedNPC}
                searchString={searchString} />
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper style={{ margin: 5 }}>
              <div style={{ height: 15 }}></div>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleButtonClick("A")}>Add to Group A</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleButtonClick("B")}>Add to Group B</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleButtonClick("remove")}>Remove</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleButtonClick("clear")}>Clear All</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.doAFight()}>Fight</Button>
              <br />
              <div style={{ height: 15 }}></div>
            </Paper>
            <Paper style={{ marginLeft: 5, marginRight: 5, height: "100%" }}>
              <Grid container spacing={24} justify="flex-start" alignItems="stretch" style={{ marginTop: 5, marginLeft: 20, width: '95%' }}>
                <Grid item style={{ padding: 5, flexGrow: 1, height: "100%" }}>
                  <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>Group A</Typography>
                  <List component="ul">
                    {groupA.map(npc => <ListItem dense button key={npc.name} style={{ textAlign: 'right' }}>
                      <ListItemText>
                        <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>{npc.name}</Typography>
                      </ListItemText>
                    </ListItem>)}
                  </List>
                </Grid>
                <Grid item style={{ padding: 5, flexGrow: 1 }}>
                  <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>Group B</Typography>
                  <List component="ul">
                    {groupB.map(npc => <ListItem dense button key={npc.name} style={{ textAlign: 'right' }}>
                      <ListItemText>
                        <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>{npc.name}</Typography>
                      </ListItemText>
                    </ListItem>)}
                  </List>
                </Grid>
                <Grid item style={{ padding: 5, flexGrow: 1 }}>
                  <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>Combat Log</Typography>
                  <List component="ul">
                    {this.state.combatLog.map((string, index) => <ListItem dense key={index} style={{ textAlign: 'right' }}>
                      <ListItemText>
                        <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>{string}</Typography>
                      </ListItemText>
                    </ListItem>)}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3001/getNPCs').then(res => {
      this.setState({ NPCList: res.data });
    });
  }

  handleSearchChange = (newSearchString) => {
    this.setState({ searchString: newSearchString });
  }

  handleNameClick = (name) => {
    this.setState({ selectedNPC: name });
  }

  handleButtonClick = (buttonId) => {
    console.log("handleButtonClick getting hit");
    console.log("buttonId: ", buttonId);
    console.log("this.state: ", this.state);
    if (buttonId === "clear") {
      this.setState({ groupA: [], groupB: [], combatLog: [] });
      return;
    }

    if (!this.state.selectedNPC) {
      return;
    }

    if (buttonId === "remove") {
      let newGroupA = this.state.groupA.filter(obj => {
        return obj.name !== this.state.selectedNPC
      });
      let newGroupB = this.state.groupB.filter(obj => {
        return obj.name !== this.state.selectedNPC
      });
      this.setState({ groupA: newGroupA, groupB: newGroupB });
      return;
    }

    let selectedNPCObject = this.state.NPCList.filter(obj => {
      return obj.name === this.state.selectedNPC;
    });
    let newGroupA = this.state.groupA;
    let newGroupB = this.state.groupB;

    if (buttonId === "A") {
      if (this.state.groupA.some(obj => obj.name === this.state.selectedNPC)) {
        return;
      };
      newGroupA.push(selectedNPCObject[0]);
      newGroupB = newGroupB.filter(obj => {
        return obj.name !== this.state.selectedNPC;
      });
    } else if (buttonId === "B") {
      if (this.state.groupB.some(obj => obj.name === this.state.selectedNPC)) {
        return;
      };
      newGroupB.push(selectedNPCObject[0]);
      newGroupA = newGroupA.filter(obj => {
        return obj.name !== this.state.selectedNPC;
      });
    }
    this.setState({ groupA: newGroupA, groupB: newGroupB });
  }

  doAFight = () => {
    let log = fight(this.state.groupA, this.state.groupB);
    this.setState({ combatLog: log });
  }
}

export default Combat;