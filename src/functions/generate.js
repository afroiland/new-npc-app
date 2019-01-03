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
  let pc = {level: level, class: pcClass};

  //Set name
  pc.name = getName();

  //Set attributes
  let attributes = setAttributes(pcClass);
  pc.str = attributes.str;
  if (pc.class === "Fighter" && pc.str === 18) {
    pc.ex_str = getRandom(1, 100);
  }
  pc.int = attributes.int;
  pc.dex = attributes.dex;
  pc.con = attributes.con;
  pc.wis = attributes.wis;
  pc.cha = attributes.cha;

  //Set HP
  let hp = setHP(level, pcClass);
  
  //Adjust HP and AC based on attributes

  pc.currentHP = hp;
  pc.maxHP = hp;

  //Set spells if necessary

  //Set starting gold
  let gold = setStartingGold(pcClass);
  pc.gold = gold;

  //console.log("pc: ", pc);
  return pc;
}

function getName() {
  let chars = "abcdefghijklmnopqrstuvwxyz"
  let name = "";
  let nameLength = getRandom(3, 4);
  for (let i  = 0; i < nameLength; i++) {
    name += chars.charAt(getRandom(1, 26));
  }
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
}

function setAttributes(pcClass) {
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
  }

  //attributes.str = setAttribute(mins.str);
  attributes.str = 18;
  attributes.int = setAttribute(mins.int);
  attributes.dex = setAttribute(mins.dex);
  attributes.con = setAttribute(mins.con);
  attributes.wis = setAttribute(mins.wis);
  attributes.cha = setAttribute(mins.cha);
  
  return attributes;
}

function setAttribute(minimum) {
  let score = getRandom(3, 6);
  while (score < minimum) {
    score = getRandom(3, 6);
  }
  return score;
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
