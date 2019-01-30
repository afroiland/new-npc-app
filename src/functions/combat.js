import { rollDice } from "./dice";

export function fight(groupA, groupB) {
  console.log("groupA: ", groupA);
  console.log("groupB: ", groupB);

  let log = [];

  // establish vars for each NPC
  let cgrpA = groupA.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("cgrpA: ", cgrpA);

  let cgrpB = groupB.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("cgrpB: ", cgrpB);

  // initiative



  // side one each NPC does an action
  // check if NPC is incap


  // side two each NPC does an action















}

function getDamage(weapon) {
  return "1-8";
}

function getDmgBonus(str, ex_str) {
  return 1;
}
