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

  //Set armor/AC

  //Set spells if necessary

  //Set starting gold
  let gold = setStartingGold(pcClass);

  pc.maxHP = hp;
  //pc.gold = gold;

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
      case 'fighter':
      console.log('fighter', level, pcClass);
        hp = calcPerLevel(level, 10);
        break;
      case 'thief':
        hp = calcPerLevel(level, 6);
        break;
    }
  return hp;
}

function calcPerLevel(level, die) {
  console.log("ok", level, die);
  let hp = die;
    if (level == 1) {
      return hp;
    } else {
      for (let i = 1; i < level; i++) {
        hp = hp + Math.floor(Math.random() * die + 1);
      }
      console.log("deepest: ", hp);
      return hp;
    }
}

function setStartingGold(pcClass) {
  let gold;

  return gold;
}
