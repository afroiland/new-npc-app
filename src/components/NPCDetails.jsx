import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
//import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class NPCDetails extends Component {
  render() {
    //console.log("this.props: ", this.props);
    // if (this.props.abilities) {
    //   console.log("abilities object: ", Object.entries(this.props.abilities));
    // }
    const { ac, ac_adj, affiliation, cha, con, currentHP, dex, ex_str, gold, int, items, level, maxHP, memorized, name, notes,
      npcClass, probity, race, age, gender, spellbookLvl_1, spellbookLvl_2, spellbookLvl_3, spellbookLvl_4, spellbookLvl_5,
      spellbookLvl_6, spellbookLvl_7, spellbookLvl_8, spellbookLvl_9, abilities, status, str, thac0, title, armor, att_adj,
      weapon, wis } = this.props;
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
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Level"
              value={level}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('level')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Age"
              value={age}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('age')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Gen."
              value={gender ? gender.toUpperCase() : ""}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
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
            />
          </div>
          <div style={{ flex: '2' }}>
            <TextField
              label="Probity"
              value={probity}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
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
            />
          </div>
          <div style={{ flex: '2' }}>
            <TextField
              label="Gold"
              value={gold}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
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
              inputProps={{ style: { textAlign: "center" } }}
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
                inputProps={{ style: { textAlign: "center" } }}
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
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('int')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Wis"
              value={wis}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('wis')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Dex"
              value={dex}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('dex')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Con"
              value={con}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('con')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Cha"
              value={cha}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
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
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('currentHP')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Max"
              value={maxHP}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('maxHP')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="AC"
              value={ac}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('ac')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="AC Adj"
              value={ac_adj}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('ac_adj')}
            />
          </div>
          <div style={{ flex: '1', marginRight: '5px' }}>
            <TextField
              label="Thac0"
              value={thac0}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              onChange={this.handleInputChange('thac0')}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextField
              label="Att Adj"
              value={att_adj}
              margin="normal"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
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
          />
        </div>

        {
          memorized && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Memorized Spells"
              value={memorized}
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="15"
              style={{ width: '100%', marginTop: '7px' }}
              onChange={this.handleInputChange('memorized')}
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
            />
          </div>
        }
        {
          abilities && <div style={{ margin: '0px 10px 0px 10px' }}>
            <TextField
              label="Abilities"
              value={JSON.stringify(abilities)}
              margin="normal"
              variant="outlined"
              multiline
              style={{ width: '100%', marginTop: '7px' }}
            />
          </div>
        }

        {/* <List style={{ border: "1px solid rgba(255, 255, 255, 0.23)", borderRadius: 4 }}>
              {Object.entries(abilities).map(ability => <ListItem dense key={ability[0]}>
                <ListItemText>
                  <Typography style={{ color: "rgba(255, 255, 255, 0.7)" }}>{ability[0] + ' ' + ability[1]}</Typography>
                </ListItemText>
              </ListItem>)}
            </List> */}

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
}

export default NPCDetails;
