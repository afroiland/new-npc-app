import { determineThiefAbilities } from './thiefAbilities';
import { determinePaladinAbilities } from './paladinAbilities';
import { determineDruidAbilities } from './druidAbilities';

export function determineAbilities(pcClass, level, race, dex) {
  let results;

  switch (pcClass) {
    case "Fighter":
    case "Cleric":
      //Might change but
      results = ["Turn Undead"];
      break;
    case "Magic-User":
      break;
    case "Thief":
    case "Assassin":
      results = determineThiefAbilities(pcClass, level, race, dex);
      break;
    case "Paladin":
      results = determinePaladinAbilities(level);
      break;
    case "Monk":
      //results = determineMonkAbilities(level);
      break;
    case "Druid":
      results = determineDruidAbilities(level);
      break;
    case "Ranger":
      //results = determineRangerAbilities(level);
      break;
    default:
  }

  return results;
}
