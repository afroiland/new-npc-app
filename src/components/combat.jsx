import React, { Component } from 'react';
import SearchBar from "./searchbar";
import NPCList from "./NPCList";
import { Col, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
import axios from "axios";

class Combat extends Component {
  state = {
    NPCList: [],
    groupA: [],
    groupB: [],
    selectedNPC: ""
  }

  render() {
    //console.log("this.state.groupA: ", this.state.groupA);
    return (
      <div>
        <SearchBar selectedNPC={this.state.selectedNPC} handleClick={this.handleButtonClick} />
        <Grid>
          <Row>
            <Col sm={2}>
              <FormGroup>
                <FormControl type="text" placeholder="Search" onChange={e => this.handleSearchChange(e.target.value)} />
              </FormGroup>
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} selectedNPC={this.state.selectedNPC} />
            </Col>
            <Col sm={3}>
              <p>Group A</p>
              <NPCList list={this.state.groupA} />
            </Col>
            <Col sm={3}>
              <p>Group B</p>
              <NPCList list={this.state.groupB} />
            </Col>
            <Col sm={3}>
              <p>Log / Results</p>
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
    });
  }

  handleSearchChange = (searchString) => {
    let tempNPCList = this.state.NPCList;
    for (let i = 0; i < tempNPCList.length; i++) {
      let allWordList = "";
      allWordList += tempNPCList[i].name;
      allWordList += tempNPCList[i].title;
      allWordList += tempNPCList[i].class;
      allWordList += tempNPCList[i].race;
      allWordList += tempNPCList[i].memorized;
      allWordList += tempNPCList[i].SBLvl_1;
      allWordList += tempNPCList[i].SBLvl_2;
      allWordList += tempNPCList[i].SBLvl_3;
      allWordList += tempNPCList[i].SBLvl_4;
      allWordList += tempNPCList[i].SBLvl_5;
      allWordList += tempNPCList[i].items;
      allWordList += tempNPCList[i].affiliation;
      allWordList += tempNPCList[i].notes;
      if (allWordList.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
        tempNPCList[i].hideInList = false;
      } else {
        tempNPCList[i].hideInList = true;
      }
    }
    this.setState({ NPCList: tempNPCList });
  }

  handleNameClick = (name) => {
    console.log(name, "clicked");
    this.setState({ selectedNPC: name });
  }

  handleButtonClick = (groupId) => {
    let group = "group" + groupId;
    let selectedNPCObject = this.state.NPCList.filter(obj => {
      return obj.name === this.state.selectedNPC
    });
    let newGroup = groupId === "A" ? this.state.groupA : this.state.groupB;
    newGroup.push(selectedNPCObject[0]);
    this.setState({ [group]: newGroup });
  }
}

export default Combat;