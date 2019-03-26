import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class NPCDetails extends Component {
  render() {
    const { ac, affiliation, cha, con, currentHP, dex, ex_str, gold, int, items, level, maxHP, memorized, name,
      notes, npcClass, probity, race, spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5,
      spellbookLvl_6, spellbookLvl_7, spellbookLvl_8, spellbookLvl_9, status, str, thac0, title, armor, weapon,
      wis } = this.props;
    return (
      <div style={{width: 'calc(100% - 30px)'}}>
      {/* <div style={{flexGrow: 1}}> */}
        <Grid container spacing={24} justify="flex-start" style={{ marginTop: 5, marginLeft: 20, width: '100%' }}>
          {/* <Grid container spacing={24} justify="flex-start" style={{ marginTop: 5, marginLeft: 20, width: 500 }}> */}
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Name"
              value={name}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('name')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Level"
              value={level}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 65 }}
              onChange={this.handleInputChange('level')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Class"
              value={npcClass}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('npcClass')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Title"
              value={title}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('title')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Race"
              value={race}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              // style={{ width: 100 }}
              onChange={this.handleInputChange('race')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Str"
              value={str}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('str')}
            />
          </Grid>
          {this.showEx_str() && <Grid item style={{ padding: 5 }}>
            <TextField
              label="/"
              value={ex_str}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('ex_str')}
            />
          </Grid>}
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Int"
              value={int}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('int')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Wis"
              value={wis}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('wis')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Dex"
              value={dex}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('dex')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Con"
              value={con}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('con')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Cha"
              value={cha}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 55 }}
              onChange={this.handleInputChange('cha')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Gold"
              value={gold}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: '100%' }}
              onChange={this.handleInputChange('gold')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Affiliation"
              value={affiliation}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('affiliation')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Status"
              value={status}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('status')}
            />
          </Grid>
          <div style={{ width: '100%' }}></div>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="HP"
              value={currentHP}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 60 }}
              onChange={this.handleInputChange('currentHP')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Max"
              value={maxHP}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 60 }}
              onChange={this.handleInputChange('maxHP')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="AC"
              value={ac}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 50 }}
              onChange={this.handleInputChange('ac')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Thac0"
              value={thac0}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 75 }}
              onChange={this.handleInputChange('thac0')}
            />
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <TextField
              label="Probity"
              value={probity}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              style={{ width: 80 }}
              onChange={this.handleInputChange('probity')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Weapon"
              value={weapon}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('weapon')}
            />
          </Grid>
          <Grid item style={{ padding: 5, flexGrow: 1 }}>
            <TextField
              label="Armor"
              value={armor}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('armor')}
            />
          </Grid>
          <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Items"
              value={items}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('items')}
            />
          </Grid>
          <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Notes"
              value={notes}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('notes')}
            />
          </Grid>
          {memorized && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Memorized Spells"
              value={memorized}
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="15"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('memorized')}
            />
          </Grid>}
          {spellbookLvl_1 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 1"
              value={spellbookLvl_1}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_1')}
            />
          </Grid>}
          {spellbookLvl_2 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 2"
              value={spellbookLvl_2}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_2')}
            />
          </Grid>}
          {spellbookLvl_3 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 3"
              value={spellbookLvl_3}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_3')}
            />
          </Grid>}
          {spellbookLvl_4 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 4"
              value={spellbookLvl_4}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_4')}
            />
          </Grid>}
          {spellbookLvl_5 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 5"
              value={spellbookLvl_5}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_5')}
            />
          </Grid>}
          {spellbookLvl_6 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 6"
              value={spellbookLvl_6}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_6')}
            />
          </Grid>}
          {spellbookLvl_7 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 7"
              value={spellbookLvl_7}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_7')}
            />
          </Grid>}
          {spellbookLvl_8 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 8"
              value={spellbookLvl_8}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_8')}
            />
          </Grid>}
          {spellbookLvl_9 && <Grid item style={{ padding: 5, width: '100%' }}>
            <TextField
              label="Spellbook: Level 9"
              value={spellbookLvl_9}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%' }}
              onChange={this.handleInputChange('spellbookLvl_9')}
            />
          </Grid>}
        </Grid>
      </div>
    );
  }

  handleInputChange = name => event => {
    this.props.handleChange(name, event.target.value);
  }

  showEx_str() {
    const { npcClass, str } = this.props;
    if ((npcClass === "Fighter" || npcClass === "Paladin" || npcClass === "Ranger") && str > 17) {
      return true;
    }
  }
}

export default NPCDetails;
