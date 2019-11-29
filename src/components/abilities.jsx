import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class Abilities extends Component {
  render() {
    //console.log("Abilities props: ", this.props);
    const { abilities } = this.props;
    return (
      <TextField
        label='Class Abilities'
        value={formatAbilities(abilities)}
        margin="normal"
        variant="outlined"
        multiline
        style={{ width: '100%', marginTop: '7px' }}
      />
    );
  }
}

function formatAbilities(abilitiesArray) {
  let result = "";
  console.log("abilitiesArray: ", abilitiesArray);

  for (let i = 0; i < abilitiesArray.length; i++) {
    console.log(abilitiesArray[i]);
    result += abilitiesArray[i];
    if (i !== abilitiesArray.length - 1) {
      result += "\n";
    }
  }

  console.log("result: ", result);
  return result;
}

export default Abilities;
