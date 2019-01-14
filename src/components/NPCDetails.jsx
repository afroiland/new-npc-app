import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup } from "react-bootstrap";

class NPCDetails extends Component {

  render() {
    console.log("this.props: ", this.props);
    console.log("this.props.npc: ", this.props.npc);
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col sm={1} style={{ marginTop: 7 }}>Name: </Col>
            <Col sm={5}><FormControl name="name" defaultValue={this.props.npc.name} onChange={this.props.changeFunc} /></Col>
            <Col sm={1}>Level: </Col>
            <Col sm={5}><FormControl name="level" defaultValue={this.props.npc.level} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={1}>Class: </Col>
            <Col sm={5}><FormControl name="class" defaultValue={this.props.npc.class} onChange={this.props.changeFunc} /></Col>
            <Col sm={1}>Title: </Col>
            <Col sm={5}><FormControl name="title" defaultValue={this.props.npc.title} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Str: </Col>
            <Col sm={1}><FormControl name="str" defaultValue={this.props.npc.str} onChange={this.props.changeFunc} /></Col>
            <Col sm={1}><FormControl style={{ display: this.props.npc.ex_str ? 'block' : 'none' }}
              name="ex_str" defaultValue={this.props.npc.ex_str} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Int: </Col>
            <Col sm={1}><FormControl name="int" defaultValue={this.props.npc.int} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Dex: </Col>
            <Col sm={1}><FormControl name="dex" defaultValue={this.props.npc.dex} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Con: </Col>
            <Col sm={1}><FormControl name="con" defaultValue={this.props.npc.con} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Wis: </Col>
            <Col sm={1}><FormControl name="wis" defaultValue={this.props.npc.wis} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Cha: </Col>
            <Col sm={1}><FormControl name="cha" defaultValue={this.props.npc.cha} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>HP: </Col>
            <Col sm={1}><FormControl name="currentHP" defaultValue={this.props.npc.currentHP} onChange={this.props.changeFunc} /></Col>
            <Col sm={1}><FormControl name="maxHP" defaultValue={this.props.npc.maxHP} onChange={this.props.changeFunc} /></Col>
            <Col sm={2}>AC: </Col>
            <Col sm={1}><FormControl name="ac" defaultValue={this.props.npc.ac} onChange={this.props.changeFunc} /></Col>
            <Col sm={2}>Gold: </Col>
            <Col sm={1}><FormControl name="gold" defaultValue={this.props.npc.gold} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Items: </Col>
            <Col sm={10}><FormControl name="items" defaultValue={this.props.npc.items} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Notes: </Col>
            <Col sm={10}><FormControl name="notes" defaultValue={this.props.npc.notes} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Probity Score: </Col>
            <Col sm={1}><FormControl name="probity" defaultValue={this.props.npc.probity} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Affiliation: </Col>
            <Col sm={4}><FormControl name="affiliation" defaultValue={this.props.npc.affiliation} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
          <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
            <p>Spellbook</p>
            <FormGroup style={{ display: this.props.npc.spellbookLvl_1 ? 'block' : 'none' }}>
              <Col sm={2}>Lv 1: </Col>
              <Col sm={10}><FormControl defaultValue={this.listify(this.props.npc.spellbookLvl_1)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.props.npc.spellbookLvl_2 ? 'block' : 'none' }}>
              <Col sm={2}>Lv 2: </Col>
              <Col sm={10}><FormControl defaultValue={this.listify(this.props.npc.spellbookLvl_2)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.props.npc.spellbookLvl_3 ? 'block' : 'none' }}>
              <Col sm={2}>Lv 3: </Col>
              <Col sm={10}><FormControl defaultValue={this.listify(this.props.npc.spellbookLvl_3)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.props.npc.spellbookLvl_4 ? 'block' : 'none' }}>
              <Col sm={2}>Lv 4: </Col>
              <Col sm={10}><FormControl defaultValue={this.listify(this.props.npc.spellbookLvl_4)} /></Col>
            </FormGroup>
            <FormGroup style={{ display: this.props.npc.spellbookLvl_5 ? 'block' : 'none' }}>
              <Col sm={2}>Lv 5: </Col>
              <Col sm={10}><FormControl defaultValue={this.listify(this.props.npc.spellbookLvl_5)} /></Col>
            </FormGroup>
          </div>
        
        <div style={{ display: this.props.npc.memorized ? 'block' : 'none' }}>
          <p>Memorized Spells</p>
          <FormGroup>
            <Col sm={12}><FormControl style={{ marginBottom: 20 }} name="memorized"
            defaultValue={this.props.npc.memorized ? this.listMemdSpells() : ""} onChange={this.props.changeFunc} /></Col>
          </FormGroup>
        </div>
        </Form>
      </div>
    );
  }

  listify(spellLevel) {
    if (!spellLevel) {
      return;
    }
    let list = "";
    for (let i = 0; i < spellLevel.length; i++) {
      list += spellLevel[i] + ", ";
    }
    return list.slice(0, (list.length - 2));
  }

  // listSpells(level) {
  //   if (!this.props.npc.spellbook) {
  //     return;
  //   }
  //   let spellbook = this.props.npc.spellbook;
  //   let list = "";
  //   switch (level) {
  //     case 1:
  //       list = listify(spellbook.firstLvlSpells);
  //       break;
  //     case 2:
  //       list = listify(spellbook.secondLvlSpells);
  //       break;
  //     case 3:
  //       list = listify(spellbook.thirdLvlSpells);
  //       break;
  //     case 4:
  //       list = listify(spellbook.fourthLvlSpells);
  //       break;
  //     case 5:
  //       list = listify(spellbook.fifthLvlSpells);
  //       break;
  //     default:
  //   }
  //   return list;

  //   function listify(spellLevel) {
  //     for (let i = 0; i < spellLevel.length; i++) {
  //       list += spellLevel[i] + ", ";
  //     }
  //     return list.slice(0, (list.length - 2));
  //   }
  // }

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

  spellbookExists() {
    let temp = this.props.npc
    if (!temp) {
      return false;
    }
    if (!temp.spellbookLvl_1 && !temp.spellbookLvl_2 && !temp.spellbookLvl_3 && !temp.spellbookLvl_4 && !temp.spellbookLvl_5) {
      return false;
    }
    return true;
  }

  // spellbookExists(npc, level) {
  //   if (!npc.spellbook) {
  //     return false;
  //   }
    // switch (level) {
    //   case 1:
    //     if (npc.spellbook.firstLvlSpells.length < 1) {
    //       return false;
    //     }
    //     break;
    //   case 2:
    //     if (npc.spellbook.secondLvlSpells.length < 1) {
    //       return false;
    //     }
    //     break;
    //   case 3:
    //     if (npc.spellbook.thirdLvlSpells.length < 1) {
    //       return false;
    //     }
    //     break;
    //   case 4:
    //     if (npc.spellbook.fourthLvlSpells.length < 1) {
    //       return false;
    //     }
    //     break;
    //   case 5:
    //     if (npc.spellbook.fifthLvlSpells.length < 1) {
    //       return false;
    //     }
    //     break;
    //   default:
    // }
    //return true;
  //}
}

export default NPCDetails;
