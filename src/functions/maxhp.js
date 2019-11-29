import { calcConBonus } from './conBonus';

export function calcMaxHP(hpByLvl, level, npcClass, con) {
  let result = hpByLvl.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    calcConBonus(level, npcClass, con);

  return result !== 0 ? result : "";
}
