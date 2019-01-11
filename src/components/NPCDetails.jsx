import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup } from "react-bootstrap";

class NPCDetails extends Component {

  render() {
    console.log("this.props.npc: ", this.props.npc);
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
            <Col sm={1}><FormControl style={{display: this.props.npc.ex_str ? 'block': 'none'}} defaultValue={this.props.npc.ex_str} /></Col>
          </FormGroup>
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

          <p>Spellbook</p>
          <FormGroup>
            <Col sm={2}>Lv 1: </Col>
            <Col sm={10}><FormControl defaultValue={this.listSpells(1)} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Lv 2: </Col>
            <Col sm={10}><FormControl defaultValue={this.listSpells(2)} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Lv 3: </Col>
            <Col sm={10}><FormControl defaultValue={this.listSpells(3)} /></Col>
          </FormGroup>

          {/* <p>Notes: {this.props.npc.notes}</p> */}
        </Form>
      </div>
    );
  }

  listSpells(level) {
    if (!this.props.npc.spellbook) {
      return;
    }
    let spellbook = this.props.npc.spellbook;
    console.log("spellbook: ", spellbook);
    let list = "";
    switch (level) {
      case 1:
        list = listify(spellbook.firstLvlSpells);
      break;
      case 2:
        list = listify(spellbook.secondLvlSpells);
      break;
      case 3:
        list = listify(spellbook.thirdLvlSpells);
      break;
      default:
    }
    console.log("list: ", list);
    return list;

    function listify(spellLevel) {
      for (let i = 0; i < spellLevel.length; i++) {
        list += spellLevel[i] + ", ";
      }
      console.log("list.length: ", list.length);
      return list.slice(0, (list.length - 2));
      console.log("list (in listify): ", list);
    }
  }
}

export default NPCDetails;
