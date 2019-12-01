import { determineThiefAbilities } from './thiefAbilities';
import { determinePaladinAbilities } from './paladinAbilities';
import { determineMonkAbilities } from './monkAbilities';
import { determineDruidAbilities } from './druidAbilities';
import { determineRangerAbilities } from './rangerAbilities';

export function determineAbilities(pcClass, level, race, dex) {
  let results;

  switch (pcClass) {
    case "Fighter":
    case "Magic-User":
      break;
    case "Cleric":
      results = ["Turn Undead"];
      break;
    case "Thief":
    case "Assassin":
      results = determineThiefAbilities(pcClass, level, race, dex);
      break;
    case "Paladin":
      results = determinePaladinAbilities(level);
      break;
    case "Monk":
      results = determineMonkAbilities(level, dex);
      break;
    case "Druid":
      results = determineDruidAbilities(level);
      break;
    case "Ranger":
      results = determineRangerAbilities(level);
      break;
    default:
  }

  return results;
}
