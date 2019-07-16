// Numbers represent Pick Pockets, Open Locks, F/RT, Move Silently, Hide in S, Hear Noise, Climb W, Read Languages, respectively
const baseNumbersLv1 = [30, 25, 20, 15, 10, 10, 85, 0];
const baseNumbersLv2 = [35, 29, 25, 21, 15, 10, 86, 0];
const baseNumbersLv3 = [40, 33, 30, 27, 20, 15, 87, 0];
const baseNumbersLv4 = [45, 37, 35, 33, 25, 15, 88, 20];
const baseNumbersLv5 = [50, 42, 40, 40, 31, 20, 90, 25];
const baseNumbersLv6 = [55, 47, 45, 47, 37, 20, 92, 30];
const baseNumbersLv7 = [60, 52, 50, 55, 43, 25, 94, 35];
const baseNumbersLv8 = [65, 57, 55, 62, 49, 25, 96, 40];
const baseNumbersLv9 = [70, 62, 60, 70, 56, 30, 98, 45];
const baseNumbersLv10 = [80, 67, 65, 78, 63, 30, 99, 50];
const baseNumbersLv11 = [90, 72, 70, 86, 70, 35, 99, 55];
const baseNumbersLv12 = [100, 77, 75, 94, 77, 35, 99, 60];
const baseNumbersLv13 = [105, 82, 80, 99, 85, 40, 99, 65];
const baseNumbersLv14 = [110, 87, 85, 99, 93, 40, 99, 70];
const baseNumbersLv15 = [115, 92, 90, 99, 99, 50, 99, 75];
const baseNumbersLv16 = [125, 97, 95, 99, 99, 50, 99, 80];
const baseNumbersLv17 = [125, 99, 99, 99, 99, 55, 99, 80];


export function determineThiefAbilities(level, race, dex, armor) {
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

  //thiefAbilities.pickPockets = ("baseNumbersLv" + level.toString())[0];

  // TODO: obviously
  let levelString = "baseNumbersLv" + level.toString();
  console.log("levelString: ", levelString);
  thiefAbilities.pickPockets = [levelString][0];

  console.log("thiefAbilities: ", thiefAbilities);
  return thiefAbilities;
}
