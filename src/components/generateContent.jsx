import React, { Component } from "react";
import Column from "./column";
import { Button, Col, Form, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
import NPCDetails from "./NPCDetails";
import { generate } from "./../functions/generate";

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
  items: {},
  ranking: 0,
  affiliation: "",
  notes: {}
};

class GenerateContent extends Component {
  state = {
    npc: npc1
  };

  handleGenerate = () => {
    let info = 3;
    let info2 = "fighter";
    let newNPC = generate(info, info2);
    console.log("newNPC: ", newNPC);
    this.setState({npc: newNPC});
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="select">
              <option value="fighter">fighter</option>
              <option value="thief">thief</option>
            </FormControl>
            <FormControl componentClass="select" placeholder="select">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </FormControl>
          </FormGroup>
          <Button onClick={this.handleGenerate}>Generate</Button>
        </Form>
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
