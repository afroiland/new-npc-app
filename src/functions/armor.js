import { rollDice } from "./dice";

const armorList = ["Leather", "Studded Leather", "Scale Mail", "Chain Mail", "Banded Mail", "Plate Mail"];

export function getArmor(pcClass, weapon) {
  let armor;
  let canUseShield;
  switch (pcClass) {
    case "Fighter":
    case "Cleric":
    case "Paladin":
      armor = armorList[rollDice(1, armorList.length) - 1];
      canUseShield = true;
      break;
    case "Druid":
    case "Assassin":
      armor = "Leather";
      canUseShield = true;
      break;
    case "Thief":
      armor = "Leather";
      canUseShield = false;
      break;
    case "Magic-User":
    case "Monk":
      armor = "None";
      canUseShield = false;
      break;
    default:
  }
  if (canUseShield && weapon !== "Halberd" && weapon !== "Two-Handed Sword" && weapon !== "Staff" && weapon !== "Spear") {
    armor += " + Shield"
  }
  return armor;
}
