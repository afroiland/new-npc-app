import { rollDice } from "./dice";

const fighterWeapons = ["fw1", "fw2"];
const clericWeapons = ["cw1", "cw2"];
const thiefWeapons = ["tw1", "tw2"];
const muWeapons = ["mw1", "mw2"];

export function getWeapon(pcClass) {
  let weapon;
  switch (pcClass) {
    case "Fighter":
      weapon = fighterWeapons[rollDice(1, fighterWeapons.length) - 1];
      break;
    case "Cleric":
      weapon = clericWeapons[rollDice(1, clericWeapons.length) - 1];
      break;
    case "Thief":
      weapon = thiefWeapons[rollDice(1, thiefWeapons.length) - 1];
      break;
    case "Magic-User":
      weapon = muWeapons[rollDice(1, muWeapons.length) - 1];
      break;
    default:
  }
  return weapon;
}