import React, { Component } from "react";
import Column from "./column";
import NPCDetails from "./NPCDetails";
import { Col, Grid, Row } from "react-bootstrap";

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

class ViewContent extends Component {
  state = {
    NPCList: {},
    selectedNPC: npc1
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={6}>
              <Column name="NPCs" />
            </Col>
            <Col sm={6}>
              <NPCDetails npc={this.state.selectedNPC} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ViewContent;
