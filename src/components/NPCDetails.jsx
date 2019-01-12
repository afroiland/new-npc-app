import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup } from "react-bootstrap";

class NPCDetails extends Component {

  render() {
    //console.log("this.props.npc: ", this.props.npc);
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
            <Col sm={1}>Class: </Col>
            <Col sm={5}><FormControl defaultValue={this.props.npc.class} /></Col>
            <Col sm={1}>Title: </Col>
            <Col sm={5}><FormControl defaultValue={this.props.npc.title} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Str: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.str} /></Col>
            <Col sm={1}><FormControl style={{ display: this.props.npc.ex_str ? 'block' : 'none' }} defaultValue={this.props.npc.ex_str} /></Col>
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
            <Col sm={2}>AC: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.ac} /></Col>
            <Col sm={2}>Gold: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.gold} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Items: </Col>
            <Col sm={10}><FormControl defaultValue={this.props.npc.items} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Notes: </Col>
            <Col sm={10}><FormControl defaultValue={this.props.npc.notes} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Probity Score: </Col>
            <Col sm={1}><FormControl defaultValue={this.props.npc.probity} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Affiliation: </Col>
            <Col sm={4}><FormControl defaultValue={this.props.npc.affiliation} /></Col>
          </FormGroup>
          <div style={{ display: this.props.npc.spellbook ? 'block' : 'none' }}>
            <p>Spellbook</p>
            <FormGroup style={{ display: this.spellbookExists(this.props.npc, 1) ? 'block' : 'none' }}>
              <Col sm={2}>Lv 1: </Col>
              <Col sm={10}><FormControl defaultValue={this.listSpells(1)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.spellbookExists(this.props.npc, 2) ? 'block' : 'none' }}>
              <Col sm={2}>Lv 2: </Col>
              <Col sm={10}><FormControl defaultValue={this.listSpells(2)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.spellbookExists(this.props.npc, 3) ? 'block' : 'none' }}>
              <Col sm={2}>Lv 3: </Col>
              <Col sm={10}><FormControl defaultValue={this.listSpells(3)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.spellbookExists(this.props.npc, 4) ? 'block' : 'none' }}>
              <Col sm={2}>Lv 4: </Col>
              <Col sm={10}><FormControl defaultValue={this.listSpells(4)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.spellbookExists(this.props.npc, 5) ? 'block' : 'none' }}>
              <Col sm={2}>Lv 5: </Col>
              <Col sm={10}><FormControl defaultValue={this.listSpells(5)} /></Col>
            </FormGroup>
          </div>
        
        <div style={{ display: this.props.npc.memorized ? 'block' : 'none' }}>
          <p>Memorized Spells</p>
          <FormGroup>
            <Col sm={12}><FormControl style={{ marginBottom: 20 }} defaultValue={this.listMemdSpells()} /></Col>
          </FormGroup>
        </div>
        </Form>
      </div>
    );
  }

  listSpells(level) {
    if (!this.props.npc.spellbook) {
      return;
    }
    let spellbook = this.props.npc.spellbook;
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
      case 4:
        list = listify(spellbook.fourthLvlSpells);
        break;
      case 5:
        list = listify(spellbook.fifthLvlSpells);
        break;
      default:
    }
    return list;

    function listify(spellLevel) {
      for (let i = 0; i < spellLevel.length; i++) {
        list += spellLevel[i] + ", ";
      }
      return list.slice(0, (list.length - 2));
    }
  }

  listMemdSpells() {
    let temp = this.props.npc.memorized;
    if (!temp) {
      return;
    }
    let list = "";
    list = listify(temp);
    return list;

    function listify() {
      for (let i = 0; i < temp.length; i++) {
        list += temp[i] + ", ";
      }
      return list.slice(0, (list.length - 2));
    }
  }

  spellbookExists(npc, level) {
    if (!npc.spellbook) {
      return false;
    }
    switch (level) {
      case 1:
        if (npc.spellbook.firstLvlSpells.length < 1) {
          return false;
        }
        break;
      case 2:
        if (npc.spellbook.secondLvlSpells.length < 1) {
          return false;
        }
        break;
      case 3:
        if (npc.spellbook.thirdLvlSpells.length < 1) {
          return false;
        }
        break;
      case 4:
        if (npc.spellbook.fourthLvlSpells.length < 1) {
          return false;
        }
        break;
      case 5:
        if (npc.spellbook.fifthLvlSpells.length < 1) {
          return false;
        }
        break;
      default:
    }
    return true;
  }
}

export default NPCDetails;
