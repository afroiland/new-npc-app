import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate"
import { Button, Col, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
import axios from "axios";

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
    level: 0,
    class: "",
    race: "",
    currentHP: 0,
    maxHP: 0,
    ac: 0,
    thac0: 0,
    str: 0,
    ex_str: 0,
    int: 0,
    dex: 0,
    con: 0,
    wis: 0,
    cha: 0,
    spellbookLvl_1: "",
    spellbookLvl_2: "",
    spellbookLvl_3: "",
    spellbookLvl_4: "",
    spellbookLvl_5: "",
    memorized: "",
    gold: 0,
    weapon: "",
    items: "",
    probity: 0,
    affiliation: "",
    notes: "",
    selectedNPC: ""
  };

  render() {
    //console.log("this.state: ", this.state);
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={2}>
              <FormGroup>
                <FormControl type="text" placeholder="Search" onChange={e => this.handleSearchChange(e.target.value)} />
              </FormGroup>
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} selectedNPC={this.state.selectedNPC} />
            </Col>
            <Col sm={10}>
              <Row>
                <Col md={6}>
                  <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ classSelect: e.target.value })}>
                    {classes.map(pcClass => <option key={pcClass} value={pcClass}>{pcClass}</option>)}
                  </FormControl>
                </Col>
                <Col md={6}>
                  <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ levelSelect: parseInt(e.target.value) })}>
                    {levelRange.map(level => <option key={level} value={level}>{level}</option>)}
                  </FormControl>
                </Col>
              </Row>
              <Button onClick={() => this.handleGenerate(this.state.levelSelect, this.state.classSelect)}>Generate</Button>
              <Button onClick={() => this.handleSave(this.state)}>Save</Button>
              <Button onClick={() => this.handleClear()}>Clear</Button>

              <NPCDetails handleChange={this.handleChange}
                name={this.state.name}
                title={this.state.title}
                level={this.state.level}
                class={this.state.class}
                race={this.state.race}
                currentHP={this.state.currentHP}
                maxHP={this.state.maxHP}
                ac={this.state.ac}
                thac0={this.state.thac0}
                gold={this.state.gold}
                str={this.state.str}
                ex_str={this.state.ex_str}
                int={this.state.int}
                dex={this.state.dex}
                con={this.state.con}
                wis={this.state.wis}
                cha={this.state.cha}
                spellbookLvl_1={this.state.spellbookLvl_1}
                spellbookLvl_2={this.state.spellbookLvl_2}
                spellbookLvl_3={this.state.spellbookLvl_3}
                spellbookLvl_4={this.state.spellbookLvl_4}
                spellbookLvl_5={this.state.spellbookLvl_5}
                memorized={this.state.memorized}
                weapon={this.state.weapon}
                items={this.state.items}
                probity={this.state.probity}
                affiliation={this.state.affiliation}
                notes={this.state.notes}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  componentDidMount() {
    this._isMounted = true;
    this.getNPCs();
  }

  componentDidUpdate() {
    //this.getNPCs();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getNPCs() {
    axios.get('http://localhost:3001/getNPCs').then(res => {
      if (this._isMounted) {
        this.setState({ NPCList: res.data });
      }
    });
  }

  handleSearchChange = (searchString) => {
    console.log("searchString: ", searchString);
    //debugger;
    let tempNPCList = this.state.NPCList;
    for (let i = 0; i < tempNPCList.length; i++) {
      let allWordList = "";
      allWordList += tempNPCList[i].name;
      allWordList += tempNPCList[i].title;
      allWordList += tempNPCList[i].class;
      allWordList += tempNPCList[i].race;
      allWordList += tempNPCList[i].memorized;
      allWordList += tempNPCList[i].SBLvl_1;
      allWordList += tempNPCList[i].SBLvl_2;
      allWordList += tempNPCList[i].SBLvl_3;
      allWordList += tempNPCList[i].SBLvl_4;
      allWordList += tempNPCList[i].SBLvl_5;
      allWordList += tempNPCList[i].weapon;
      allWordList += tempNPCList[i].items;
      allWordList += tempNPCList[i].affiliation;
      allWordList += tempNPCList[i].notes;
      if (allWordList.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
        tempNPCList[i].hideInList = false;
      } else {
        tempNPCList[i].hideInList = true;
      }
    }
    this.setState({ NPCList: tempNPCList });
  }

  handleNameClick = (name) => {
    let selectedNPC = this.state.NPCList.filter(obj => {
      return obj.name === name
    });
    this.setState({
      name: selectedNPC[0].name,
      level: selectedNPC[0].level,
      title: selectedNPC[0].title,
      class: selectedNPC[0].class,
      race: selectedNPC[0].race,
      currentHP: selectedNPC[0].currentHP,
      maxHP: selectedNPC[0].maxHP,
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
    console.log("newNPC: ", newNPC);
    this.setState({
      name: newNPC.name,
      level: newNPC.level,
      title: newNPC.title,
      class: newNPC.class,
      race: newNPC.race,
      currentHP: newNPC.currentHP,
      maxHP: newNPC.maxHP,
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
    console.log("handleSave state: ", state);
    let nameExists = false;
    for (let i = 0; i < state.NPCList.length; i++) {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClear = () => {
    this.setState({
      name: "",
      title: "",
      level: 0,
      class: "",
      race: "",
      currentHP: 0,
      maxHP: 0,
      ac: 0,
      thac0: 0,
      str: 0,
      ex_str: 0,
      int: 0,
      dex: 0,
      con: 0,
      wis: 0,
      cha: 0,
      spellbookLvl_1: [""],
      spellbookLvl_2: [""],
      spellbookLvl_3: [""],
      spellbookLvl_4: [""],
      spellbookLvl_5: [""],
      memorized: [""],
      gold: 0,
      weapon: "",
      items: "",
      probity: 0,
      affiliation: "",
      notes: ""
    });
  }
}

export default ViewContent;
