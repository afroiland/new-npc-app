import { rollDice } from "./dice";

export function fight(incomingGroupA, incomingGroupB) {
  let log = [];

  let groupA = incomingGroupA.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupA: ", groupA);

  let groupB = incomingGroupB.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupB: ", groupB);

  doOneRound();

  function doOneRound() {
    let groupAInit = rollDice(1, 6);
    let groupBInit = rollDice(1, 6);
    console.log("inits: ", groupAInit, groupBInit);

    if (groupAInit > groupBInit) {
      oneSideGoes(groupA, groupB);
      oneSideGoes(groupB, groupA);
    } else if (groupAInit < groupBInit) {
      oneSideGoes(groupB, groupA);
      oneSideGoes(groupA, groupB);
    } else if (groupAInit === groupBInit) {
      console.log("simultaneous");
    }
  }

  function oneSideGoes(attackingGroup, defendingGroup) {
    // loop through each npc
    for (let i = 0; i < attackingGroup.length; i++) {
      if (attackingGroup[i].incap) {
        break;
      }
      // select target
      let target = {};
      while (Object.keys(target).length === 0) {
        let tempTarget = defendingGroup[rollDice(1, defendingGroup.length) -1];
        console.log("tempTarget: ", tempTarget);
        if (tempTarget.incap) {
          tempTarget = {};
        } else {
          target = tempTarget;
        }
      }
      console.log("target: ", target);
      // attack

      // dmg

      // change incap status of target if necessary
    }
  }


  // side two each NPC does an action














  return log;
}

function getDamage(weapon) {
  let damage;
  switch (weapon) {
    case "Darts":
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
