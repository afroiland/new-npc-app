import { rollDice } from "./dice";

const level_1_spellsMU = ["Burning Hands", "Charm Person", "Comprehend Languages", "Dancing Lights", "Detect Magic", "Enlarge",
  "Feather Fall", "Find Familiar", "Hold Portal", "Identify", "Light", "Magic Missile", "Message", "Nystul's Magic Aura",
  "Protection from Evil", "Push", "Shield", "Shocking Grasp", "Sleep", "Spider Climb", "Unseen Servant"];
const level_2_spellsMU = ["Continual Light", "Darkness 15' Radius", "Detect Evil", "Detect Invisibility", "ESP", "Forget",
  "Invisibility", "Knock", "Leomund's Trap", "Levitate", "Magic Mouth", "Mirror Image", "Pyrotechnics", "Ray of Enfeeblement",
  "Rope Trick", "Scare", "Shatter", "Stinking Cloud", "Strength", "Web", "Wizard Lock"];
const level_3_spellsMU = ["Blink", "Clairaudience", "Clairvoyance", "Dispel Magic", "Explosive Runes", "Feign Death", "Fireball",
  "Flame Arrow", "Fly", "Gust of Wind", "Haste", "Hold Person", "Infravision", "Invisibility 10' Radius", "Leomund's Tiny Hut",
  "Lightning Bolt", "Monster Summoning I", "Phantasmal Force", "Protection from Evil 10' Radius", "Slow", "Suggestion", "Tongues",
  "Water Breathing"];
const level_4_spellsMU = ["Charm Monster", "Confusion", "Dig", "Dimension Door", "Enchanted Weapon", "Extension I", "Fear",
  "Fire Charm", "Fire Shield", "Fire Trap", "Fumble", "Hallucinatory Terrain", "Ice Storm", "Massmorph",
  "Minor Globe of Invulnerability", "Monster Summoning II", "Plant Growth", "Polymorph Other", "Polymorph Self",
  "Rary's Mnemonic Enhancer", "Remove Curse", "Wall of Fire", "Wall of Ice", "Wizard Eye"];
const level_5_spellsMU = ["Airy Water", "Animal Growth", "Animate Dead", "Bigby's Interposing Hand", "Cloudkill", "Conjure Elemental",
  "Cone of Cold", "Contact Other Plane", "Distance Distortion", "Extension II", "Feeblemind", "Hold Monster", "Leomund's Secret Chest",
  "Magic Jar", "Monster Summoning III", "Mordenkainen's Faithful Hound", "Passwall", "Stone Shape", "Telekinesis", "Teleport",
  "Transmute Rock to Mud", "Wall of Force", "Wall of Iron", "Wall of Stone"];
const level_6_spellsMU = ["Anti-Magic Shell", "Bigby's Forceful Hand", "Control Weather", "Death Spell", "Disintegrate", "Enchant an Item",
  "Extension III", "Geas", "Glassee", "Glode of Invulnerability", "Guards and Wards", "Invisible Stalker", "Legend Lore",
  "Lower Water", "Monster Summoning IV", "Move Earth", "Otiluke's Freezing Sphere", "Part Water", "Project Image", "Reincarnation",
  "Repulsion", "Spiritwrack", "Stone to Flesh", "Tenser's Transformation"];
const level_7_spellsMU = ["Bigby's Grasping Hand", "Cacodemon", "Charm Plants", "Delayed Blast Fireball", "Drawmij's Instant Summons",
  "Duo-Dimension", "Limited Wish", "Mass Invisibility", "Monster Summoning V", "Mordenkainen's Sword", "Phase Door", "Power Word, Stun",
  "Reverse Gravity", "Simulacrum", "Statue", "Vanish"];
const level_8_spellsMU = ["Anitpathy/Sympathy", "Bigby's Clenched Fist", "Clone", "Glassteel", "Incendiary Cloud", "Mass Charm",
  "Maze", "Mind Blank", "Monster Summoning VI", "Otto's Irresistible Dance", "Permanency", "Polymorph any Object", "Power Word, Blind",
  "Serten's Spell Immunity", "Symbol", "Trap the Soul"];
const level_9_spellsMU = ["Astral Spell", "Bigby's Crushing Hand", "Gate", "Imprisonment", "Meteor Swarm", "Monster Summoning VII",
  "Power Word, Kill", "Prismatic Sphere", "Shape Change", "Temporal Stasis", "Time Stop", "Wish"];

const level_1_spellsCleric = ["Bless", "Command", "Create Water", "Cure Light Wounds", "Detect Evil", "Detect Magic",
  "Light", "Protection from Evil", "Purify Food and Drink", "Remove Fear", "Resist Cold", "Sanctuary"];
const level_2_spellsCleric = ["Augury", "Chant", "Detect Charm", "Find Traps", "Hold Person", "Know Alignment",
  "Resist Fire", "Silence 15' Radius", "Slow Poison", "Snake Charm", "Speak with Animals", "Spiritual Hammer"];
const level_3_spellsCleric = ["Animate Dead", "Continual Light", "Create Food and Water", "Cure Blindness", "Cure Disease",
  "Dispel Magic", "Feign Death", "Glyph of Warding", "Locate Object", "Prayer", "Remove Curse", "Speak with Dead"];
const level_4_spellsCleric = ["Cure Serious Wounds", "Detect Lie", "Divination", "Exorcise", "Lower Water", "Neutralize Poison",
  "Protection from Evil 15' Radius", "Speak with Plants", "Sticks to Snakes", "Tongues"];
const level_5_spellsCleric = ["Atonement", "Commune", "Cure Critical Wounds", "Dispel Evil", "Flame Strike", "Insect Plague",
  "Plane Shift", "Quest", "Raise Dead", "True Seeing"];
const level_6_spellsCleric = ["Aerial Servant", "Animate Object", "Blade Barrier", "Conjure Animals", "Find the Path", "Heal",
  "Part Water", "Speak with Monsters", "Stone Tell", "Word of Recall"];
const level_7_spellsCleric = ["Astral Spell", "Control Weather", "Earthquake", "Gate", "Holy/Unholy Word", "Regenerate",
  "Restoration", "Resurrection", "Symbol", "Wind Walk"];

const level_1_spellsDruid = ["Animal Friendship", "Detect Magic", "Detect Snares and Pits", "Entangle", "Faerie Fire",
  "Invisibility to Animals", "Locate Animals", "Pass without Trace", "Predict Weather", "Purify Water", "Shillelagh",
  "Speak with Animals"];
const level_2_spellsDruid = ["Barkskin", "Charm Person or Mammal", "Create Water", "Cure Light Wounds", "Feign Death", "Fire Trap",
  "Heat Metal", "Locate Plants", "Obscurement", "Produce Flame", "Trip", "Warp Wood"];
const level_3_spellsDruid = ["Call Lightning", "Cure Disease", "Hold Animal", "Neutralize Poison", "Plant Growth",
  "Protection from Fire", "Pyrotechnics", "Snare", "Stone Shape", "Summon Insects", "Tree", "Waterbreathing"];
const level_4_spellsDruid = ["Animal Summoning I", "Call Woodland Beings", "Control Temperature, 10' Radius", "Cure Serious Wounds",
  "Dispel Magic", "Hallucinatory Forest", "Hold Plant", "Plant Door", "Produce Fire", "Protection from Lightning", "Repel Insects",
  "Speak with Plants"];
const level_5_spellsDruid = ["Animal Growth", "Animal Summoing II", "Anti-Plant Shell", "Commune with Nature", "Control Winds",
  "Insect Plague", "Pass Plant", "Sticks to Snakes", "Transmute Rock to Mud", "Wall of Fire"];
const level_6_spellsDruid = ["Animal Summoning III", "Anti-Animal Shell", "Conjure Fire Elemental", "Cure Critical Wounds", "Feeblemind",
  "Fire Seeds", "Transport via Plants", "Turn Wood", "Wall of Thorns", "Weather Summoning"];
const level_7_spellsDruid = ["Animate Rock", "Chariot of Sustarre", "Confusion", "Conjure Earth Elemental", "Control Weather",
  "Creeping Doom", "Finger of Death", "Fire Storm", "Reincarnate", "Transmute Metal to Wood"];

export function generateSpellbook(pcLevel) {
  let spellbook = {};
  let firstLvlSpells = ["Read Magic"];
  let secondLvlSpells = [];
  let thirdLvlSpells = [];
  let fourthLvlSpells = [];
  let fifthLvlSpells = [];
  let numberOfLevel1Spells = 4;
  let numberOfLevel2Spells = 0;
  let numberOfLevel3Spells = 0;
  let numberOfLevel4Spells = 0;
  let numberOfLevel5Spells = 0;

  switch (pcLevel) {
    case 2:
      numberOfLevel1Spells = 5;
      break;
    case 3:
      numberOfLevel1Spells = 5;
      numberOfLevel2Spells = 1;
      break;
    case 4:
      numberOfLevel1Spells = 6;
      numberOfLevel2Spells = 2;
      break;
    case 5:
      numberOfLevel1Spells = 6;
      numberOfLevel2Spells = 2;
      numberOfLevel3Spells = 1;
      break;
    case 6:
      numberOfLevel1Spells = 7;
      numberOfLevel2Spells = 3;
      numberOfLevel3Spells = 2;
      break;
    case 7:
      numberOfLevel1Spells = 7;
      numberOfLevel2Spells = 3;
      numberOfLevel3Spells = 2;
      numberOfLevel4Spells = 1;
      break;
    case 8:
      numberOfLevel1Spells = 8;
      numberOfLevel2Spells = 4;
      numberOfLevel3Spells = 3;
      numberOfLevel4Spells = 2;
      break;
    case 9:
      numberOfLevel1Spells = 8;
      numberOfLevel2Spells = 4;
      numberOfLevel3Spells = 3;
      numberOfLevel4Spells = 2;
      numberOfLevel5Spells = 1;
      break;
    default:
  }

  while (firstLvlSpells.length < numberOfLevel1Spells) {
    addSpell(firstLvlSpells, level_1_spellsMU);
  }
  while (secondLvlSpells.length < numberOfLevel2Spells) {
    addSpell(secondLvlSpells, level_2_spellsMU);
  }
  while (thirdLvlSpells.length < numberOfLevel3Spells) {
    addSpell(thirdLvlSpells, level_3_spellsMU);
  }
  while (fourthLvlSpells.length < numberOfLevel4Spells) {
    addSpell(fourthLvlSpells, level_4_spellsMU);
  }
  while (fifthLvlSpells.length < numberOfLevel5Spells) {
    addSpell(fifthLvlSpells, level_5_spellsMU);
  }

  spellbook.firstLvlSpells = firstLvlSpells;
  spellbook.secondLvlSpells = secondLvlSpells;
  spellbook.thirdLvlSpells = thirdLvlSpells;
  spellbook.fourthLvlSpells = fourthLvlSpells;
  spellbook.fifthLvlSpells = fifthLvlSpells;

  return spellbook;

  function addSpell(sbLevel, masterListLevel) {
    let randomIndex = rollDice(1, masterListLevel.length) - 1;
    if (sbLevel.includes(masterListLevel[randomIndex])) {
      return;
    } else {
      sbLevel.push(masterListLevel[randomIndex]);
    }
  }
}

export function getMemdSpells(spellbook, level, pcClass, int, wis) {
  let memdList = [];
  let spellsByLevel = {};
  switch (level) {
    case 1:
      if (pcClass === "Druid") {
        spellsByLevel.one = 2;
      } else {
        spellsByLevel.one = 1;
        break;
      }
    case 2:
      spellsByLevel.one = 2;
      if (pcClass === "Druid") {
        spellsByLevel.two = 1;
      }
      break;
    case 3:
      spellsByLevel.one = 2;
      spellsByLevel.two = 1;
      if (pcClass === "Druid") {
        spellsByLevel.one = 3;
        spellsByLevel.two = 2;
        spellsByLevel.three = 1;
      }
      break;
    case 4:
      spellsByLevel.one = 3;
      spellsByLevel.two = 2;
      if (pcClass === "Druid") {
        spellsByLevel.one = 4;
        spellsByLevel.three = 2;
      }
      break;
    case 5:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 2;
        spellsByLevel.three = 1;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 3;
        spellsByLevel.two = 3;
        spellsByLevel.three = 1;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 3;
        spellsByLevel.three = 2;
      }
      break;
    case 6:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 2;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 3;
        spellsByLevel.two = 3;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 3;
        spellsByLevel.four = 1;
      }
      spellsByLevel.three = 2;
      break;
    case 7:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 2;
        spellsByLevel.three = 2;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 3;
        spellsByLevel.two = 3;
        spellsByLevel.three = 2;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 4;
        spellsByLevel.four = 3;
      }
      spellsByLevel.four = 1;
      break;
    case 8:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 3;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 3;
        spellsByLevel.two = 3;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 4;
      }
      spellsByLevel.three = 3;
      spellsByLevel.four = 2;
      break;
    case 9:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 3;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 4;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 5;
        spellsByLevel.two = 4;
      }
      spellsByLevel.three = 3;
      spellsByLevel.four = 2;
      spellsByLevel.five = 1;
      break;
    case 10:
      spellsByLevel.one = 4;
      spellsByLevel.two = 4;
      spellsByLevel.three = 3;
      spellsByLevel.five = 2;
      if (pcClass === "Magic-User") {
        spellsByLevel.four = 2;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.four = 3;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 5;
        spellsByLevel.four = 3;
      }
      break;
    case 11:
      spellsByLevel.four = 3;
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 4;
        spellsByLevel.three = 4;
        spellsByLevel.five = 3;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 5;
        spellsByLevel.two = 4;
        spellsByLevel.three = 4;
        spellsByLevel.five = 2;
        spellsByLevel.six = 1;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 5;
        spellsByLevel.two = 5;
        spellsByLevel.three = 3;
        spellsByLevel.five = 2;
        spellsByLevel.six = 1;
      }
      break;
    case 12:
      if (pcClass === "Magic-User") {
        spellsByLevel.one = 4;
        spellsByLevel.two = 4;
        spellsByLevel.three = 4;
        spellsByLevel.four = 4;
        spellsByLevel.five = 4;
        spellsByLevel.six = 1;
      }
      if (pcClass === "Cleric") {
        spellsByLevel.one = 6;
        spellsByLevel.two = 5;
        spellsByLevel.three = 5;
        spellsByLevel.four = 3;
        spellsByLevel.five = 2;
        spellsByLevel.six = 2;
      }
      if (pcClass === "Druid") {
        spellsByLevel.one = 5;
        spellsByLevel.two = 5;
        spellsByLevel.three = 4;
        spellsByLevel.four = 4;
        spellsByLevel.five = 3;
        spellsByLevel.six = 2;
        spellsByLevel.seven = 1;
      }
      break;
    case 13:

      break;
    case 14:

      break;
    case 15:

      break;
    case 16:

      break;
    case 17:

      break;
    case 18:

      break;
    case 19:

      break;
    case 20:

      break;
    default:
  }

  if (pcClass === "Magic-User") {
    addByLevel(spellsByLevel.one, spellbook.firstLvlSpells);
    addByLevel(spellsByLevel.two, spellbook.secondLvlSpells);
    addByLevel(spellsByLevel.three, spellbook.thirdLvlSpells);
    addByLevel(spellsByLevel.four, spellbook.fourthLvlSpells);
    addByLevel(spellsByLevel.five, spellbook.fifthLvlSpells);
  }
  if (pcClass === "Cleric") {
    addByLevel(spellsByLevel.one, level_1_spellsCleric);
    addByLevel(spellsByLevel.two, level_2_spellsCleric);
    addByLevel(spellsByLevel.three, level_3_spellsCleric);
    addByLevel(spellsByLevel.four, level_4_spellsCleric);
    addByLevel(spellsByLevel.five, level_5_spellsCleric);
  }
  if (pcClass === "Druid") {
    addByLevel(spellsByLevel.one, level_1_spellsDruid);
    addByLevel(spellsByLevel.two, level_2_spellsDruid);
    addByLevel(spellsByLevel.three, level_3_spellsDruid);
    addByLevel(spellsByLevel.four, level_4_spellsDruid);
    addByLevel(spellsByLevel.five, level_5_spellsDruid);
  }

  function addByLevel(level, listName) {
    for (let i = 0; i < level; i++) {
      memdList.push(listName[rollDice(1, listName.length) - 1]);
    }
  }

  let list = "";
  for (let i = 0, j = memdList.length; i < j; i++) {
    list += memdList[i] + ", ";
  }
  let finalList = list.slice(0, (list.length - 2));

  return finalList;
}
