import { rollDice } from "./dice";

const armorList = ["Leather", "Studded Leather", "Scale Mail", "Chain Mail", "Banded Mail", "Plate Mail"];
const fighterChanceForShieldPerCent = 80;
const nonFighterChanceForShieldPerCent = 50;


export function getArmor(pcClass) {
  let armor;
  let chanceForShield;
  switch (pcClass) {
    case "Fighter":
    case "Cleric":
    case "Paladin":
      armor = armorList[rollDice(1, armorList.length) - 1];
      chanceForShield = fighterChanceForShieldPerCent;
      break;
    case "Thief":
    case "Assassin":
    case "Druid":
      armor = "Leather";
      chanceForShield = nonFighterChanceForShieldPerCent;
      break;
    case "Magic-User":
    case "Monk":
      armor = "None";
      break;  
    default:
  }
  if (rollDice(1, 100) < chanceForShield) {
    armor += " + Shield"
  }
  console.log("armor: ", armor);
  return armor;
}
 