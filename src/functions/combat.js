import { rollDice } from "./dice";

export function fight(incomingGroupA, incomingGroupB) {
  let log = [];

  let groupA = incomingGroupA.map(npc => ({
    "name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false
  }));
  //console.log("initial groupA: ", groupA);

  let groupB = incomingGroupB.map(npc => ({
    "name": npc.name, "ac": npc.ac, "hp": npc.currentHP, "thac0": npc.thac0,
    "damage": getDamage(npc.weapon), "dmgBonus": getDmgBonus(npc.str, npc.ex_str), "spells": npc.memorized, "incap": false
  }));
  //console.log("initial groupB: ", groupB);

  let eachSideHasOnePersonStanding = true;

  while (eachSideHasOnePersonStanding) {
    doOneRound();
    let groupAHasOnePersonStanding = false;
    for (let i = 0; i < groupA.length; i++) {
      if (groupA[i].incap === false) {
        groupAHasOnePersonStanding = true;
        break;
      }
      log.push("Group B is victorious.");
    }
    let groupBHasOnePersonStanding = false;
    for (let i = 0; i < groupB.length; i++) {
      if (groupB[i].incap === false) {
        groupBHasOnePersonStanding = true;
        break;
      }
      log.push("Group A is victorious.");
    }
    if (!groupAHasOnePersonStanding || !groupBHasOnePersonStanding) {
      eachSideHasOnePersonStanding = false;
      console.log("log: ", log);
    }
  }

  function doOneRound() {
    let groupAInit = rollDice(1, 6);
    let groupBInit = rollDice(1, 6);
    //console.log("inits: ", groupAInit, groupBInit);

    if (groupAInit > groupBInit) {
      oneSideGoes("A");
    } else if (groupAInit < groupBInit) {
      oneSideGoes("B");
    } else if (groupAInit === groupBInit) {
      //console.log("simultaneous");
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
        let tempTarget = defendingGroup[rollDice(1, defendingGroup.length) - 1];
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
        //console.log("damage: ", damage);

        log.push(attackingGroup[i].name + " hits " + target.name + " for " + damage + ".");

        //subtract dmg from hp and change incap status of target if necessary
        let groupAIndex = groupA.findIndex(obj => obj.name === target.name);
        let groupBIndex = groupB.findIndex(obj => obj.name === target.name);
        if (groupAIndex !== -1) {
          groupA[groupAIndex].hp -= damage;
          if (groupA[groupAIndex].hp <= 0) {
            groupA[groupAIndex].incap = true;
            log.push(groupA[groupAIndex].name + " has fallen.");
          }
        }
        if (groupBIndex !== -1) {
          groupB[groupBIndex].hp -= damage;
          if (groupB[groupBIndex].hp <= 0) {
            groupB[groupBIndex].incap = true;
            log.push(groupB[groupBIndex].name + " has fallen.");
          }
        }
      }
    }
    //console.log("groupA: ", groupA);
    //console.log("groupB: ", groupB);
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
