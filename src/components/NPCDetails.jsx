import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Abilities from './abilities';
//import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class NPCDetails extends Component {
  render() {
    //console.log("this.props: ", this.props);
    // if (this.props.abilities) {
    //   console.log("abilities object: ", Object.entries(this.props.abilities));
    // }
    const { abilities, ac, ac_adj, affiliation, cha, con, currentHP, dex, ex_str, gold, int, isPrimary, items, level,
      maxHP, memorized, name, notes, npcClass, probity, race, age, gender, spellbookLvl_1, spellbookLvl_2,
      spellbookLvl_3, spellbookLvl_4, spellbookLvl_5, spellbookLvl_6, spellbookLvl_7, spellbookLvl_8, spellbookLvl_9,
      status, str, thac0, title, armor, att_adj, weapon, wis } = this.props;
    return (
      <SimpleBar style={{ height: '100%' }}>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '4', marginRight: '5px' }}>
            <TextField
              label="Name"
              value={name}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('name')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Level"
              value={level}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('level')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Age"
              value={age}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('age')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Gender"
              value={gender ? gender.toUpperCase() : ""}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('gender')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '5', marginRight: '5px' }}>
            <TextField
              label="Class"
              value={npcClass}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('npcClass')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '5', marginRight: '5px' }}>
            <TextField
              label="Title"
              value={title}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('title')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '2' }}>
            <TextField
              label="Probity"
              value={probity}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('probity')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '3', marginRight: '5px' }}>
            <TextField
              label="Race"
              value={race}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('race')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '3', marginRight: '5px' }}>
            <TextField
              label="Affiliation"
              value={affiliation}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('affiliation')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '2' }}>
            <TextField
              label="Gold"
              value={gold}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              style={{ width: '100%' }}
              onChange={this.handleInputChange('gold')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Str"
              value={str}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('str')}
            />
          </div>
          {
            this.showEx_str() && <div style={{ flex: '1', marginRight: '5px' }}>
              <TextField
                label="/"
                value={ex_str}
                margin="normal"
                variant="outlined"
                inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
                onChange={this.handleInputChange('ex_str')}
              />
            </div>
          }
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Int"
              value={int}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('int')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Wis"
              value={wis}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('wis')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Dex"
              value={dex}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('dex')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Con"
              value={con}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('con')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Cha"
              value={cha}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('cha')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="HP"
              value={currentHP}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('currentHP')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Max HP"
              value={maxHP}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('maxHP')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="AC"
              value={ac}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('ac')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="AC Adj"
              value={ac_adj}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('ac_adj')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Thac0"
              value={thac0}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('thac0')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Att Adj"
              value={att_adj}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" }, readOnly: !isPrimary }}
              onChange={this.handleInputChange('att_adj')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px', height: '70px' }}>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Weapon"
              value={weapon}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('weapon')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Armor"
              value={armor}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('armor')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Status"
              value={status}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange('status')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', margin: '0px 10px 0px 10px' }}>
          <TextField
            label="Items"
            value={items}
            margin="normal"
            variant="outlined"
            multiline
            style={{ width: '100%' }}
            onChange={this.handleInputChange('items')}
            inputProps={{ readOnly: !isPrimary }}
          />
        </div>

        <div style={{ margin: '0px 10px 0px 10px' }}>
          <TextField
            label="Notes"
            value={notes}
            margin="normal"
            variant="outlined"
            multiline
            style={{ width: '100%', marginTop: '7px' }}
            onChange={this.handleInputChange('notes')}
            inputProps={{ readOnly: !isPrimary }}
          />
        </div>

        {
          // memorized && <div style={{ margin: '0px 10px 0px 10px' }}>
          this.showMemd() && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Memorized Spells"
              value={memorized}
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="15"
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('memorized')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_1 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 1"
              value={spellbookLvl_1}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_1')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_2 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 2"
              value={spellbookLvl_2}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_2')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_3 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 3"
              value={spellbookLvl_3}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_3')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_4 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 4"
              value={spellbookLvl_4}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_4')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_5 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 5"
              value={spellbookLvl_5}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_5')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_6 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 6"
              value={spellbookLvl_6}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_6')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_7 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 7"
              value={spellbookLvl_7}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_7')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_8 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 8"
              value={spellbookLvl_8}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_8')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          spellbookLvl_9 && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Spellbook: Level 9"
              value={spellbookLvl_9}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('spellbookLvl_9')}
              inputProps={{ readOnly: !isPrimary }}
            />
          </div>
        }
        {
          abilities && <div style={{ margin: '0px 10px 0px 10px' }}>
            <Abilities abilities={abilities} />
          </div>
        }

      </SimpleBar>
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

  showMemd() {
    const { npcClass, level } = this.props;
    const spellcastersAtLvl1 = ['Magic-User', 'Cleric', 'Druid'];
    let result = false;

    if (spellcastersAtLvl1.includes(npcClass)) {
      result = true;
    }

    if (npcClass === "Paladin" && level >= 9) {
      result = true;
    }

    if (npcClass === "Ranger" && level >= 8) {
      result = true;
    }

    return result;
  }
}

export default NPCDetails;
