import React from "react";
import { TextField } from "@material-ui/core";

const Abilities = abilities => {
  
  const formatAbilities = (abilitiesArray) => {
    let result = "";
    for (let i = 0; i < abilitiesArray.length; i++) {
      result += abilitiesArray[i];
      if (i !== abilitiesArray.length - 1) {
        result += "\n";
      }
    }
    return result;
  }

  return (
    <TextField
      label='Class Abilities'
      value={formatAbilities(abilities.abilities)}
      margin="normal"
      variant="outlined"
      multiline
      style={{ width: '100%', marginTop: '7px' }}
    />
  );
};

export default Abilities;
