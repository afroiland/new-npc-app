export function calcConBonus(level, pcClass, con) {
  let conBonus = 0;

  if (pcClass === "Fighter" || pcClass === "Paladin" || pcClass === "Ranger") {
    switch (parseInt(con)) {
      case 15:
        conBonus += level;
        break;
      case 16:
        conBonus += (level * 2);
        break;
      case 17:
        conBonus += (level * 3);
        break;
      case 18:
        conBonus += (level * 4);
        break;
      default:
    }
  } else if (pcClass === "Civilian") {
    switch (parseInt(con)) {
      case 15:
        conBonus += 1;
        break;
      case 16:
      case 17:
      case 18:
        conBonus += 2;
        break;
      default:
    }
  } else {
    switch (parseInt(con)) {
      case 15:
        conBonus += level;
        break;
      case 16:
      case 17:
      case 18:
        conBonus += (level * 2);
        break;
      default:
    }
  }

  return conBonus;
}
