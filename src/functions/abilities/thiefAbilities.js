// Numbers in arrays represent (respectively): Pick Pockets, Open Locks, F/RT, Move Silently, Hide in S, Hear Noise, Climb W, Read Lang
const baseNumbers = {
  Lv1Assassin: [20, 17, 10, 3, 0, 5, 83, 0],
  Lv2Assassin: [25, 21, 15, 9, 5, 5, 84, 0],
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

export function determineThiefAbilities(pcClass, level, race, dex) {
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

  // Adjust base level for assassins
  let baseLevel;
  if (pcClass === 'Thief') {
    baseLevel = level;
  } else if (pcClass === 'Assassin' && level > 2) {
    baseLevel = level - 2;
  } else if (pcClass === 'Assassin' && level <= 2) {
    baseLevel = level + 'Assassin';
  }

  // Set base levels
  // TODO: This will bug for thieves level 18+ (and assassins at 20+)
  thiefAbilities.pickPockets = baseNumbers['Lv' + baseLevel][0];
  thiefAbilities.openLocks = baseNumbers['Lv' + baseLevel][1];
  thiefAbilities.findRemoveTraps = baseNumbers['Lv' + baseLevel][2];
  thiefAbilities.moveSilently = baseNumbers['Lv' + baseLevel][3];
  thiefAbilities.hideInShadows = baseNumbers['Lv' + baseLevel][4];
  thiefAbilities.hearNoise = baseNumbers['Lv' + baseLevel][5];
  thiefAbilities.climbWalls = baseNumbers['Lv' + baseLevel][6];
  thiefAbilities.readLanguages = baseNumbers['Lv' + baseLevel][7];

  // Apply bonuses and penalties for race
  switch (race) {
    case 'Dwarf':
      thiefAbilities.openLocks += 10;
      thiefAbilities.findRemoveTraps += 15;
      thiefAbilities.climbWalls -= 10;
      thiefAbilities.readLanguages -= 5;
      break;
    case 'Elf':
      thiefAbilities.pickPockets += 5;
      thiefAbilities.openLocks -= 5;
      thiefAbilities.moveSilently += 5;
      thiefAbilities.hideInShadows += 10;
      thiefAbilities.hearNoise += 5;
      break;
    case 'Half-Elf':
      thiefAbilities.pickPockets += 10;
      thiefAbilities.hideInShadows += 5;
      break;
    case 'Halfling':
      thiefAbilities.pickPockets += 5;
      thiefAbilities.openLocks += 5;
      thiefAbilities.findRemoveTraps += 5;
      thiefAbilities.moveSilently += 10;
      thiefAbilities.hideInShadows += 15;
      thiefAbilities.hearNoise += 5;
      thiefAbilities.climbWalls -= 15;
      thiefAbilities.readLanguages -= 5;
      break;
    case 'Half-Orc':
      thiefAbilities.pickPockets -= 5;
      thiefAbilities.openLocks += 5;
      thiefAbilities.findRemoveTraps += 5;
      thiefAbilities.hearNoise += 5;
      thiefAbilities.climbWalls += 5;
      thiefAbilities.readLanguages -= 10;
      break;
    default:
  }

  // Apply bonuses and penalties for dexterity
  switch (dex.toString()) {
    case '9':
        thiefAbilities.pickPockets -= 15;
        thiefAbilities.openLocks -= 10;
        thiefAbilities.findRemoveTraps -= 10;
        thiefAbilities.moveSilently -= 20;
        thiefAbilities.hideInShadows -= 10;
      break;
    case '10':
        thiefAbilities.pickPockets -= 10;
        thiefAbilities.openLocks -= 5;
        thiefAbilities.findRemoveTraps -= 10;
        thiefAbilities.moveSilently -= 15;
        thiefAbilities.hideInShadows -= 5;
      break;
    case '11':
        thiefAbilities.pickPockets -= 5;
        thiefAbilities.findRemoveTraps -= 5;
        thiefAbilities.moveSilently -= 10;
      break;
    case '12':
        thiefAbilities.moveSilently -= 5;
      break;
    case '16':
        thiefAbilities.openLocks += 5;
      break;
    case '17':
        thiefAbilities.pickPockets += 5;
        thiefAbilities.openLocks += 10;
        thiefAbilities.moveSilently += 5;
        thiefAbilities.hideInShadows += 5;
      break;
    case '18':
        thiefAbilities.pickPockets += 10;
        thiefAbilities.openLocks += 15;
        thiefAbilities.findRemoveTraps += 5;
        thiefAbilities.moveSilently += 10;
        thiefAbilities.hideInShadows += 10;
      break;
    default:
  }

  //console.log("thiefAbilities: ", thiefAbilities);
  return thiefAbilities;
}
