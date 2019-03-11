import { rollDice } from "./dice";

const fighterWeapons = ["Axe", "Club", "Halberd", "Shortsword", "Longsword", "Two-Handed Sword"];
const clericWeapons = ["Club", "Flail", "Hammer", "Mace", "Staff"];
const thiefWeapons = ["Club", "Dagger", "Darts", "Shortsword", "Longsword"];
const muWeapons = ["Dagger", "Darts", "Staff"];
const monkWeapons = ["Club", "Dagger", "Darts", "Staff", "Hands"];

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
    case "Assassin":
      weapon = thiefWeapons[rollDice(1, thiefWeapons.length) - 1];
      break;
    case "Magic-User":
      weapon = muWeapons[rollDice(1, muWeapons.length) - 1];
      break;
    case "Monk":
      weapon = monkWeapons[rollDice(1, monkWeapons.length) -1];
      break;  
    default:
  }
  return weapon;
}