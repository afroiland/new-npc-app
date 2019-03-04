import React, { Component } from "react";
import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class NPCDetails extends Component {
  render() {
    const { ac, affiliation, cha, con, currentHP, dex, ex_str, gold, handleChange, int, items, level, maxHP, memorized, name,
      notes, npcClass, probity, spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5, status, str,
      thac0, title, weapon, wis } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item sm>
            <TextField
              label="Name"
              value={name}
              margin="normal"
              variant="outlined"
              style={{ marginLeft: 3, marginRight: 3 }}
              onChange={this.handleInputChange('name')}
            />
            <TextField
              label="Level"
              value={level}
              margin="normal"
              variant="outlined"
              style={{ marginLeft: 3, marginRight: 3, width: 65 }}
              onChange={this.handleInputChange('level')}
            />
            <TextField
              label="Class"
              value={npcClass}
              margin="normal"
              variant="outlined"
              style={{ marginLeft: 3, marginRight: 3 }}
              onChange={this.handleInputChange('npcClass')}
            />
            <TextField
              label="Title"
              value={title}
              margin="normal"
              variant="outlined"
              style={{ marginLeft: 3, marginRight: 3 }}
              onChange={this.handleInputChange('title')}
            />
          </Grid>

          {/* <br /> */}

          {/* <Grid container direction='column' alignItems='flex-start'> */}
          <Grid container>
            <Grid item sm>
              <TextField
                label="Str"
                value={str}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('str')}
              />
              <TextField
                label="/"
                value={ex_str}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 55, display: this.showEx_str() ? 'inline-flex' : 'none' }}
                onChange={this.handleInputChange('ex_str')}
              />
              <span style={{ width: 55, display: this.showEx_str() ? 'none' : 'inline-flex' }}></span>
              {/* </Grid>
            <Grid item> */}

              {/* </Grid>
            <br/>
            <Grid item> */}
              <TextField
                label="Int"
                value={int}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('int')}
              />
              {/* </Grid>
            <Grid item> */}
              <TextField
                label="Dex"
                value={dex}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('dex')}
              />
              {/* </Grid>
            <Grid item> */}
              <TextField
                label="Con"
                value={con}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('con')}
              />
              {/* </Grid>
            <Grid item> */}
              <TextField
                label="Wis"
                value={wis}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('wis')}
              />
              {/* </Grid>
            <Grid item> */}
              <TextField
                label="Cha"
                value={cha}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('cha')}
              />
              <TextField
                label="Gold"
                value={gold}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 75 }}
                onChange={this.handleInputChange('gold')}
              />

              <TextField
                label="Status"
                value={status}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 200 }}
                onChange={this.handleInputChange('status')}
              />
              <TextField
                label="HP"
                value={currentHP}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('currentHP')}
              />
              <TextField
                label="Max"
                value={maxHP}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('maxHP')}
              />
              <TextField
                label="AC"
                value={ac}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 50 }}
                onChange={this.handleInputChange('ac')}
              />
              <TextField
                label="Thac0"
                value={thac0}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 65 }}
                onChange={this.handleInputChange('thac0')}
              />
              <TextField
                label="Probity"
                value={probity}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 65 }}
                onChange={this.handleInputChange('probity')}
              />
              <TextField
                label="Weapon"
                value={weapon}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 200 }}
                onChange={this.handleInputChange('weapon')}
              />
              <TextField
                label="Affiliation"
                value={affiliation}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 3, marginRight: 3, width: 200 }}
                onChange={this.handleInputChange('affiliation')}
              />
              <TextField
                label="Items"
                value={items}
                margin="normal"
                variant="outlined"
                multiline
                style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                onChange={this.handleInputChange('items')}
              />
              <TextField
                label="Notes"
                value={notes}
                margin="normal"
                variant="outlined"
                multiline
                style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                onChange={this.handleInputChange('notes')}
              />
              <TextField
                label="Memorized Spells"
                value={memorized}
                margin="normal"
                variant="outlined"
                multiline
                style={{ display: memorized ? 'inline-flex' : 'none', marginLeft: 3, marginRight: 3, width: 800 }}
                onChange={this.handleInputChange('memorized')}
              />

              <div style={{ display: this.spellbookExists() ? 'block' : 'none' }}>
                <p style={{ marginRight: 200 }}>Spellbook</p>
                <TextField
                  label="Spellbook: Level 1"
                  value={spellbookLvl_1}
                  margin="normal"
                  variant="outlined"
                  multiline
                  style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                  onChange={this.handleInputChange('spellbookLvl_1')}
                />
                <TextField
                  label="Spellbook: Level 2"
                  value={spellbookLvl_2}
                  margin="normal"
                  variant="outlined"
                  multiline
                  style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                  onChange={this.handleInputChange('spellbookLvl_2')}
                />
                <TextField
                  label="Spellbook: Level 3"
                  value={spellbookLvl_3}
                  margin="normal"
                  variant="outlined"
                  multiline
                  style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                  onChange={this.handleInputChange('spellbookLvl_3')}
                />
                <TextField
                  label="Spellbook: Level 4"
                  value={spellbookLvl_4}
                  margin="normal"
                  variant="outlined"
                  multiline
                  style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                  onChange={this.handleInputChange('spellbookLvl_4')}
                />
                <TextField
                  label="Spellbook: Level 5"
                  value={spellbookLvl_5}
                  margin="normal"
                  variant="outlined"
                  multiline
                  style={{ marginLeft: 3, marginRight: 3, width: 800 }}
                  onChange={this.handleInputChange('spellbookLvl_5')}
                />
              </div>



            </Grid>
          </Grid>

          
        </Grid>
      </div>
    );
  }

  handleInputChange = name => event => {
    this.props.handleChange(name, event.target.value);
  }

  showEx_str() {
    const { npcClass, str } = this.props;
    if (npcClass === "Fighter" && str > 17) {
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
