import { rollDice } from "./dice";

const fighterWeapons = ["axe", "club", "halberd", "shortsword", "longsword", "2handedsword"];
const clericWeapons = ["club", "flail", "hammer", "mace", "staff"];
const thiefWeapons = ["club", "dagger", "dart", "shortsword", "longsword"];
const muWeapons = ["dagger", "dart", "staff"];

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