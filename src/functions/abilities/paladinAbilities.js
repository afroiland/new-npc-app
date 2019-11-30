export function determinePaladinAbilities(level) {
  let paladinAbilities = ["Detect Evil within 60'", "+2 on All Saving Throws", "Immunity to Disease",
    "Lay on Hands 1x/Day: " + level*2 + "hp", "Continual Protection from Evil, 10' Radius",
    "Cure Disease " + calcCureDisease(level) + "x/Week"];

  if (level >= 3) {
    paladinAbilities.push("Turn Undead");
  }

  if (level >= 4) {
    paladinAbilities.push("Call Warhorse");
  }

  return paladinAbilities;
}

function calcCureDisease(level) {
  let result;
  if (level < 6) {
    result = 1;
    //TODO: Figure out why (5 < level < 11) doesn't work
  } else if (5 < level && level < 11) {
    result = 2;
  } else if (level > 10) {
    result = 3;
  }

  return result;
}
