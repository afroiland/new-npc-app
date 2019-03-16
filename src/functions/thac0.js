const fighterThac0s = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 4, 4, 4];
const thiefThac0s = [20, 20, 20, 20, 19, 19, 19, 19, 16, 16, 16, 16, 14, 14, 14, 14, 12, 12, 12, 12];
const clericThac0s = [20, 20, 20, 18, 18, 18, 16, 16, 16, 14, 14, 14, 12, 12, 12, 10, 10, 10, 9, 9];
const muThac0s = [20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 16, 16, 16, 16, 16, 13, 13, 13, 13, 13];

export function calcThac0(level, pcClass, str, ex_str) {
  let thac0;
  switch (pcClass) {
    case 'Fighter':
    case 'Paladin':
    case 'Ranger':
      thac0 = fighterThac0s[level - 1];
      break;
    case 'Thief':
    case 'Assassin':
      thac0 = thiefThac0s[level - 1];
      break;
    case 'Cleric':
    case 'Monk':
    case 'Druid':
      thac0 = clericThac0s[level - 1];
      break;
    case 'Magic-User':
      thac0 = muThac0s[level - 1];
      break;
    default:
  }

  if (str >= 17) {
    if (0 <= ex_str && ex_str <= 50) {
      thac0--;
    } else if (51 <= ex_str && ex_str <= 99) {
      thac0 -= 2;
    } else if (ex_str === 100) {
      thac0 -= 3;
    }
  }

  return thac0;
}