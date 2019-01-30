import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup, Grid, Row } from "react-bootstrap";

class NPCDetails extends Component {
  render() {
    //console.log("this.props: ", this.props);
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <Form horizontal>
                <FormGroup>
                  <Col sm={1} style={{ marginTop: 7 }}>Name: </Col>
                  <Col sm={5}><FormControl name="name" value={this.props.name} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Level: </Col>
                  <Col sm={5}><FormControl name="level" value={this.props.level} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={1}>Class: </Col>
                  <Col sm={5}><FormControl name="class" value={this.props.class} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Title: </Col>
                  <Col sm={5}><FormControl name="title" value={this.props.title} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Str: </Col>
                  <Col sm={1}><FormControl name="str" value={this.props.str} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl style={{ display: this.props.str > 17 ? 'block' : 'none' }}
                    name="ex_str" value={this.props.ex_str} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={2}>Int: </Col>
                  <Col sm={1}><FormControl name="int" value={this.props.int} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Dex: </Col>
                  <Col sm={1}><FormControl name="dex" value={this.props.dex} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}></Col>
                  <Col sm={2}>Con: </Col>
                  <Col sm={1}><FormControl name="con" value={this.props.con} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Wis: </Col>
                  <Col sm={1}><FormControl name="wis" value={this.props.wis} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}></Col>
                  <Col sm={2}>Cha: </Col>
                  <Col sm={1}><FormControl name="cha" value={this.props.cha} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>HP: </Col>
                  <Col sm={1}><FormControl name="currentHP" value={this.props.currentHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl name="maxHP" value={this.props.maxHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>AC: </Col>
                  <Col sm={1}><FormControl name="ac" value={this.props.ac} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Thac0: </Col>
                  <Col sm={1}><FormControl name="thac0" value={this.props.thac0} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}>Gold: </Col>
                  <Col sm={1}><FormControl name="gold" value={this.props.gold} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Weapon: </Col>
                  <Col sm={3}><FormControl name="weapon" value={this.props.weapon} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Items: </Col>
                  <Col sm={10}><FormControl name="items" value={this.props.items} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Notes: </Col>
                  <Col sm={10}><FormControl name="notes" value={this.props.notes} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Probity Score: </Col>
                  <Col sm={1}><FormControl name="probity" value={this.props.probity} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2}>Affiliation: </Col>
                  <Col sm={4}><FormControl name="affiliation" value={this.props.affiliation} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <div style={{ display: this.props.memorized ? 'block' : 'none' }}>
                  <p>Memorized Spells</p>
                  <FormGroup>
                    <Col sm={12}><FormControl style={{ marginBottom: 20 }} name="memorized"
                      value={this.props.memorized ? this.props.memorized : ""} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
                <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
                  <p>Spellbook</p>
                  <FormGroup style={{ display: this.props.spellbookLvl_1 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 1: </Col>
                    <Col sm={10}><FormControl value={this.props.spellbookLvl_1} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_2 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 2: </Col>
                    <Col sm={10}><FormControl value={this.props.spellbookLvl_2} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_3 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 3: </Col>
                    <Col sm={10}><FormControl value={this.props.spellbookLvl_3} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_4 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 4: </Col>
                    <Col sm={10}><FormControl value={this.props.spellbookLvl_4} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_5 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 5: </Col>
                    <Col sm={10}><FormControl value={this.props.spellbookLvl_5} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  spellbookExists() {
    let temp = this.props
    if (!temp.spellbookLvl_1 && !temp.spellbookLvl_2 && !temp.spellbookLvl_3 && !temp.spellbookLvl_4 && !temp.spellbookLvl_5) {
      return false;
    }
    return true;
  }
}

export default NPCDetails;
