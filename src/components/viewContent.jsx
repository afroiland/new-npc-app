import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate"
import { calcConBonus } from "../functions/hp";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { Paper, InputLabel } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
    currentHP: "",
    Lv1_HP: 0,
    Lv2_HP: 0,
    Lv3_HP: 0,
    Lv4_HP: 0,
    Lv5_HP: 0,
    Lv6_HP: 0,
    Lv7_HP: 0,
    Lv8_HP: 0,
    Lv9_HP: 0,
    Lv10_HP: 0,
    Lv11_HP: 0,
    Lv12_HP: 0,
    Lv13_HP: 0,
    Lv14_HP: 0,
    Lv15_HP: 0,
    Lv16_HP: 0,
    Lv17_HP: 0,
    Lv18_HP: 0,
    Lv19_HP: 0,
    Lv20_HP: 0,
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
    const { levelSelect, classSelect, name, title, level, npcClass, race, currentHP, status, ac, thac0, str, ex_str,
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
                currentHP={currentHP}
                maxHP={this.calcMaxHP() !== 0 ? this.calcMaxHP() : ""}
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
                spellbookLvl_6={spellbookLvl_6}
                spellbookLvl_7={spellbookLvl_7}
                spellbookLvl_8={spellbookLvl_8}
                spellbookLvl_9={spellbookLvl_9}
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
    //determine schema from which to get NPCs
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
      Lv1_HP: selectedNPC[0].Lv1_HP,
      Lv2_HP: selectedNPC[0].Lv2_HP,
      Lv3_HP: selectedNPC[0].Lv3_HP,
      Lv4_HP: selectedNPC[0].Lv4_HP,
      Lv5_HP: selectedNPC[0].Lv5_HP,
      Lv6_HP: selectedNPC[0].Lv6_HP,
      Lv7_HP: selectedNPC[0].Lv7_HP,
      Lv8_HP: selectedNPC[0].Lv8_HP,
      Lv9_HP: selectedNPC[0].Lv9_HP,
      Lv10_HP: selectedNPC[0].Lv10_HP,
      Lv11_HP: selectedNPC[0].Lv11_HP,
      Lv12_HP: selectedNPC[0].Lv12_HP,
      Lv13_HP: selectedNPC[0].Lv13_HP,
      Lv14_HP: selectedNPC[0].Lv14_HP,
      Lv15_HP: selectedNPC[0].Lv15_HP,
      Lv16_HP: selectedNPC[0].Lv16_HP,
      Lv17_HP: selectedNPC[0].Lv17_HP,
      Lv18_HP: selectedNPC[0].Lv18_HP,
      Lv19_HP: selectedNPC[0].Lv19_HP,
      Lv20_HP: selectedNPC[0].Lv20_HP,
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
      currentHP: newNPC.currentHP,
      Lv1_HP: newNPC.Lv1_HP,
      Lv2_HP: newNPC.Lv2_HP,
      Lv3_HP: newNPC.Lv3_HP,
      Lv4_HP: newNPC.Lv4_HP,
      Lv5_HP: newNPC.Lv5_HP,
      Lv6_HP: newNPC.Lv6_HP,
      Lv7_HP: newNPC.Lv7_HP,
      Lv8_HP: newNPC.Lv8_HP,
      Lv9_HP: newNPC.Lv9_HP,
      Lv10_HP: newNPC.Lv10_HP,
      Lv11_HP: newNPC.Lv11_HP,
      Lv12_HP: newNPC.Lv12_HP,
      Lv13_HP: newNPC.Lv13_HP,
      Lv14_HP: newNPC.Lv14_HP,
      Lv15_HP: newNPC.Lv15_HP,
      Lv16_HP: newNPC.Lv16_HP,
      Lv17_HP: newNPC.Lv17_HP,
      Lv18_HP: newNPC.Lv18_HP,
      Lv19_HP: newNPC.Lv19_HP,
      Lv20_HP: newNPC.Lv20_HP,
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
      // TODO: When NPCList gets updated upon NPC generation, try something like the following code to make that new NPC selected
      // this.setState({selectedNPC: state.name})
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
      Lv1_HP: 0,
      Lv2_HP: 0,
      Lv3_HP: 0,
      Lv4_HP: 0,
      Lv5_HP: 0,
      Lv6_HP: 0,
      Lv7_HP: 0,
      Lv8_HP: 0,
      Lv9_HP: 0,
      Lv10_HP: 0,
      Lv11_HP: 0,
      Lv12_HP: 0,
      Lv13_HP: 0,
      Lv14_HP: 0,
      Lv15_HP: 0,
      Lv16_HP: 0,
      Lv17_HP: 0,
      Lv18_HP: 0,
      Lv19_HP: 0,
      Lv20_HP: 0,
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

  calcMaxHP() {
    let result = this.state.Lv1_HP + this.state.Lv2_HP + this.state.Lv3_HP + this.state.Lv4_HP + this.state.Lv5_HP +
      this.state.Lv6_HP + this.state.Lv7_HP + this.state.Lv8_HP + this.state.Lv9_HP + this.state.Lv10_HP +
      this.state.Lv11_HP + this.state.Lv12_HP + this.state.Lv13_HP + this.state.Lv14_HP + this.state.Lv15_HP +
      this.state.Lv16_HP + this.state.Lv17_HP + this.state.Lv18_HP + this.state.Lv19_HP + this.state.Lv20_HP +
      calcConBonus(this.state.level, this.state.npcClass, this.state.con);

    if (result !== 0) {
      return result;
    }
    return "";
  }
}

// TODO: remove thac0 calculation and put logic here

export default ViewContent;
