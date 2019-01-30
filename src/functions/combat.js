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
  return "1-8";
}

function getDmgBonus(str, ex_str) {
  return 1;
}
