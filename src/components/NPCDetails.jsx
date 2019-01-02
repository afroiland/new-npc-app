import React, { Component } from "react";
import { Button, Col, Form, FormControl, FormGroup, Grid, Row } from "react-bootstrap";

class NPCDetails extends Component {
  render() {
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
          {this.props.npc.ex_str ? (
            <FormGroup>
              <Col sm={2}>Str: </Col>
              <Col sm={1}><FormControl defaultValue={this.props.npc.str} /></Col>
              <Col sm={1}><FormControl defaultValue={this.props.npc.ex_str} /></Col>
            </FormGroup>
          ) : (
              <FormGroup>
                <Col sm={2}>Str: </Col>
                <Col sm={1}><FormControl defaultValue={this.props.npc.str} /></Col>
              </FormGroup>
            )}
          {/* {this.props.npc.ex_str ? (<p>Str: {this.props.npc.str}/{this.props.npc.ex_str}</p>
          ) : (
            <p>Str: {this.props.npc.str}</p>
          )} */}

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
          {/* <p>Int: {this.props.npc.int}</p>
          <p>Dex: {this.props.npc.dex}</p>
          <p>Con: {this.props.npc.con}</p>
          <p>Wis: {this.props.npc.wis}</p>
          <p>Cha: {this.props.npc.cha}</p> */}

          <p>Current HP: {this.props.npc.currentHP}</p>
          <p>Max HP: {this.props.npc.maxHP}</p>
          <p>AC: {this.props.npc.ac}</p>
          {/* <p>Items: {this.props.npc.items}</p> */}
          <p>Gold: {this.props.npc.gold}</p>
          <p>Ranking: {this.props.npc.ranking}</p>
          <p>Affiliation: {this.props.npc.affiliation}</p>
          {/* <p>Notes: {this.props.npc.notes}</p> */}
        </Form>
      </div>
    );
  }
}

export default NPCDetails;
