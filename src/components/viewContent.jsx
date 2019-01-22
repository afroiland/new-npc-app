import React, { Component } from "react";
import NPCList from "./NPCList";
import NPCDetails from "./NPCDetails";
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
    selectedNPC: npc1
  };

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

  render() {
    console.log("this.state: ", this.state);
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={4}>
              <NPCList list={this.state.NPCList} handleClick={this.handleClick} />
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
