import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup, Button, Grid, Row } from "react-bootstrap";
import { generate } from "./../functions/generate";

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin"]

class NPCDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      npc: {
        name: ""
      },
      levelSelect: 1,
      pcClass: 'Fighter'
    }
  }
  // state = {
  //   npc: {},
  //   level: 1,
  //   pcClass: 'Fighter'
  // };

  handleGenerate = (level, pcClass) => {
    let newNPC = generate(level, pcClass);
    console.log("newNPC: ", newNPC);
    this.setState({ npc: newNPC });
  }

  handleSave = (state) => {
    console.log("handleSave state: ", state);
  }

  handleChange = (e) => {
    let newStateNPC = { ...this.state.npc };
    newStateNPC[e.target.name] = e.target.value;
    this.setState({ npc: newStateNPC });
  }

  handleClear = () => {
    this.setState({ npc: {} });
  }

  render() {
    //console.log("this.state: ", this.state);
    //console.log("this.state.npc: ", this.state.npc);
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6}>
              <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ pcClass: e.target.value })}>
                {classes.map(pcClass => <option key={pcClass} value={pcClass}>{pcClass}</option>)}
              </FormControl>
            </Col>
            <Col md={6}>
              <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ levelSelect: parseInt(e.target.value) })}>
                {levelRange.map(level => <option key={level} value={level}>{level}</option>)}
              </FormControl>
            </Col>
          </Row>
          <Button onClick={() => this.handleGenerate(this.state.level, this.state.pcClass)}>Generate</Button>
          <Button onClick={() => this.handleSave(this.state)}>Save</Button>
          <Button onClick={() => this.handleClear()}>Clear</Button>
          <Row>
            <Col md={12}>
              <Form horizontal>
                <FormGroup>
                  <Col sm={1} style={{ marginTop: 7 }}>Name: </Col>
                  <Col sm={5}><FormControl name="name" value={this.state.npc.name} onChange={this.handleChange} /></Col>
                  <Col sm={1}>Level: </Col>
                  <Col sm={5}><FormControl name="level" defaultValue={this.state.npc.level} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={1}>Class: </Col>
                  <Col sm={5}><FormControl name="class" defaultValue={this.state.npc.class} onChange={this.handleChange} /></Col>
                  <Col sm={1}>Title: </Col>
                  <Col sm={5}><FormControl name="title" defaultValue={this.state.npc.title} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Str: </Col>
                  <Col sm={1}><FormControl name="str" defaultValue={this.state.npc.str} onChange={this.handleChange} /></Col>
                  <Col sm={1}><FormControl style={{ display: this.state.npc.ex_str ? 'block' : 'none' }}
                    name="ex_str" defaultValue={this.state.npc.ex_str} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Int: </Col>
                  <Col sm={1}><FormControl name="int" defaultValue={this.state.npc.int} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Dex: </Col>
                  <Col sm={1}><FormControl name="dex" defaultValue={this.state.npc.dex} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Con: </Col>
                  <Col sm={1}><FormControl name="con" defaultValue={this.state.npc.con} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Wis: </Col>
                  <Col sm={1}><FormControl name="wis" defaultValue={this.state.npc.wis} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Cha: </Col>
                  <Col sm={1}><FormControl name="cha" defaultValue={this.state.npc.cha} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>HP: </Col>
                  <Col sm={1}><FormControl name="currentHP" defaultValue={this.state.npc.currentHP} onChange={this.handleChange} /></Col>
                  <Col sm={1}><FormControl name="maxHP" defaultValue={this.state.npc.maxHP} onChange={this.handleChange} /></Col>
                  <Col sm={2}>AC: </Col>
                  <Col sm={1}><FormControl name="ac" defaultValue={this.state.npc.ac} onChange={this.handleChange} /></Col>
                  <Col sm={2}>Gold: </Col>
                  <Col sm={1}><FormControl name="gold" defaultValue={this.state.npc.gold} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Items: </Col>
                  <Col sm={10}><FormControl name="items" defaultValue={this.state.npc.items} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Notes: </Col>
                  <Col sm={10}><FormControl name="notes" defaultValue={this.state.npc.notes} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Probity Score: </Col>
                  <Col sm={1}><FormControl name="probity" defaultValue={this.state.npc.probity} onChange={this.handleChange} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Affiliation: </Col>
                  <Col sm={4}><FormControl name="affiliation" defaultValue={this.state.npc.affiliation} onChange={this.handleChange} /></Col>
                </FormGroup>
                <div style={{ display: this.state.npc.memorized ? 'block' : 'none' }}>
                  <p>Memorized Spells</p>
                  <FormGroup>
                    <Col sm={12}><FormControl style={{ marginBottom: 20 }} name="memorized"
                      defaultValue={this.state.npc.memorized ? this.listMemdSpells() : ""} onChange={this.handleChange} /></Col>
                  </FormGroup>
                </div>
                <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
                  <p>Spellbook</p>
                  <FormGroup style={{ display: this.state.npc.spellbookLvl_1 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 1: </Col>
                    <Col sm={10}><FormControl defaultValue={this.listify(this.state.npc.spellbookLvl_1)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.state.npc.spellbookLvl_2 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 2: </Col>
                    <Col sm={10}><FormControl defaultValue={this.listify(this.state.npc.spellbookLvl_2)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.state.npc.spellbookLvl_3 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 3: </Col>
                    <Col sm={10}><FormControl defaultValue={this.listify(this.state.npc.spellbookLvl_3)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.state.npc.spellbookLvl_4 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 4: </Col>
                    <Col sm={10}><FormControl defaultValue={this.listify(this.state.npc.spellbookLvl_4)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.state.npc.spellbookLvl_5 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 5: </Col>
                    <Col sm={10}><FormControl defaultValue={this.listify(this.state.npc.spellbookLvl_5)} /></Col>
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  spellbookExists() {
    let temp = this.state.npc
    if (!temp) {
      return false;
    }
    if (!temp.spellbookLvl_1 && !temp.spellbookLvl_2 && !temp.spellbookLvl_3 && !temp.spellbookLvl_4 && !temp.spellbookLvl_5) {
      return false;
    }
    return true;
  }

  listify(spellLevel) {
    if (!spellLevel) {
      return;
    }
    let list = "";
    for (let i = 0; i < spellLevel.length; i++) {
      list += spellLevel[i] + ", ";
    }
    return list.slice(0, (list.length - 2));
  }

  listMemdSpells() {
    let temp = this.state.npc.memorized;
    if (!temp) {
      return;
    }
    let list = "";
    list = listify(temp);
    return list;

    function listify() {
      for (let i = 0; i < temp.length; i++) {
        list += temp[i] + ", ";
      }
      return list.slice(0, (list.length - 2));
    }
  }
}

export default NPCDetails;
