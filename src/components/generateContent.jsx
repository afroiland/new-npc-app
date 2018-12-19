import React, { Component } from "react";
import Column from "./column";
import { Button, Col, Grid, Row } from "react-bootstrap";
import NPCDetails from "./NPCDetails";

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
  state = {};

  render() {
    return (
      <div>
        <Button>Generate</Button>
        <Button>Save</Button>
        <Grid>
          <Row>
            <Col md={12}>
              <Column name="New NPC" />
              <NPCDetails npc={npc1} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GenerateContent;
