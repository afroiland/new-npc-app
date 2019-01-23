import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate"
import { Button, Col, FormControl, Grid, Row } from "react-bootstrap";
import axios from "axios";

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin"]

class ViewContent extends Component {
  state = {
    levelSelect: 1,
    classSelect: "Fighter",
    NPCList: [{ name: "Test Name" }],
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
    spellbookLvl_1: "",
    spellbookLvl_2: "",
    spellbookLvl_3: "",
    spellbookLvl_4: "",
    spellbookLvl_5: "",
    memorized: "",
    gold: 0,
    items: "",
    probity: 0,
    affiliation: "",
    notes: ""
  };

  render() {
    //console.log("this.state: ", this.state);
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={2}>
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} />
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
                handleGenerate={this.handleGenerate} handleSave={this.handleSave} handleClear={this.handleClear}
                name={this.state.name}
                title={this.state.title}
                level={this.state.level}
                class={this.state.class}
                race={this.state.race}
                currentHP={this.state.currentHP}
                maxHP={this.state.maxHP}
                ac={this.state.ac}
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
    axios.get('http://localhost:3001/test').then(res => {
      //console.log("res.data: ", res.data);
      this.setState({ NPCList: res.data });
      //console.log("this.state: ", this.state);
    });
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
      str: selectedNPC[0].str,
      ex_str: selectedNPC[0].ex_str,
      int: selectedNPC[0].intel,
      dex: selectedNPC[0].dex,
      con: selectedNPC[0].con,
      wis: selectedNPC[0].wis,
      cha: selectedNPC[0].cha,
      spellbookLvl_1: selectedNPC[0].spellbookLvl_1,
      spellbookLvl_2: selectedNPC[0].spellbookLvl_2,
      spellbookLvl_3: selectedNPC[0].spellbookLvl_3,
      spellbookLvl_4: selectedNPC[0].spellbookLvl_4,
      spellbookLvl_5: selectedNPC[0].spellbookLvl_5,
      memorized: selectedNPC[0].memorized,
      gold: selectedNPC[0].gold,
      items: selectedNPC[0].items,
      probity: selectedNPC[0].probity,
      affiliation: selectedNPC[0].affiliation,
      notes: selectedNPC[0].notes
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
