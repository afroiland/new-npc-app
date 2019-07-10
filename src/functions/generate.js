import { generateSpellbook, getMemdSpells } from "./spells";
import { rollDice } from "./dice";
import { getName } from "./name";
import { getTitle } from "./titles";
import { setAttributes } from "./attributes";
import { getHP } from "./hp";
import { calcConBonus } from "./conBonus";
import { getArmor } from "./armor";
import { getWeapon } from "./weapons";

const affiliations = ["None", "Oriyama Clan", "Order of the White Iris", "Business", "Church",
  "Crown", "Street", "Inmates", "Dwarves", "House Burquone", "House Tellerue"];

export function generate(level, pcClass) {
  let pc = { level: level, npcClass: pcClass };

  // TODO: move this
  if ( pcClass === "Civilian") {
    pc.level = 0;
    //this seems sketch
  }

  pc.name = getName();
  pc.title = getTitle(pcClass, level);

  //Set attributes
  // let attributes = setAttributes(pcClass, 'traditional');
  let attributes = setAttributes(pcClass, 'variant');
  pc.str = attributes.str;
  if ((pc.npcClass === "Fighter" || pc.npcClass === "Paladin" || pc.npcClass === "Ranger") && pc.str === 18) {
    pc.ex_str = rollDice(1, 100);
  } else {
    pc.ex_str = 0;
  }
  pc.int = attributes.int;
  pc.dex = attributes.dex;
  pc.con = attributes.con;
  pc.wis = attributes.wis;
  pc.cha = attributes.cha;
 
  let hp = getHP(level, pcClass, pc.con);

  let currentHP = 0;
  for (let i = 1; i <= 20; i++) {
    let levelString = "Lv" + i + "_HP";
    pc[levelString] = hp[levelString];
    currentHP += hp[levelString];
  }

  // TODO: This can be removed if/when a "damage" value is used
  pc.currentHP = currentHP + calcConBonus(level, pcClass, pc.con);

  //Spell stuff
  if (pcClass === "Magic-User" || pcClass === "Cleric" || pcClass === "Druid" || pcClass === "Paladin" || pcClass === "Ranger") {
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
  pc.age = rollDice(1, 14) + 17;
  pc.gold = setStartingGold(pcClass);
  pc.weapon = getWeapon(pcClass);
  pc.armor = getArmor(pcClass, pc.weapon);
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

function setStartingGold(pcClass) {
  let gold;
  switch (pcClass) {
    case 'Fighter':
    case 'Paladin':
    case 'Ranger':
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
    case 'Civilian':
      gold = 1;
      break;
    default:
  }
  return gold;
}

function getAffiliation() {
  return affiliations[rollDice(1, affiliations.length) - 1];
}
