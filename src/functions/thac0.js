import { rollDice } from "./dice";

const fighterThac0s = [20, 19, 18, 17, 16, 15, 14];
const thiefThac0s = [20, 20, 20, 20, 19, 19, 19];
const clericThac0s = [20, 20, 20, 18, 18, 18, 16];
const muThac0s = [20, 20, 20, 20, 20, 19, 19];

export function calcThac0(level, pcClass, str, ex_str) {
  let thac0;
  switch (pcClass) {
    case 'Fighter':

      break;
    case 'Thief':
    case 'Assassin':
      
      break;
    case 'Cleric':
    case 'Monk':
      
      break;
    case 'Magic-User':
      
      break;
    default:
  }
}