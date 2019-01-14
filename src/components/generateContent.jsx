import React, { Component } from "react";
import { Button, Col, FormControl, Grid, Row } from "react-bootstrap";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate";

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin"]

class GenerateContent extends Component {
  state = {
    npc: {},
    level: 1,
    pcClass: 'Fighter'
  };

  handleGenerate = (level, pcClass) => {
    let newNPC = generate(level, pcClass);
    console.log("newNPC: ", newNPC);
    this.setState({ npc: newNPC });
  }

  handleSave = (state) => {
    console.log("handleSave state: ", state);
  }

  handleChange = (e) => {
    console.log("e.target.name: ", e.target.name);
    console.log("e.target.value: ", e.target.value);
    let name = e.target.name;
    let newStateNPC = {...this.state.npc};
    newStateNPC.name = e.target.value;
    this.setState({ npc: newStateNPC });
  }

  render() {
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
              <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ level: parseInt(e.target.value) })}>
                {levelRange.map(level => <option key={level} value={level}>{level}</option>)}
              </FormControl>
            </Col>
          </Row>
          <Button onClick={() => this.handleGenerate(this.state.level, this.state.pcClass)}>Generate</Button>
          <Button onClick={() => this.handleSave(this.state)}>Save</Button>
          <Row>
            <Col md={12}>
              <NPCDetails npc={this.state.npc} changeFunc={this.handleChange} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GenerateContent;
