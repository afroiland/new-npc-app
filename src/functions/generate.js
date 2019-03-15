import { generateSpellbook, getMemdSpells } from "./spells";
import { rollDice } from "./dice";
import { getTitle } from "./titles";
import { calcThac0 } from "./thac0";
import { getArmor } from "./armor";
import { getWeapon } from "./weapons";

const affiliations = ["None", "Oriyama Clan", "Order of the White Iris", "Business", "Church",
  "Crown", "Street", "Inmates", "Dwarves", "House Burquone", "House Tellerue"];

export function generate(level, pcClass) {
  let pc = { level: level, npcClass: pcClass };

  pc.name = getName();
  pc.title = getTitle(pcClass, level);

  //Set attributes
  let attributes = setAttributes(pcClass);
  pc.str = attributes.str;
  if (pc.npcClass === "Fighter" && pc.str === 18) {
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
  pc.thac0 = calcThac0(level, pcClass, pc.str, pc.ex_str);

  //Spell stuff
  if (pcClass === "Magic-User" || pcClass === "Cleric") {
    let spellbook = {};
    if (pcClass === "Magic-User") {
      spellbook = generateSpellbook(level);
      pc.spellbookLvl_1 = listify(spellbook.firstLvlSpells);
      if (spellbook.secondLvlSpells.length > 0) {
        pc.spellbookLvl_2 = listify(spellbook.secondLvlSpells);
      } else {
        pc.spellbookLvl_2 = "";
      }
      if (spellbook.thirdLvlSpells.length > 0) {
        pc.spellbookLvl_3 = listify(spellbook.thirdLvlSpells);
      } else {
        pc.spellbookLvl_3 = "";
      }
      if (spellbook.fourthLvlSpells.length > 0) {
        pc.spellbookLvl_4 = listify(spellbook.fourthLvlSpells);
      } else {
        pc.spellbookLvl_4 = "";
      }
      if (spellbook.fifthLvlSpells.length > 0) {
        pc.spellbookLvl_5 = listify(spellbook.fifthLvlSpells);
      } else {
        pc.spellbookLvl_5 = "";
      }
      if (spellbook.sixthLvlSpells.length > 0) {
        pc.spellbookLvl_6 = listify(spellbook.sixthLvlSpells);
      } else {
        pc.spellbookLvl_6 = "";
      }
      if (spellbook.seventhLvlSpells.length > 0) {
        pc.spellbookLvl_7 = listify(spellbook.seventhLvlSpells);
      } else {
        pc.spellbookLvl_7 = "";
      }
      if (spellbook.eighthLvlSpells.length > 0) {
        pc.spellbookLvl_8 = listify(spellbook.eighthLvlSpells);
      } else {
        pc.spellbookLvl_8 = "";
      }
      if (spellbook.ninthLvlSpells.length > 0) {
        pc.spellbookLvl_9 = listify(spellbook.ninthLvlSpells);
      } else {
        pc.spellbookLvl_9 = "";
      }
    } else {
      pc.spellbookLvl_1 = "";
      pc.spellbookLvl_2 = "";
      pc.spellbookLvl_3 = "";
      pc.spellbookLvl_4 = "";
      pc.spellbookLvl_5 = "";
      pc.spellbookLvl_6 = "";
      pc.spellbookLvl_7 = "";
      pc.spellbookLvl_8 = "";
      pc.spellbookLvl_9 = "";
    }
    pc.memorized = getMemdSpells(spellbook, level, pcClass, pc.int, pc.wis);
  } else {
    pc.memorized = "";
    pc.spellbookLvl_1 = "";
    pc.spellbookLvl_2 = "";
    pc.spellbookLvl_3 = "";
    pc.spellbookLvl_4 = "";
    pc.spellbookLvl_5 = "";
    pc.spellbookLvl_6 = "";
    pc.spellbookLvl_7 = "";
    pc.spellbookLvl_8 = "";
    pc.spellbookLvl_9 = "";
  }

  pc.race = "Human";
  pc.gold = setStartingGold(pcClass);
  pc.weapon = getWeapon(pcClass);
  pc.armor = getArmor(pcClass, pc.weapon);
  // TODO: determine ac based on armor
  pc.ac = 10;
  pc.items = "";
  pc.notes = "";
  pc.probity = 0;
  pc.affiliation = getAffiliation();

  console.log("pc: ", pc);
  return pc;
}

function listify(spellsForLevel) {
  let list = "";
  for (let i = 0, j = spellsForLevel.length; i < j; i++) {
    list += spellsForLevel[i] + ", ";
  }
  return list.slice(0, (list.length - 2));
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
    case 'Paladin':
      if (level <= 9) {
        hp = calcHpPerLevel(level, 10);
      } else {
        hp = calcHpPerLevel(9, 10) + ((level - 9) * 3);
      }
      break;
    case 'Thief':
      if (level <= 10) {
        hp = calcHpPerLevel(level, 6);
      } else {
        hp = calcHpPerLevel(10, 6) + ((level - 10) * 2);
      }
      break;
    case 'Assassin':
      if (level <= 15) {
        hp = calcHpPerLevel(level, 6);
      } else {
        hp = calcHpPerLevel(15, 6)
      }
      break;
    case 'Cleric':
      if (level <= 9) {
        hp = calcHpPerLevel(level, 8);
      } else {
        hp = calcHpPerLevel(9, 8) + ((level - 9) * 2);
      }
      break;
    case 'Magic-User':
      if (level <= 11) {
        hp = calcHpPerLevel(level, 4);
      } else {
        hp = calcHpPerLevel(11, 4) + (level - 11);
      }
      break;
    case 'Monk':
      if (level <= 17) {
        hp = calcHpPerLevel(level, 4) + 4;
      } else {
        hp = calcHpPerLevel(17, 4) + 4;
      }
      break;
    case 'Druid':
      if (level <= 14) {
        hp = calcHpPerLevel(level, 8);
      } else {
        hp = calcHpPerLevel(14, 8)
      }
      break;
    default:
  }
  return hp;
}

function calcHpPerLevel(level, die) {
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
    case'Paladin':
      gold = rollDice(5, 4) * 10;
      break;
    case 'Thief':
    case 'Assassin':
      gold = rollDice(2, 6) * 10;
      break;
    case 'Cleric':
    case 'Druid':
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
  return affiliations[rollDice(1, affiliations.length) - 1];
}
