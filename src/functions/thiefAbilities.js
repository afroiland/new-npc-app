// Numbers represent Pick Pockets, Open Locks, F/RT, Move Silently, Hide in S, Hear Noise, Climb W and Read Languages, respectively
const baseNumbers = {
  Lv1: [30, 25, 20, 15, 10, 10, 85, 0],
  Lv2: [35, 29, 25, 21, 15, 10, 86, 0],
  Lv3: [40, 33, 30, 27, 20, 15, 87, 0],
  Lv4: [45, 37, 35, 33, 25, 15, 88, 20],
  Lv5: [50, 42, 40, 40, 31, 20, 90, 25],
  Lv6: [55, 47, 45, 47, 37, 20, 92, 30],
  Lv7: [60, 52, 50, 55, 43, 25, 94, 35],
  Lv8: [65, 57, 55, 62, 49, 25, 96, 40],
  Lv9: [70, 62, 60, 70, 56, 30, 98, 45],
  Lv10: [80, 67, 65, 78, 63, 30, 99, 50],
  Lv11: [90, 72, 70, 86, 70, 35, 99, 55],
  Lv12: [100, 77, 75, 94, 77, 35, 99, 60],
  Lv13: [105, 82, 80, 99, 85, 40, 99, 65],
  Lv14: [110, 87, 85, 99, 93, 40, 99, 70],
  Lv15: [115, 92, 90, 99, 99, 50, 99, 75],
  Lv16: [125, 97, 95, 99, 99, 50, 99, 80],
  Lv17: [125, 99, 99, 99, 99, 55, 99, 80]
}


export function determineThiefAbilities(pcClass, level, race, dex, armor) {
  console.log("getting hit");
  let thiefAbilities = {
    pickPockets: 0,
    openLocks: 0,
    findRemoveTraps: 0,
    moveSilently: 0,
    hideInShadows: 0,
    hearNoise: 0,
    climbWalls: 0,
    readLanguages: 0
  };

  //adjustment for Assassins
  let baseLevel;
  if (pcClass === 'Thief') {
    baseLevel = level;
  } else if (pcClass === 'Assassin') {
    baseLevel = level - 3;
  }

  thiefAbilities.pickPockets = baseNumbers["Lv" + level][0];
  thiefAbilities.openLocks = baseNumbers["Lv" + level][1];
  thiefAbilities.findRemoveTraps = baseNumbers["Lv" + level][2];
  thiefAbilities.moveSilently = baseNumbers["Lv" + level][3];
  thiefAbilities.hideInShadows = baseNumbers["Lv" + level][4];
  thiefAbilities.hearNoise = baseNumbers["Lv" + level][5];
  thiefAbilities.climbWalls = baseNumbers["Lv" + level][6];
  thiefAbilities.readLanguages = baseNumbers["Lv" + level][7];

  switch (race) {
    case 'Dwarf':
      //
      break;
    case 'Elf':
      //
      break;
    case 'Half-Elf':
      //
      break;
    case 'Halfling':
      //
      break;
    case 'Half-Orc':
      //
      break;
    default:
  }

  switch (dex) {
    case 9:
      //
      break;
    case 9:
      //
      break;
    case 10:
      //
      break;
    case 11:
      //
      break;
    case 12:
      //
      break;
    case 13:
      //
      break;
    case 14:
      //
      break;
    case 15:
      //
      break;
    case 16:
      //
      break;
    case 17:
      //
      break;
    case 18:
      //
      break;
  }

  console.log("thiefAbilities: ", thiefAbilities);
  return thiefAbilities;
}
