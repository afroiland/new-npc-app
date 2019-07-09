import { rollDice } from "./dice"

export function getHP(level, pcClass) {
  let results = {
    Lv1_HP: 0, Lv2_HP: 0, Lv3_HP: 0, Lv4_HP: 0, Lv5_HP: 0, Lv6_HP: 0, Lv7_HP: 0, Lv8_HP: 0,
    Lv9_HP: 0, Lv10_HP: 0, Lv11_HP: 0, Lv12_HP: 0, Lv13_HP: 0, Lv14_HP: 0, Lv15_HP: 0,
    Lv16_HP: 0, Lv17_HP: 0, Lv18_HP: 0, Lv19_HP: 0, Lv20_HP: 0
  };

  // TODO: Maybe clean this up a bit
  if (pcClass === 'Civilian') {
    results.Lv1_HP = 3;
    return results;
  }

  switch (pcClass) {
    case 'Fighter':
    case 'Paladin':
      results.Lv1_HP = 10;
      generateHPBeyondFirstLvl(1, 10, 9, 3);
      break;
    case 'Thief':
      results.Lv1_HP = 6;
      generateHPBeyondFirstLvl(1, 6, 10, 2);
      break;
    case 'Assassin':
      results.Lv1_HP = 6;
      generateHPBeyondFirstLvl(1, 6, 15, 0);
      break;
    case 'Cleric':
      results.Lv1_HP = 8;
      generateHPBeyondFirstLvl(1, 8, 9, 2);
      break;
    case 'Magic-User':
      results.Lv1_HP = 4;
      generateHPBeyondFirstLvl(1, 4, 11, 1);
      break;
    case 'Monk':
      results.Lv1_HP = 8;
      generateHPBeyondFirstLvl(1, 4, 17, 0);
      break;
    case 'Druid':
      results.Lv1_HP = 8;
      generateHPBeyondFirstLvl(1, 8, 14, 0);
      break;
    case 'Ranger':
      results.Lv1_HP = 16;
      generateHPBeyondFirstLvl(1, 8, 11, 2);
      break;
    default:
  }

  function generateHPBeyondFirstLvl(numberOfDice, typeOfDice, maxLevel, hpBeyondMaxLevel) {
    for (let i = 2; i <= 20; i++) {
      let levelString = "Lv" + i + "_HP";
      if (i <= level) {
        if (i <= maxLevel) {
          // Could insert logic here to avoid characters getting 1 HP for a level
          results[levelString] = rollDice(numberOfDice, typeOfDice);
        } else {
          results[levelString] = hpBeyondMaxLevel;
        }
      }
    }
  }
  return results;
}
