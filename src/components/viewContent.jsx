import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate"
import { Col, Grid, Row } from "react-bootstrap";
import axios from "axios";

var npc1 = {
  id: 1,
  name: "Test Name",
  title: "",
  level: 0,
  class: "",
  currentHP: 0,
  maxHP: 0,
  ac: 0,
  str: 0,
  ex_str: 0,
  int: 0,
  dex: 0,
  con: 0,
  wis: 0,
  cha: 0,
  spells: {},
  items: "",
  ranking: 0,
  affiliation: "",
  notes: ""
};

class ViewContent extends Component {
  state = {
    NPCList: [],
    selectedNPC: npc1,
    name: "",
    title: "",
    level: 0,
    class: "",
    race: "",
    currentHP: 0,
    maxHP: 0,
    ac: 0,
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
    items: "",
    probity: 0,
    affiliation: "",
    notes: "",
    levelSelect: 1,
    pcClass: 'Fighter'
  };

  render() {
    console.log("this.state: ", this.state);
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={2}>
              <NPCList list={this.state.NPCList} handleClick={this.handleClick} />
            </Col>
            <Col sm={6}>
              <NPCDetails npc={this.state.selectedNPC} handleChange={this.handleChange}
                handleGenerate={this.handleGenerate} handleSave={this.handleSave} handleClear={this.handleClear}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3001/test').then(res => {
      //console.log("res.data: ", res.data);
      this.setState({ NPCList: res.data });
      //console.log("this.state: ", this.state);
    });
  }

  handleClick = (name) => {
    console.log("name: ", name);
    let selectedNPC = this.state.NPCList.filter(obj => {
      return obj.name === name
    });
    console.log("selectedNPC: ", selectedNPC);
    this.setState({ selectedNPC: selectedNPC });
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
      items: newNPC.items,
      probity: newNPC.probity,
      affiliation: newNPC.affiliation,
      notes: newNPC.notes
    });
  }

  handleSave = (state) => {
    console.log("handleSave state: ", state);
    axios.post("http://localhost:3001/add", state)
    .then(res => {
      console.log("add res: ", res);
    });
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
      items: "",
      probity: 0,
      affiliation: "",
      notes: ""
    });
  }
}

export default ViewContent;
