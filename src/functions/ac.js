const monkArmorClassList = [10, 9, 8, 7, 7, 6, 5, 4, 3, 3, 2, 1, 0, -1, -1, -2, -3];

export function calcAC(npcClass, level, armor, dex) {
  let ac = 0;
  if (npcClass === "Monk") {
    if (level <= 17) {
      ac = monkArmorClassList[level - 1];
    } else {
      ac = monkArmorClassList[monkArmorClassList.length - 1];
    }
  } else {
    switch (armor) {
      case 'None':
        ac = 10;
        break;
      case 'Shield Only':
        ac = 9;
        break;
      case 'Leather':
        ac = 8;
        break;
      case 'Leather + Shield':
      case 'Studded Leather':
        ac = 7;
        break;
      case 'Studded Leather + Shield':
      case 'Scale Mail':
        ac = 6;
        break;
      case 'Scale Mail + Shield':
      case 'Chain Mail':
        ac = 5;
        break;
      case 'Chain Mail + Shield':
      case 'Banded Mail':
        ac = 4;
        break;
      case 'Banded Mail + Shield':
      case 'Plate Mail':
        ac = 3;
        break;
      case 'Plate Mail + Shield':
        ac = 2;
        break;
      default:
    }
    if (dex === 15) {
      ac--;
    }
    if (dex === 16) {
      ac -= 2;
    }
    if (dex === 17) {
      ac -= 3;
    }
    if (dex === 18) {
      ac -= 4;
    }
  }
  return ac;
}
