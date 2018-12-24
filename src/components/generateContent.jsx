import React, { Component } from "react";
import Column from "./column";
import { Button, Col, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate";

const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class GenerateContent extends Component {
  state = {
    npc: {},
    level: 1,
    pcClass: 'fighter'
  };

  handleGenerate = (level, pcClass) => {
    let newNPC = generate(level, pcClass);
    console.log("newNPC: ", newNPC);
    this.setState({npc: newNPC});
  }

  render() {
    return (
      <div>
        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({pcClass: e.target.value})}>
            <option value="fighter">fighter</option>
            <option value="thief">thief</option>
          </FormControl>
          <FormControl componentClass="select" placeholder="select" onChange={e => this.setState({level: e.target.value})}>
            {levelRange.map(level => <option key={level} value={level}>{level}</option>)}
          </FormControl>
        </FormGroup>
        <Button onClick={() => this.handleGenerate(this.state.level, this.state.pcClass)}>Generate</Button>
        <Button>Save</Button>
        <Grid>
          <Row>
            <Col md={12}>
              <Column name="New NPC" />
              <NPCDetails npc={this.state.npc} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GenerateContent;
