import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate"
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { Paper, InputLabel } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin"]

class ViewContent extends Component {
  _isMounted = false;
  state = {
    levelSelect: 1,
    classSelect: "Fighter",
    NPCList: [],
    name: "",
    title: "",
    level: "",
    npcClass: "",
    race: "",
    currentHP: "",
    maxHP: "",
    status: "",
    ac: "",
    thac0: "",
    str: "",
    ex_str: "",
    int: "",
    dex: "",
    con: "",
    wis: "",
    cha: "",
    spellbookLvl_1: "",
    spellbookLvl_2: "",
    spellbookLvl_3: "",
    spellbookLvl_4: "",
    spellbookLvl_5: "",
    memorized: "",
    gold: "",
    weapon: "",
    items: "",
    probity: "",
    affiliation: "",
    notes: "",
    selectedNPC: "",
    searchString: ""
  };

  render() {
    const { levelSelect, classSelect, name, title, level, npcClass, race, currentHP, maxHP, status, ac, thac0, str, ex_str, int, dex, con, wis, cha,
      spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5, memorized, gold, weapon, items,
      probity, affiliation, notes, selectedNPC, searchString } = this.state;
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
              <FormControl style={{ marginRight: 30 }}>
                <InputLabel>Class</InputLabel>
                <Select value={this.state.classSelect}
                  onChange={e => this.setState({ classSelect: e.target.value })}
                  style={{ width: "150px" }}
                >
                  {classes.map(pcClass => <MenuItem key={pcClass} value={pcClass}>{pcClass}</MenuItem>)}
                </Select>
              </FormControl>
              <FormControl style={{ marginRight: 30 }}>
                <InputLabel>Level</InputLabel>
                <Select value={this.state.levelSelect}
                  onChange={e => this.setState({ levelSelect: e.target.value })}
                  style={{ width: "75px" }}
                >
                  {levelRange.map(level => <MenuItem key={level} value={level}>{level}</MenuItem>)}
                </Select>
              </FormControl>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleGenerate(levelSelect, classSelect)}>Generate</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleSave(this.state)}>Save</Button>
              <Button variant='contained' color='primary' style={{ marginTop: 6 }}
                onClick={() => this.handleClear()}>Clear</Button>
              <br />
              <div style={{ height: 15 }}></div>
            </Paper>
            <Paper style={{ marginLeft: 5, marginRight: 5, height: "100%" }}>
              <NPCDetails handleChange={this.handleChange}
                name={name}
                title={title}
                level={level}
                npcClass={npcClass}
                race={race}
                currentHP={currentHP}
                maxHP={maxHP}
                status={status}
                ac={ac}
                thac0={thac0}
                gold={gold}
                str={str}
                ex_str={ex_str}
                int={int}
                dex={dex}
                con={con}
                wis={wis}
                cha={cha}
                spellbookLvl_1={spellbookLvl_1}
                spellbookLvl_2={spellbookLvl_2}
                spellbookLvl_3={spellbookLvl_3}
                spellbookLvl_4={spellbookLvl_4}
                spellbookLvl_5={spellbookLvl_5}
                memorized={memorized}
                weapon={weapon}
                items={items}
                probity={probity}
                affiliation={affiliation}
                notes={notes}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get('http://localhost:3001/getNPCs').then(res => {
      if (this._isMounted) {
        this.setState({ NPCList: res.data });
      }
    });
  }

  componentDidUpdate() {
    axios.get('http://localhost:3001/getNPCs').then(res => {
      let resDatastring = JSON.stringify(res.data);
      let NPCListString = JSON.stringify(this.state.NPCList);
      let NPCListHasChanged = resDatastring !== NPCListString;
      if (this._isMounted && NPCListHasChanged) {
        this.setState({ NPCList: res.data });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSearchChange = (newSearchString) => {
    console.log("newSearchString: ", newSearchString);
    this.setState({ searchString: newSearchString });
  }

  handleNameClick = (name) => {
    let selectedNPC = this.state.NPCList.filter(obj => {
      return obj.name === name
    });
    this.setState({
      name: selectedNPC[0].name,
      level: selectedNPC[0].level,
      title: selectedNPC[0].title,
      npcClass: selectedNPC[0].class,
      race: selectedNPC[0].race,
      currentHP: selectedNPC[0].currentHP,
      maxHP: selectedNPC[0].maxHP,
      status: selectedNPC[0].status,
      ac: selectedNPC[0].ac,
      thac0: selectedNPC[0].thac0,
      str: selectedNPC[0].str,
      ex_str: selectedNPC[0].ex_str,
      int: selectedNPC[0].intel,
      dex: selectedNPC[0].dex,
      con: selectedNPC[0].con,
      wis: selectedNPC[0].wis,
      cha: selectedNPC[0].cha,
      spellbookLvl_1: selectedNPC[0].SBLvl_1,
      spellbookLvl_2: selectedNPC[0].SBLvl_2,
      spellbookLvl_3: selectedNPC[0].SBLvl_3,
      spellbookLvl_4: selectedNPC[0].SBLvl_4,
      spellbookLvl_5: selectedNPC[0].SBLvl_5,
      memorized: selectedNPC[0].memorized,
      gold: selectedNPC[0].gold,
      weapon: selectedNPC[0].weapon,
      items: selectedNPC[0].items,
      probity: selectedNPC[0].probity,
      affiliation: selectedNPC[0].affiliation,
      notes: selectedNPC[0].notes,
      selectedNPC: selectedNPC[0].name
    });
  }

  handleGenerate = (level, pcClass) => {
    let newNPC = generate(level, pcClass);
    this.setState({
      name: newNPC.name,
      level: newNPC.level,
      title: newNPC.title,
      npcClass: newNPC.npcClass,
      race: newNPC.race,
      currentHP: newNPC.currentHP,
      maxHP: newNPC.maxHP,
      status: "Normal",
      ac: newNPC.ac,
      thac0: newNPC.thac0,
      str: newNPC.str,
      ex_str: newNPC.ex_str,
      int: newNPC.int,
      dex: newNPC.dex,
      con: newNPC.con,
      wis: newNPC.wis,
      cha: newNPC.cha,
      spellbookLvl_1: newNPC.spellbookLvl_1,
      spellbookLvl_2: newNPC.spellbookLvl_2,
      spellbookLvl_3: newNPC.spellbookLvl_3,
      spellbookLvl_4: newNPC.spellbookLvl_4,
      spellbookLvl_5: newNPC.spellbookLvl_5,
      memorized: newNPC.memorized,
      gold: newNPC.gold,
      weapon: newNPC.weapon,
      items: newNPC.items,
      probity: newNPC.probity,
      affiliation: newNPC.affiliation,
      notes: newNPC.notes
    });
  }

  handleSave = (state) => {
    let nameExists = false;
    for (let i = 0, j = state.NPCList.length; i < j; i++) {
      if (state.NPCList[i].name === state.name) {
        nameExists = true;
      }
    }
    if (nameExists) {
      axios.put("http://localhost:3001/update", state)
        .then(res => {
          console.log("update res: ", res);
        });
    } else {
      axios.post("http://localhost:3001/add", state)
        .then(res => {
          console.log("add res: ", res);
        });
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  handleClear = () => {
    this.setState({
      name: "",
      title: "",
      level: "",
      npcClass: "",
      race: "",
      currentHP: "",
      maxHP: "",
      status: "",
      ac: "",
      thac0: "",
      str: "",
      ex_str: "",
      int: "",
      dex: "",
      con: "",
      wis: "",
      cha: "",
      spellbookLvl_1: null,
      spellbookLvl_2: null,
      spellbookLvl_3: null,
      spellbookLvl_4: null,
      spellbookLvl_5: null,
      memorized: null,
      gold: "",
      weapon: "",
      items: "",
      probity: "",
      affiliation: "",
      notes: ""
    });
  }
}

export default ViewContent;
