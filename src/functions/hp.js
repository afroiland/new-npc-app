//import { rollDice } from "./dice"

export function getHP(level, pcClass) {
  let results = {
    Lv1_HP: 0, Lv2_HP: 0, Lv3_HP: 0, Lv4_HP: 4, Lv5_HP: 5, Lv6_HP: 0, Lv7_HP: 0, Lv8_HP: 0,
    Lv9_HP: 0, Lv10_HP: 0, Lv11_HP: 0, Lv12_HP: 0, Lv13_HP: 0, Lv14_HP: 0, Lv15_HP: 0,
    Lv16_HP: 0, Lv17_HP: 0, Lv18_HP: 0, Lv19_HP: 0, Lv20_HP: 0
  };

  // let conModifier = 0;
  // if (pcClass === "Fighter" || pcClass === "Paladin" || pcClass === "Ranger") {
  //   switch (con) {
  //     case 15
  //   }
  // } else {

  // }

  // switch (pcClass) {
  //   case 'Fighter':
  //   case 'Paladin':

  // }

  return results;
}

export function calcConBonus(level, pcClass, con) {
  return 0;
}