import React, { Component } from 'react';
import SearchBar from "./searchbar";
import NPCList from "./NPCList";
import Column from "./column";
import { Col, FormControl, FormGroup, Grid, Row } from "react-bootstrap";
import axios from "axios";

class Combat extends Component {
  state = {
    NPCList: [],
    groupA: [],
    groupB: []
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Grid>
          <Row>
            <Col sm={2}>
              <FormGroup>
                <FormControl type="text" placeholder="Search" onChange={e => this.handleSearchChange(e.target.value)} />
              </FormGroup>
              <NPCList list={this.state.NPCList} handleNameClick={this.handleNameClick} />
            </Col>
            <Col sm={3}>
              <Column name="Group A" />
            </Col>
            <Col sm={3}>
              <Column name="Group B" />
            </Col>
            <Col sm={3}>
              <Column name="Combat Log" />
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
      //console.log("this.state: ", this.state);
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
}

export default Combat;