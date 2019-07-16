import { rollDice } from "./dice";

const fighterWeapons = ["Axe", "Club", "Halberd", "Shortsword", "Longsword", "Two-Handed Sword"];
const clericWeapons = ["Club", "Flail", "Hammer", "Mace", "Staff"];
const druidWeapons = ["Club", "Dagger", "Darts (Qty: 21)", "Hammer", "Spear", "Staff"];
const thiefWeapons = ["Club", "Dagger", "Darts (Qty: 21)", "Shortsword", "Longsword"];
const muWeapons = ["Dagger", "Darts (Qty: 21)", "Staff"];
const monkWeapons = ["Club", "Dagger", "Darts (Qty: 21)", "Staff", "Hands"];

export function getWeapon(pcClass) {
  let weapon;
  switch (pcClass) {
    case 'Fighter':
    case 'Paladin':
    case 'Assassin':
    case 'Ranger':
      weapon = fighterWeapons[rollDice(1, fighterWeapons.length) - 1];
      break;
    case 'Cleric':
      weapon = clericWeapons[rollDice(1, clericWeapons.length) - 1];
      break;
    case 'Druid':
      weapon = druidWeapons[rollDice(1, druidWeapons.length) - 1];
      break;
    case 'Thief':
      weapon = thiefWeapons[rollDice(1, thiefWeapons.length) - 1];
      break;
    case 'Magic-User':
      weapon = muWeapons[rollDice(1, muWeapons.length) - 1];
      break;
    case 'Monk':
      weapon = monkWeapons[rollDice(1, monkWeapons.length) - 1];
      break;
    case 'Civilian':
      weapon = "None";
      break;
    default:
  }
  return weapon;
}