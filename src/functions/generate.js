import { generateSpellbook, getMemdSpells } from "./spells";
import { rollDice } from "./dice";
import { getTitle } from "./titles";

export function generate(level, pcClass) {
  let pc = { level: level, class: pcClass };

  pc.name = getName();
  pc.title = getTitle(pcClass, level);

  //Set attributes
  let attributes = setAttributes(pcClass);
  pc.str = attributes.str;
  if (pc.class === "Fighter" && pc.str === 18) {
    pc.ex_str = rollDice(1, 100);
  } else {
    pc.ex_str = 0;
  }
  pc.int = attributes.int;
  pc.dex = attributes.dex;
  pc.con = attributes.con;
  pc.wis = attributes.wis;
  pc.cha = attributes.cha;

  let hp = setHP(level, pcClass);

  //Adjust HP based on con
  if (pcClass === "Fighter") {
    switch (pc.con) {
      case 15:
        hp += (level);
        break;
      case 16:
        hp += (level * 2);
        break;
      case 17:
        hp += (level * 3);
        break;
      case 18:
        hp += (level * 4);
        break;
      default:
    }
  } else {
    switch (pc.con) {
      case 15:
        hp += (level);
        break;
      case 16:
      case 17:
      case 18:
        hp += (level * 2);
        break;
      default:
    }
  }

  pc.currentHP = hp;
  pc.maxHP = hp;
  pc.ac = 10;

  //Spell stuff
  if (pcClass === "Magic-User" || pcClass === "Cleric") {
    let spellbook = {};
    if (pcClass === "Magic-User") {
      spellbook = generateSpellbook(level);
      pc.spellbookLvl_1 = spellbook.firstLvlSpells;
      if (spellbook.secondLvlSpells.length > 0) {
        pc.spellbookLvl_2 = spellbook.secondLvlSpells;
      }
      if (spellbook.thirdLvlSpells.length > 0) {
        pc.spellbookLvl_3 = spellbook.thirdLvlSpells;
      }
      if (spellbook.fourthLvlSpells.length > 0) {
        pc.spellbookLvl_4 = spellbook.fourthLvlSpells;
      }
      if (spellbook.fifthLvlSpells.length > 0) {
        pc.spellbookLvl_5 = spellbook.fifthLvlSpells;
      }
    }
    pc.memorized = getMemdSpells(spellbook, level, pcClass);
  }

  //temporary--TODO: remove this:
  if (!pc.memorized) {
    pc.memorized = "";
  }

  pc.gold = setStartingGold(pcClass);
  pc.items = "";
  pc.notes = "";
  pc.probity = 0;
  pc.affiliation = getAffiliation();

  //console.log("pc: ", pc);
  return pc;
}

function getName() {
  let chars = "abcdefghijklmnopqrstuvwxyz"
  let name = "";
  let nameLength = rollDice(3, 4);
  for (let i = 0; i < nameLength; i++) {
    name += chars.charAt(rollDice(1, 26));
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
    default:
  }

  attributes.str = setAttribute(mins.str);
  attributes.int = setAttribute(mins.int);
  attributes.dex = setAttribute(mins.dex);
  attributes.con = setAttribute(mins.con);
  attributes.wis = setAttribute(mins.wis);
  attributes.cha = setAttribute(mins.cha);

  return attributes;
}

function setAttribute(minimum) {
  let score = rollDice(3, 6);
  while (score < minimum) {
    score = rollDice(3, 6);
  }
  return score;
}

function setHP(level, pcClass) {
  let hp;
  switch (pcClass) {
    case 'Fighter':
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
    default:
  }
  return hp;
}

function calcPerLevel(level, die) {
  let hp = die;
  if (level === 1) {
    return hp;
  } else {
    for (let i = 1; i < level; i++) {
      hp = hp + rollDice(1, die);
    }
    return hp;
  }
}

function setStartingGold(pcClass) {
  let gold;
  switch (pcClass) {
    case 'Fighter':
      gold = rollDice(5, 4) * 10;
      break;
    case 'Thief':
    case 'Assassin':
      gold = rollDice(2, 6) * 10;
      break;
    case 'Cleric':
      gold = rollDice(3, 6) * 10;
      break;
    case 'Magic-User':
      gold = rollDice(2, 4) * 10;
      break;
    case 'Monk':
      gold = rollDice(5, 4);
      break;
    default:
  }
  return gold;
}

function getAffiliation() {
  const affiliations = ["None", "Oriyama Clan", "Order of the White Iris", "Business", "Church",
    "Crown", "Street", "Inmate", "Dwarf", "Burquone", "Tellerue"];
  return affiliations[rollDice(1, affiliations.length) - 1];
}
