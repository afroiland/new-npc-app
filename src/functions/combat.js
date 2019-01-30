import { rollDice } from "./dice";

export function fight(incomingGroupA, incomingGroupB) {
  console.log("incomingGroupA: ", incomingGroupA);
  console.log("incomingGroupB: ", incomingGroupB);

  let log = [];

  // establish vars for each NPC
  let groupA = incomingGroupA.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupA: ", groupA);

  let groupB = incomingGroupB.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupB: ", groupB);

  // initiative
  let groupAInit = rollDice(1, 6);
  let groupBInit = rollDice(1, 6);
  console.log("inits: ", groupAInit, groupBInit);

  // side one each NPC does an action
  // check if NPC is incap


  // side two each NPC does an action














  return log;
}

function getDamage(weapon) {
  let damage;
  switch (weapon) {
    case "Dart":
      damage = "1-3";
      break;
    case "Dagger":
      damage = "1-4";
      break;
    case "Hammer":
      damage = "2-5";
      break;
    case "Club":
    case "Mace":
    case "Shortsword":
    case "Staff":
      damage = "1-6";
      break;
    case "Flail":
      damage = "2-7";
      break;
    case "Axe":
    case "Longsword":
      damage = "1-8";
      break;
    case "Halberd":
    case "Two-Handed Sword":
      damage = "1-10";
      break;
    default:
  }
  return damage;
}

function getDmgBonus(str, ex_str) {
  let bonus = 0;
  if (str === 16 || str === 17) {
    bonus = 1;
  }
  if (str === 18) {
    if (ex_str === 0) {
      bonus = 2;
    } else if (1 <= ex_str && ex_str <= 75) {
      bonus = 3;
    } else if (76 <= ex_str && ex_str <= 90) {
      bonus = 4;
    } else if (91 <= ex_str && ex_str <= 99) {
      bonus = 5;
    } else if (ex_str === 100) {
      bonus = 6;
    }
  }
  return bonus;
}
