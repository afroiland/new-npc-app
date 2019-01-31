import { rollDice } from "./dice";

export function fight(incomingGroupA, incomingGroupB) {
  let log = [];

  let groupA = incomingGroupA.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupA: ", groupA);

  let groupB = incomingGroupB.map(npc => ({"name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false}));
  console.log("groupB: ", groupB);

  let eachSideHasOnePersonStanding = true;

  while (eachSideHasOnePersonStanding) {
    doOneRound();
    let groupAHasOnePersonStanding = false;
    for (let i = 0; i < groupA.length; i++) {
      if (groupA[i].incap === false) {
        groupAHasOnePersonStanding = true;
        break;
      }
    }
    let groupBHasOnePersonStanding = false;
    for (let i = 0; i < groupB.length; i++) {
      if (groupB[i].incap === false) {
        groupBHasOnePersonStanding = true;
        break;
      }
    }
    if (!groupAHasOnePersonStanding || !groupBHasOnePersonStanding) {
      eachSideHasOnePersonStanding = false;
      console.log("log: ", log);
    }
  }

  function doOneRound() {
    let groupAInit = rollDice(1, 6);
    let groupBInit = rollDice(1, 6);
    console.log("inits: ", groupAInit, groupBInit);

    if (groupAInit > groupBInit) {
      oneSideGoes("A");
    } else if (groupAInit < groupBInit) {
      oneSideGoes("B");
    } else if (groupAInit === groupBInit) {
      console.log("simultaneous");
    }
  }

  function oneSideGoes(attackingGroupId) {
    let attackingGroup = attackingGroupId === "A" ? groupA : groupB;
    let defendingGroup = attackingGroupId === "A" ? groupB : groupA;

    // loop through each npc
    for (let i = 0; i < attackingGroup.length; i++) {
      if (attackingGroup[i].incap) {
        break;
      }
      // select target
      let target = {};
      while (Object.keys(target).length === 0) {
        let tempTarget = defendingGroup[rollDice(1, defendingGroup.length) -1];
        //console.log("tempTarget: ", tempTarget);
        if (tempTarget.incap) {
          tempTarget = {};
        } else {
          target = tempTarget;
        }
      }
      //console.log("target: ", target);

      // attack
      if (attackingGroup[i].thac0 <= rollDice(1, 20) - target.ac) {
        //attack succeeds
        let minDamage = attackingGroup[i].damage[0];
        let maxDamage = attackingGroup[i].damage[2];
        let damage = 0;
        while (minDamage > damage || damage > maxDamage) {
          damage = rollDice(1, 10);
        }
        damage += attackingGroup[i].dmgBonus;
        console.log("damage: ", damage);

        //subtract dmg from hp
        // let targetedNPC = defendingGroup.filter(obj => {return obj.name === target.name});
        let targetedNPC = defendingGroup.find(obj => obj.name === target.name);
        console.log("targetedNPC: ", targetedNPC);
        console.log("targetedNPC.hp: ", targetedNPC.hp);
        targetedNPC.hp -= damage;
        console.log("targetedNPC.hp: ", targetedNPC.hp);
        log.push(attackingGroup[i].name + " hit " + targetedNPC.name + " for " + damage + ".");

        // change incap status of target if necessary
        if (targetedNPC.hp <= 0) {
          targetedNPC.incap = true;
          log.push(targetedNPC.name + " has fallen.");
        }

        console.log("groupA: ", groupA);
        console.log("groupB: ", groupB);
      }
    }
  }






  //list survivors and their current HP


  //console.log("log: ", log);
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
