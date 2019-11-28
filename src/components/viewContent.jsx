import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "../functions/generate"
import { calcConBonus } from "../functions/conBonus";
import { calcAC } from "../functions/ac";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { Paper, InputLabel } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { calcThac0 } from "../functions/thac0";
import { determineAbilities } from '../functions/abilities';

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const classes = ["Civilian", "Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin", "Druid", "Paladin", "Ranger", "Monster"];
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
    ac_adj: 0,
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
    att_adj: 0,
    weapon: "",
    items: "",
    probity: "",
    affiliation: "",
    notes: "",
    selectedNPC: "",
    searchString: "",

    secondaryCharacter: {
      name: "",
      title: "",
      level: "",
      npcClass: "",
      race: "",
      age: "",
      gender: "",
      currentHP: "",
      hp_by_lvl: [],
      ac_adj: 0,
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
      att_adj: 0,
      weapon: "",
      items: "",
      probity: "",
      affiliation: "",
      notes: "",
    }
  };

  render() {
    const { levelSelect, classSelect, name, title, level, npcClass, race, age, gender, currentHP, ac_adj, status, str, ex_str,
      int, dex, con, wis, cha, spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5,
      spellbookLvl_6, spellbookLvl_7, spellbookLvl_8, spellbookLvl_9, memorized, gold, armor, att_adj, weapon, items, probity,
      affiliation, notes, selectedNPC, searchString, secondaryCharacter } = this.state;
    return (
      <div style={{ display: 'flex', height: 'calc(100% - 48px)' }}>

        {/* <div style={{ flex: '2', height: '100%' }}> */}
        <div className='searchDiv'>
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
            <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} selectedNPC={selectedNPC}
              searchString={searchString} />
          </Paper>
        </div>

        <div style={{ flex: '10' }}>
          <Paper style={{ margin: 5, textAlign: 'left' }}>
            <div style={{ height: 15 }}></div>
            <FormControl style={{ marginLeft: 30, marginRight: 30 }}>
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
            {/* <Button variant='contained' color='primary' style={{ marginRight: 20, marginTop: 6 }}
                onClick={() => this.handleLevelUp(this.state)}>Level Up</Button> */}
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

          <div style={{ height: 'calc(100% - 90px)', width: '100%', display: 'flex' }}>
            <div style={{ height: '100%', flex: '1' }}>
              <Paper style={{ marginLeft: 5, marginRight: 5, height: '100%' }}>
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
                  ac_adj={ac_adj}
                  status={status}
                  ac={npcClass !== "" ? calcAC(npcClass, level, armor, parseInt(dex), parseInt(ac_adj)) : ""}
                  thac0={calcThac0(level, npcClass, str, ex_str, parseInt(att_adj)) !== undefined ?
                    calcThac0(level, npcClass, str, ex_str, parseInt(att_adj)) : ""}
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
                  abilities={determineAbilities(npcClass, level, race, dex)}
                  memorized={memorized}
                  armor={armor}
                  att_adj={att_adj}
                  weapon={weapon}
                  items={items}
                  probity={probity}
                  affiliation={affiliation}
                  notes={notes}
                  isPrimary={true}
                />
              </Paper>
            </div>

            <div className='secondaryCharacter' style={{ flex: '1' }}>
              <Paper style={{ marginRight: 5, height: '100%' }}>
                <NPCDetails handleChange={this.handleChange}
                  name={secondaryCharacter.name}
                  title={secondaryCharacter.title}
                  level={secondaryCharacter.level}
                  npcClass={secondaryCharacter.npcClass}
                  race={secondaryCharacter.race}
                  age={secondaryCharacter.age}
                  gender={secondaryCharacter.gender}
                  currentHP={secondaryCharacter.currentHP}
                  maxHP={this.calcMaxHP() !== 0 ? this.calcMaxHP() : ""}
                  ac_adj={secondaryCharacter.ac_adj}
                  status={secondaryCharacter.status}
                  ac={secondaryCharacter.npcClass !== "" ? calcAC(secondaryCharacter.npcClass, secondaryCharacter.level,
                    secondaryCharacter.armor, parseInt(secondaryCharacter.dex), parseInt(secondaryCharacter.ac_adj)) : ""}
                  thac0={calcThac0(secondaryCharacter.level, secondaryCharacter.npcClass, secondaryCharacter.str,
                    secondaryCharacter.ex_str, parseInt(secondaryCharacter.att_adj)) !== undefined ?
                    calcThac0(secondaryCharacter.level, secondaryCharacter.npcClass, secondaryCharacter.str,
                      secondaryCharacter.ex_str, parseInt(secondaryCharacter.att_adj)) : ""}
                  gold={secondaryCharacter.gold}
                  str={secondaryCharacter.str}
                  ex_str={secondaryCharacter.ex_str}
                  int={secondaryCharacter.int}
                  dex={secondaryCharacter.dex}
                  con={secondaryCharacter.con}
                  wis={secondaryCharacter.wis}
                  cha={secondaryCharacter.cha}
                  spellbookLvl_1={secondaryCharacter.spellbookLvl_1}
                  spellbookLvl_2={secondaryCharacter.spellbookLvl_2}
                  spellbookLvl_3={secondaryCharacter.spellbookLvl_3}
                  spellbookLvl_4={secondaryCharacter.spellbookLvl_4}
                  spellbookLvl_5={secondaryCharacter.spellbookLvl_5}
                  spellbookLvl_6={secondaryCharacter.spellbookLvl_6}
                  spellbookLvl_7={secondaryCharacter.spellbookLvl_7}
                  spellbookLvl_8={secondaryCharacter.spellbookLvl_8}
                  spellbookLvl_9={secondaryCharacter.spellbookLvl_9}
                  abilities={determineAbilities(secondaryCharacter.npcClass, secondaryCharacter.level, secondaryCharacter.race, secondaryCharacter.dex)}
                  memorized={secondaryCharacter.memorized}
                  armor={secondaryCharacter.armor}
                  att_adj={secondaryCharacter.att_adj}
                  weapon={secondaryCharacter.weapon}
                  items={secondaryCharacter.items}
                  probity={secondaryCharacter.probity}
                  affiliation={secondaryCharacter.affiliation}
                  notes={secondaryCharacter.notes}
                  isPrimary={false}
                />
              </Paper>
            </div>

          </div>

        </div>
      </div>
    );
  }

  componentDidMount() {
    this._isMounted = true;
    //TODO: determine schema from which to get NPCs
    axios.get('http://localhost:3001/getNPCs').then(res => {
      if (this._isMounted) {
        this.setState({ NPCList: this.sortByProbity(res.data) });
      }
    });
  }

  componentDidUpdate() {
    //console.log("updating");
    axios.get('http://localhost:3001/getNPCs').then(res => {
      let sortedResData = this.sortByProbity(res.data);
      let NPCListHasChanged = JSON.stringify(sortedResData) !== JSON.stringify(this.state.NPCList);
      if (this._isMounted && NPCListHasChanged) {
        this.setState({ NPCList: sortedResData });
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
    if (this.state.selectedNPC) {
      //Shift all info from last selected NPC to secondary NPC object
      let secondaryCharacter = {};
      Object.keys(this.state).forEach(element => {
        secondaryCharacter[element] = this.state[element];
      });
      console.log('secondaryCharacter: ', secondaryCharacter);

      this.setState({
        secondaryCharacter: secondaryCharacter
      })
    };

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
      ac_adj: selectedNPC[0].ac_adj,
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
      att_adj: selectedNPC[0].att_adj,
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
      ac_adj: 0,
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
      att_adj: 0,
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
      setTimeout(() => { this.setState({ selectedNPC: state.name }) }, 50);
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
      ac_adj: 0,
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
      att_adj: 0,
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

    return result !== 0 ? result : "";
  }

  sortByProbity(list) {
    let tempList = list.sort(compare);
    return tempList;

    function compare(b, a) {
      const probityA = a.probity;
      const probityB = b.probity;
      let comparison = 0;
      if (probityA > probityB) {
        comparison = 1;
      } else if (probityA < probityB) {
        comparison = -1;
      }
      return comparison;
    }
  }
}

export default ViewContent;
