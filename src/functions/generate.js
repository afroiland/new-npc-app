var npc2 = {
  id: 1,
  name: "npc2",
  title: "",
  level: 0,
  class: "",
  currentHP: 0,
  maxHP: 0,
  ac: 0,
  str: 0,
  ex_str: 0,
  int: 0,
  dex: 0,
  con: 0,
  wis: 0,
  cha: 0,
  spells: {},
  items: {},
  ranking: 0,
  affiliation: "",
  notes: {}
};

export function generate(level, pcClass) {
  let pc = {};

  //Set attributes
  let attributes = setAttributes(pcClass);

  //Set HP
  let hp = setHP(level, pcClass);

  //Adjust HP and AC based on attributes

  //Set spells if necessary

  //Set starting gold
  let gold = setStartingGold(pcClass);

  pc.class = pcClass;
  pc.maxHP = hp;
  pc.gold = gold;

  console.log("pc: ", pc);
  return pc;
}

function setAttributes(pcClass) {
  let attributes = {};
  // switch (pcClass) {
  //     case fighter
  // }

  return attributes;
}

function setHP(level, pcClass) {
  let hp;
  switch (pcClass) {
    case 'Fighter':
    //console.log('fighter', level, pcClass);
      hp = calcPerLevel(level, 10);
      break;
    case 'Thief':
    case 'Assassin':
      hp = calcPerLevel(level, 6);
      break;
    case 'Cleric':
      hp = calcPerLevel(level, 8);
      break;
    case 'Magic-User':
      hp = calcPerLevel(level, 4);
      break;
    case 'Monk':
      hp = calcPerLevel(level, 4) + 4;
      break;
  }
  return hp;
}

function calcPerLevel(level, die) {
  //console.log("ok", level, die);
  let hp = die;
  if (level === 1) {
    return hp;
  } else {
    for (let i = 1; i < level; i++) {
      hp = hp + getRandom(1, die);
    }
    //console.log("deepest: ", hp);
    return hp;
  }
}

function setStartingGold(pcClass) {
  let gold;
  switch (pcClass) {
    case 'Fighter':
      gold = getRandom(5, 4) * 10;
      break;
    case 'Thief':
    case 'Assassin':
      gold = getRandom(2, 6) * 10;
      break;
    case 'Cleric':
      gold = getRandom(3, 6) * 10;
      break;
    case 'Magic-User':
      gold = getRandom(2, 4) * 10;
      break;
    case 'Monk':
      gold = getRandom(5, 4);
      break;
  }
  return gold;
}

function getRandom(number, die) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    result = result + Math.floor(Math.random() * die + 1);
  }
  return result;
}
