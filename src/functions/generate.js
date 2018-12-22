export function generate(level, pcClass) {
  let pc = {};

  //Set attributes
  let attributes = setAttributes(pcClass);

  //Set HP
  let hp = setHP(level, pcClass);

  //Set armor/AC

  //Set spells if necessary

  //Set starting gold
  let gold = setStartingGold(pcClass);

  console.log("pc: ", pc);
  return pc;
}

function setAttributes(pcClass) {
  let attributes = {};
  // switch (pcClass) {
  //     case fighter
  // }

  return attributes;
}

function setHP(level, pcClass) {
  let hp;

  return hp;
}

function setStartingGold(pcClass) {
  let gold;

  return gold;
}
