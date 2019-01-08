import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup } from "react-bootstrap";

class NPCDetails extends Component {
  // state = {
  //   hasEx_str: false
  // }

  render() {
    //console.log("this.state: ", this.state);
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col sm={1} style={{ marginTop: 7 }}>Name: </Col>
            <Col sm={5}><FormControl defaultValue={this.props.npc.name} /></Col>
            <Col sm={1}>Level: </Col>
            <Col sm={5}><FormControl defaultValue={this.props.npc.level} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Class: </Col>
            <Col sm={10}><FormControl defaultValue={this.props.npc.class} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Title: </Col>
            <Col sm={10}><FormControl defaultValue={this.props.npc.title} /></Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2}>Str: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.str} /></Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.ex_str} /></Col>
          </FormGroup>

          {/* <FormGroup>
            <Col sm={2}>Str: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.str} /></Col>
            {this.props.npc.ex_str ?
              <Col sm={1}><FormControl defaultValue={this.props.npc.ex_str} /></Col>
              : <div></div>}
          </FormGroup> */}

          <FormGroup>
            <Col sm={2}>Int: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.int} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Dex: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.dex} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Con: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.con} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Wis: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.wis} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Cha: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.cha} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>HP: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.currentHP} /></Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.maxHP} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>AC: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.ac} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Gold: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.gold} /></Col>
          </FormGroup>
          {/* <p>Items: {this.props.npc.items}</p> */}
          <FormGroup>
            <Col sm={2}>Ranking: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.ranking} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Affiliation: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.affiliation} /></Col>
          </FormGroup>
          {/* <p>Notes: {this.props.npc.notes}</p> */}
        </Form>
      </div>
    );
  }
}

export default NPCDetails;
