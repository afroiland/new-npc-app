import { rollDice } from "./dice";

// MU spells
const level_1_spellsMU = ["Burning Hands", "Charm Person", "Comprehend Languages", "Dancing Lights", "Detect Magic", "Enlarge",
  "Feather Fall", "Find Familiar", "Hold Portal", "Identify", "Light", "Magic Missile", "Message", "Nystul's Magc Aura",
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

// // Cleric spells
// const level_1_spellsCleric = [];
// const level_2_spellsCleric = [];
// const level_3_spellsCleric = [];
// const level_4_spellsCleric = [];
// const level_5_spellsCleric = [];

export function generateSpellbook(pcLevel) {
  let spellbook = {};
  let firstLvlSpells = ["Read Magic"];
  let secondLvlSpells = [];
  let thirdLvlSpells = [];
  let fourthLvlSpells = [];
  let fifthLvlSpells = [];

  switch (pcLevel) {
    case 1:
      while (firstLvlSpells.length < 4) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      break;
    case 2:
      while (firstLvlSpells.length < 5) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      break;
    case 3:
      while (firstLvlSpells.length < 5) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 1) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      break;
    case 4:
      while (firstLvlSpells.length < 6) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 2) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      break;
    case 5:
      while (firstLvlSpells.length < 6) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 2) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      while (thirdLvlSpells.length < 1) {
        addSpell(thirdLvlSpells, level_3_spellsMU);
      }
      break;
    case 6:
      while (firstLvlSpells.length < 7) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 3) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      while (thirdLvlSpells.length < 2) {
        addSpell(thirdLvlSpells, level_3_spellsMU);
      }
      break;
    case 7:
      while (firstLvlSpells.length < 7) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 3) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      while (thirdLvlSpells.length < 2) {
        addSpell(thirdLvlSpells, level_3_spellsMU);
      }
      while (fourthLvlSpells.length < 1) {
        addSpell(fourthLvlSpells, level_4_spellsMU);
      }
      break;
    case 8:
      while (firstLvlSpells.length < 8) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 4) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      while (thirdLvlSpells.length < 3) {
        addSpell(thirdLvlSpells, level_3_spellsMU);
      }
      while (fourthLvlSpells.length < 2) {
        addSpell(fourthLvlSpells, level_4_spellsMU);
      }
      break;
    case 9:
      while (firstLvlSpells.length < 8) {
        addSpell(firstLvlSpells, level_1_spellsMU);
      }
      while (secondLvlSpells.length < 4) {
        addSpell(secondLvlSpells, level_2_spellsMU);
      }
      while (thirdLvlSpells.length < 3) {
        addSpell(thirdLvlSpells, level_3_spellsMU);
      }
      while (fourthLvlSpells.length < 2) {
        addSpell(fourthLvlSpells, level_4_spellsMU);
      }
      while (fifthLvlSpells.length < 1) {
        addSpell(fifthLvlSpells, level_5_spellsMU);
      }
      break;
    default:
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

export function getMemdSpells(level, pcClass) {

}
