import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup, Grid, Row } from "react-bootstrap";

class NPCDetails extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <Form horizontal>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Name: </Col>
                  <Col sm={4}><FormControl name="name" value={this.props.name} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1} className="fieldTitle">Level: </Col>
                  <Col sm={3}><FormControl name="level" value={this.props.level} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Class: </Col>
                  <Col sm={4}><FormControl name="class" value={this.props.class} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1} className="fieldTitle">Title: </Col>
                  <Col sm={3}><FormControl name="title" value={this.props.title} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Str: </Col>
                  <Col sm={1}><FormControl name="str" value={this.props.str} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl style={{ display: this.showEx_str() ? 'block' : 'none' }}
                    name="ex_str" value={this.props.ex_str} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={2} className="fieldTitle">Int: </Col>
                  <Col sm={1}><FormControl name="int" value={this.props.int} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Dex: </Col>
                  <Col sm={1}><FormControl name="dex" value={this.props.dex} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}></Col>
                  <Col sm={2} className="fieldTitle">Con: </Col>
                  <Col sm={1}><FormControl name="con" value={this.props.con} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Wis: </Col>
                  <Col sm={1}><FormControl name="wis" value={this.props.wis} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}></Col>
                  <Col sm={2} className="fieldTitle">Cha: </Col>
                  <Col sm={1}><FormControl name="cha" value={this.props.cha} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">HP: </Col>
                  <Col sm={1}><FormControl name="currentHP" value={this.props.currentHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1}><FormControl name="maxHP" value={this.props.maxHP} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1} className="fieldTitle">AC: </Col>
                  <Col sm={1}><FormControl name="ac" value={this.props.ac} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1} className="fieldTitle">Thac0: </Col>
                  <Col sm={1}><FormControl name="thac0" value={this.props.thac0} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={1} className="fieldTitle">Gold: </Col>
                  <Col sm={1}><FormControl name="gold" value={this.props.gold} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Weapon: </Col>
                  <Col sm={3}><FormControl name="weapon" value={this.props.weapon} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Items: </Col>
                  <Col sm={8}><FormControl name="items" value={this.props.items} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Notes: </Col>
                  <Col sm={8}><FormControl name="notes" value={this.props.notes} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={2} className="fieldTitle">Probity Score: </Col>
                  <Col sm={1}><FormControl name="probity" value={this.props.probity} onChange={(e) => this.props.handleChange(e)} /></Col>
                  <Col sm={2} className="fieldTitle">Affiliation: </Col>
                  <Col sm={5}><FormControl name="affiliation" value={this.props.affiliation} onChange={(e) => this.props.handleChange(e)} /></Col>
                </FormGroup>
                <div style={{ display: this.props.memorized ? 'block' : 'none' }}>
                  <p>Memorized Spells</p>
                  <FormGroup>
                    <Col sm={10}><FormControl style={{ marginBottom: 20 }} name="memorized"
                      value={this.props.memorized ? this.props.memorized : ""} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
                <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
                  <p>Spellbook</p>
                  <FormGroup style={{ display: this.props.spellbookLvl_1 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 1: </Col>
                    <Col sm={8}><FormControl value={this.props.spellbookLvl_1} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_2 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 2: </Col>
                    <Col sm={8}><FormControl value={this.props.spellbookLvl_2} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_3 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 3: </Col>
                    <Col sm={8}><FormControl value={this.props.spellbookLvl_3} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_4 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 4: </Col>
                    <Col sm={8}><FormControl value={this.props.spellbookLvl_4} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                  <FormGroup style={{ display: this.props.spellbookLvl_5 ? 'block' : 'none' }}>
                    <Col sm={2}>Lv 5: </Col>
                    <Col sm={8}><FormControl value={this.props.spellbookLvl_5} onChange={(e) => this.props.handleChange(e)} /></Col>
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  showEx_str() {
    if (this.props.class === "Fighter" && this.props.str > 17) {
      return true;
    }
  }

  spellbookExists() {
    if (this.props.spellbookLvl_1) {
      return true;
    }
  }
}

export default NPCDetails;
