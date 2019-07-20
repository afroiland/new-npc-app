import { rollDice } from "./dice"

export function getHP(level, pcClass) {
  let results = [];

  // TODO: Maybe clean this up a bit
  if (pcClass === 'Civilian') {
    results[0] = 3;
    return results;
  }

  switch (pcClass) {
    case 'Fighter':
    case 'Paladin':
      results[0] = 10;
      generateHPBeyondFirstLvl(10, 9, 3);
      break;
    case 'Thief':
      results[0] = 6;
      generateHPBeyondFirstLvl(6, 10, 2);
      break;
    case 'Assassin':
      results[0] = 6;
      generateHPBeyondFirstLvl(6, 15, 0);
      break;
    case 'Cleric':
      results[0] = 8;
      generateHPBeyondFirstLvl(8, 9, 2);
      break;
    case 'Magic-User':
      results[0] = 4;
      generateHPBeyondFirstLvl(4, 11, 1);
      break;
    case 'Monk':
      results[0] = 8;
      generateHPBeyondFirstLvl(4, 17, 0);
      break;
    case 'Druid':
      results[0] = 8;
      generateHPBeyondFirstLvl(8, 14, 0);
      break;
    case 'Ranger':
      results[0] = 16;
      generateHPBeyondFirstLvl(8, 11, 2);
      break;
    default:
  }

  function generateHPBeyondFirstLvl(typeOfDice, maxLevel, hpBeyondMaxLevel) {
    for (let i = 1; i <= 19; i++) {
      if (i <= level) {
        if (i <= maxLevel) {
          // Could insert logic here to avoid characters getting 1 HP for a level
          results[i] = rollDice(1, typeOfDice);
        } else {
          results[i] = hpBeyondMaxLevel;
        }
      }
    }
  }
  return results;
}
