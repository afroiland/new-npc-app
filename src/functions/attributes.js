import { rollDice } from "./dice"

export function setAttributes(pcClass, method) {
  console.log("method: ", method);
  let attributes = {};

  // Set minimums for class
  let mins = {};
  switch (pcClass) {
    case 'Fighter':
      mins.str = 9;
      break;
    case 'Thief':
    case 'Assassin':
      mins.dex = 9;
      break;
    case 'Cleric':
      mins.wis = 9;
      break;
    case 'Magic-User':
      mins.int = 9;
      break;
    case 'Monk':
      mins.str = 15;
      mins.wis = 15;
      mins.dex = 15;
      mins.con = 11;
      break;
    case 'Druid':
      mins.wis = 12;
      mins.cha = 15;
      break;
    case 'Paladin':
      mins.str = 12;
      mins.int = 9;
      mins.wis = 13;
      mins.con = 9;
      mins.cha = 17;
      break;
    case 'Ranger':
      mins.str = 13;
      mins.int = 13;
      mins.wis = 14;
      mins.con = 14;
      break;
    default:
  }

  attributes.str = setAttribute(mins.str, method);
  attributes.int = setAttribute(mins.int, method);
  attributes.dex = setAttribute(mins.dex, method);
  attributes.con = setAttribute(mins.con, method);
  attributes.wis = setAttribute(mins.wis, method);
  attributes.cha = setAttribute(mins.cha, method);

  return attributes;
}

function setAttribute(minimum, method) {
  let score;
  if (method === "traditional") {
    score = rollDice(3, 6);
    while (score < minimum) {
      score = rollDice(3, 6);
    }
  }
  if (method === "variant") {
    score = Math.floor(Math.random() * 15 + 4);
    while (score < minimum) {
      score = Math.floor(Math.random() *  15 + 4);
    }
  }
  return score;
}
