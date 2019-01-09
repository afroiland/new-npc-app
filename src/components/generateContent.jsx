import React, { Component } from "react";
import Column from "./column";
import { Button, Col, FormControl, Grid, Row } from "react-bootstrap";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate";

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = ["Fighter", "Magic-User", "Cleric", "Thief", "Monk", "Assassin"]

class GenerateContent extends Component {
  state = {
    npc: {},
    level: 1,
    pcClass: 'Fighter',
    hasEx_str: false,
    hasSpells: false
  };

  handleGenerate = (level, pcClass) => {
    let newNPC = generate(level, pcClass);
    console.log("newNPC: ", newNPC);
    if(newNPC.ex_str) {this.setState({ hasEx_str: true });}
    if(newNPC.spells) {this.setState({ hasSpells: true });}
    this.setState({ npc: newNPC });
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
              <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({ level: e.target.value })}>
                {levelRange.map(level => <option key={level} value={level}>{level}</option>)}
              </FormControl>
            </Col>
          </Row>
          <Button onClick={() => this.handleGenerate(this.state.level, this.state.pcClass)}>Generate</Button>
          <Button>Save</Button>
          <Row>
            <Col md={12}>
              <Column name="New NPC" />
              <NPCDetails npc={this.state.npc} hasEx_str={this.state.hasEx_str} hasSpells={this.state.hasSpells}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GenerateContent;
