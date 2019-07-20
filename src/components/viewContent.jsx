import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "../functions/generate"
import { calcConBonus } from "../functions/conBonus";
import { calcAC } from "../functions/ac";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { Paper, InputLabel } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { calcThac0 } from "../functions/thac0";
import { determineAbilities } from '../functions/abilities';

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin", "Druid", "Paladin", "Ranger", "Civilian"];
//const tables = ["Test", "Marathea"];

class ViewContent extends Component {
  _isMounted = false;
  state = {
    levelSelect: 1,
    classSelect: "Fighter",
    tableSelect: "Marathea",
    NPCList: [],
    name: "",
    title: "",
    level: "",
    npcClass: "",
    race: "",
    age: "",
    gender: "",
    currentHP: "",
    hp_by_lvl: [],
    status: "",
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
    spellbookLvl_6: "",
    spellbookLvl_7: "",
    spellbookLvl_8: "",
    spellbookLvl_9: "",
    memorized: "",
    gold: "",
    armor: "",
    weapon: "",
    items: "",
    probity: "",
    affiliation: "",
    notes: "",
    selectedNPC: "",
    searchString: ""
  };

  render() {
    const { levelSelect, classSelect, name, title, level, npcClass, race, age, gender, currentHP, status, str, ex_str,
      int, dex, con, wis, cha, spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5,
      spellbookLvl_6, spellbookLvl_7, spellbookLvl_8, spellbookLvl_9, memorized, gold, armor, weapon, items, probity,
      affiliation, notes, selectedNPC, searchString } = this.state;
    return (
      <div style={{ height: 'calc(100% - 48px)' }}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={2} style={{ height: '100%' }}>
            <Paper style={{ marginLeft: 5, marginTop: 5, height: "calc(100% - 10px)" }}>
              <TextField
                id="standard-search"
                label="Search..."
                type="search"
                className="textList"
                margin="normal"
                style={{ width: "95%" }}
                onChange={e => this.handleSearchChange(e.target.value)}
              />
              {/* <NPCList list={this.sortByProbity(this.state.NPCList) === this.state.NPCList ? this.state.NPCList : this.sortByProbity(this.state.NPCList)} handleNameClick={this.handleNameClick} selectedNPC={selectedNPC} */}
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} selectedNPC={selectedNPC}
                searchString={searchString} />
            </Paper>
          </Grid>
          <Grid item xs={10} style={{ height: '100%' }}>
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
                  {/* TODO: Change level range based on class dropdown */}
                  {levelRange.map(level => <MenuItem key={level} value={level}>{level}</MenuItem>)}
                </Select>
              </FormControl>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleGenerate(levelSelect, classSelect)}>Generate</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleLevelUp(this.state)}>Level Up</Button>
              <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleSave(this.state)}>Save</Button>
              <Button variant='contained' color='primary' style={{ marginTop: 6 }}
                onClick={() => this.handleClear()}>Clear</Button>

              {/* The following represents a dropdown for selecting different tables from which to pull NPC data */}

              {/* <FormControl style={{ marginRight: 30 }}>
                <InputLabel>Table</InputLabel>
                <Select value={this.state.tableSelect}
                  onChange={e => this.setState({ tableSelect: e.target.value })}
                  style={{ width: "100px" }}
                >
                  {tables.map(table => <MenuItem key={table} value={table}>{table}</MenuItem>)}
                </Select>
              </FormControl> */}

              <br />
              <div style={{ height: 15 }}></div>
            </Paper>
            <Paper style={{ marginLeft: 5, marginRight: 5, height: 'calc(100% - 93px)', overflow: 'auto' }}>
              <NPCDetails handleChange={this.handleChange}
                name={name}
                title={title}
                level={level}
                npcClass={npcClass}
                race={race}
                age={age}
                gender={gender}
                currentHP={currentHP}
                maxHP={this.calcMaxHP() !== 0 ? this.calcMaxHP() : ""}
                status={status}
                ac={npcClass !== "" ? calcAC(npcClass, level, armor, parseInt(dex)) : ""}
                thac0={calcThac0(level, npcClass, str, ex_str) !== undefined ? calcThac0(level, npcClass, str, ex_str) : ""}
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
                spellbookLvl_6={spellbookLvl_6}
                spellbookLvl_7={spellbookLvl_7}
                spellbookLvl_8={spellbookLvl_8}
                spellbookLvl_9={spellbookLvl_9}
                abilites={determineAbilities(npcClass, level, race, dex)}
                memorized={memorized}
                armor={armor}
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
    //TODO: determine schema from which to get NPCs
    axios.get('http://localhost:3001/getNPCs').then(res => {
      if (this._isMounted) {
        this.setState({ NPCList: res.data });
      }
    });
  }

  componentDidUpdate() {
    //console.log("updating");
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
      age: selectedNPC[0].age,
      gender: selectedNPC[0].gender,
      currentHP: selectedNPC[0].currentHP,
      hp_by_lvl: selectedNPC[0].hp_by_lvl.split(','),
      status: selectedNPC[0].status,
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
      spellbookLvl_6: selectedNPC[0].SBLvl_6,
      spellbookLvl_7: selectedNPC[0].SBLvl_7,
      spellbookLvl_8: selectedNPC[0].SBLvl_8,
      spellbookLvl_9: selectedNPC[0].SBLvl_9,
      memorized: selectedNPC[0].memorized,
      gold: selectedNPC[0].gold,
      armor: selectedNPC[0].armor,
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
      age: newNPC.age,
      gender: newNPC.gender,
      currentHP: newNPC.currentHP,
      hp_by_lvl: newNPC.hp_by_lvl,
      status: "Normal",
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
      spellbookLvl_6: newNPC.spellbookLvl_6,
      spellbookLvl_7: newNPC.spellbookLvl_7,
      spellbookLvl_8: newNPC.spellbookLvl_8,
      spellbookLvl_9: newNPC.spellbookLvl_9,
      memorized: newNPC.memorized,
      gold: newNPC.gold,
      armor: newNPC.armor,
      weapon: newNPC.weapon,
      items: newNPC.items,
      probity: newNPC.probity,
      affiliation: newNPC.affiliation,
      notes: newNPC.notes,
      selectedNPC: ""
    });
  }

  handleLevelUp = (state) => {
    console.log("level up state: ", state);
    //TODO: Have modal pop up where the HP for the new level can be entered
  }

  handleSave = (state) => {
    let nameExists = false;
    for (let i = 0, j = state.NPCList.length; i < j; i++) {
      if (state.NPCList[i].name === state.name) {
        nameExists = true;
        break;
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
      // TODO: Replace setTimeout (async/await, I'm guessing?)
      setTimeout(() => {this.setState({selectedNPC: state.name} )}, 50);
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
      age: "",
      gender: "",
      currentHP: "",
      hp_by_lvl: [],
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
      spellbookLvl_6: null,
      spellbookLvl_7: null,
      spellbookLvl_8: null,
      spellbookLvl_9: null,
      memorized: null,
      gold: "",
      armor: "",
      weapon: "",
      items: "",
      probity: "",
      affiliation: "",
      notes: "",
      selectedNPC: ""
    });
  }

  // TODO: Change this guy to be more like the calcThac0 logic?
  calcMaxHP() {
    let result = this.state.hp_by_lvl.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
      calcConBonus(this.state.level, this.state.npcClass, this.state.con);

    if (result !== 0) {
      return result;
    }
    return "";
  }

  // sortByProbity(list) {
  //   let tempList = list.sort(compare);

  //   function compare(b, a) {
  //     const probityA = a.probity;
  //     const probityB = b.probity;
  //     let comparison = 0;
  //     if (probityA > probityB) {
  //       comparison = 1;
  //     } else if (probityA < probityB) {
  //       comparison = -1;
  //     }
  //     return comparison;
  //   }

  //   // Tried the following to fix the looping bug, but did not work
  //   if (list == tempList) {
  //     return list;
  //   } else {
  //     return tempList;
  //   }
  // }
}

export default ViewContent;
