import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
// import { generate } from "./../functions/generate";
// import axios from "axios";

class NPCDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     title: "",
  //     level: 0,
  //     class: "",
  //     race: "",
  //     currentHP: 0,
  //     maxHP: 0,
  //     ac: 0,
  //     str: 0,
  //     ex_str: 0,
  //     int: 0,
  //     dex: 0,
  //     con: 0,
  //     wis: 0,
  //     cha: 0,
  //     spellbookLvl_1: [""],
  //     spellbookLvl_2: [""],
  //     spellbookLvl_3: [""],
  //     spellbookLvl_4: [""],
  //     spellbookLvl_5: [""],
  //     memorized: [""],
  //     gold: 0,
  //     items: "",
  //     probity: 0,
  //     affiliation: "",
  //     notes: "",
  //     levelSelect: 1,
  //     pcClass: 'Fighter'
  //   }
  // }

  render() {
    console.log("details this.props: ", this.props);
    return (
      <div>
        <Grid>
          {/* <Row>
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
          <Button onClick={() => this.handleGenerate(this.state.levelSelect, this.state.pcClass)}>Generate</Button>
          <Button onClick={() => this.handleSave(this.state)}>Save</Button>
          <Button onClick={() => this.handleClear()}>Clear</Button> */}
          <Row>
            <Col md={12}>
              <Form horizontal>
                <FormGroup>
                  <Col sm={1} style={{ marginTop: 7 }}>Name: </Col>
                  <Col sm={5}><FormControl name="name" value={this.props.name} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Level: </Col>
                  <Col sm={5}><FormControl name="level" value={this.props.level} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={1}>Class: </Col>
                  <Col sm={5}><FormControl name="class" value={this.props.class} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Title: </Col>
                  <Col sm={5}><FormControl name="title" value={this.props.title} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Str: </Col>
                  <Col sm={1}><FormControl name="str" value={this.props.str} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl style={{ display: this.props.str > 17 ? 'block' : 'none' }}
                    name="ex_str" value={this.props.ex_str} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Int: </Col>
                  <Col sm={1}><FormControl name="int" value={this.props.int} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Dex: </Col>
                  <Col sm={1}><FormControl name="dex" value={this.props.dex} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Con: </Col>
                  <Col sm={1}><FormControl name="con" value={this.props.con} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Wis: </Col>
                  <Col sm={1}><FormControl name="wis" value={this.props.wis} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Cha: </Col>
                  <Col sm={1}><FormControl name="cha" value={this.props.cha} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>HP: </Col>
                  <Col sm={1}><FormControl name="currentHP" value={this.props.currentHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl name="maxHP" value={this.props.maxHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={2}>AC: </Col>
                  <Col sm={1}><FormControl name="ac" value={this.props.ac} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={2}>Gold: </Col>
                  <Col sm={1}><FormControl name="gold" value={this.props.gold} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Items: </Col>
                  <Col sm={10}><FormControl name="items" value={this.props.items} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Notes: </Col>
                  <Col sm={10}><FormControl name="notes" value={this.props.notes} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Probity Score: </Col>
                  <Col sm={1}><FormControl name="probity" value={this.props.probity} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Affiliation: </Col>
                  <Col sm={4}><FormControl name="affiliation" value={this.props.affiliation} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <div style={{ display: this.props.memorized ? 'block' : 'none' }}>
                  <p>Memorized Spells</p>
                  <FormGroup>
                    <Col sm={12}><FormControl style={{ marginBottom: 20 }} name="memorized"
                      value={this.props.memorized ? this.listMemdSpells() : ""} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
                <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
                  <p>Spellbook</p>
                  <FormGroup style={{ display: this.props.spellbookLvl_1 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 1: </Col>
                    <Col sm={10}><FormControl value={this.listify(this.props.spellbookLvl_1)} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_2 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 2: </Col>
                    <Col sm={10}><FormControl value={this.listify(this.props.spellbookLvl_2)} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_3 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 3: </Col>
                    <Col sm={10}><FormControl value={this.listify(this.props.spellbookLvl_3)} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_4 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 4: </Col>
                    <Col sm={10}><FormControl value={this.listify(this.props.spellbookLvl_4)} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_5 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 5: </Col>
                    <Col sm={10}><FormControl value={this.listify(this.props.spellbookLvl_5)} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  // handleGenerate = (level, pcClass) => {
  //   let newNPC = generate(level, pcClass);
  //   console.log("newNPC: ", newNPC);
  //   this.setState({
  //     name: newNPC.name,
  //     level: newNPC.level,
  //     title: newNPC.title,
  //     class: newNPC.class,
  //     race: newNPC.race,
  //     currentHP: newNPC.currentHP,
  //     maxHP: newNPC.maxHP,
  //     ac: newNPC.ac,
  //     str: newNPC.str,
  //     ex_str: newNPC.ex_str,
  //     int: newNPC.int,
  //     dex: newNPC.dex,
  //     con: newNPC.con,
  //     wis: newNPC.wis,
  //     cha: newNPC.cha,
  //     spellbookLvl_1: newNPC.spellbookLvl_1,
  //     spellbookLvl_2: newNPC.spellbookLvl_2,
  //     spellbookLvl_3: newNPC.spellbookLvl_3,
  //     spellbookLvl_4: newNPC.spellbookLvl_4,
  //     spellbookLvl_5: newNPC.spellbookLvl_5,
  //     memorized: newNPC.memorized,
  //     gold: newNPC.gold,
  //     items: newNPC.items,
  //     probity: newNPC.probity,
  //     affiliation: newNPC.affiliation,
  //     notes: newNPC.notes
  //   });
  // }

  // handleSave = (state) => {
  //   console.log("handleSave state: ", state);
  //   axios.post("http://localhost:3001/add", state)
  //   .then(res => {
  //     console.log("add res: ", res);
  //   });
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // handleClear = () => {
  //   this.setState({
  //     name: "",
  //     title: "",
  //     level: 0,
  //     class: "",
  //     race: "",
  //     currentHP: 0,
  //     maxHP: 0,
  //     ac: 0,
  //     str: 0,
  //     ex_str: 0,
  //     int: 0,
  //     dex: 0,
  //     con: 0,
  //     wis: 0,
  //     cha: 0,
  //     spellbookLvl_1: [""],
  //     spellbookLvl_2: [""],
  //     spellbookLvl_3: [""],
  //     spellbookLvl_4: [""],
  //     spellbookLvl_5: [""],
  //     memorized: [""],
  //     gold: 0,
  //     items: "",
  //     probity: 0,
  //     affiliation: "",
  //     notes: ""
  //   });
  // }

  spellbookExists() {
    let temp = this.props
    if (!temp.spellbookLvl_1 && !temp.spellbookLvl_2 && !temp.spellbookLvl_3 && !temp.spellbookLvl_4 && !temp.spellbookLvl_5) {
      return false;
    }
    return true;
  }

  listify(spellLevel) {
    if (!spellLevel) {
      return "";
    }
    let list = "";
    for (let i = 0; i < spellLevel.length; i++) {
      list += spellLevel[i] + ", ";
    }
    return list.slice(0, (list.length - 2));
  }

  listMemdSpells() {
    let temp = this.props.memorized;
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
