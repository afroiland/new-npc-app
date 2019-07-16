import { determineThiefAbilities } from "./thiefAbilities";

export function determineAbilities(pcClass, level, race, dex, armor) {
  let results;

  switch (pcClass) {
    case "Fighter":
    case "Cleric":
    case "Magic-User":
      break;
    case "Thief":
    case "Assassin":
      results = determineThiefAbilities(level, race, dex, armor);
      break;
    case "Paladin":
      //results = determinePaladinAbilities(level);
      break;
    case "Monk":
      //results = determineMonkAbilities(level);
      break;
    case "Druid":
      //results = determineDruidAbilities(level);
      break;
    case "Ranger":
      //results = determineRangerAbilities(level);
      break;
    default:
  }

  return results;
}
