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
// const level_5_spellsMU = [];

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
  switch (pcLevel) {
    case 1:
      while (firstLvlSpells.length < 4) {
        addSpell(1);
      }
      break;
    case 2:
      while (firstLvlSpells.length < 5) {
        addSpell(1);
      }
      break;
    case 3:
      while (firstLvlSpells.length < 5) {
        addSpell(1);
      }
      while (secondLvlSpells.length < 1) {
        addSpell(2);
      }
      break;
    case 4:
      while (firstLvlSpells.length < 6) {
        addSpell(1);
      }
      while (secondLvlSpells.length < 2) {
        addSpell(2);
      }
      break;
    case 5:
      while (firstLvlSpells.length < 6) {
        addSpell(1);
      }
      while (secondLvlSpells.length < 2) {
        addSpell(2);
      }
      while (thirdLvlSpells.length < 1) {
        addSpell(3);
      }
      break;
    case 6:
      while (firstLvlSpells.length < 7) {
        addSpell(1);
      }
      while (secondLvlSpells.length < 3) {
        addSpell(2);
      }
      while (thirdLvlSpells.length < 2) {
        addSpell(3);
      }
      break;
    case 7:
      while (firstLvlSpells.length < 7) {
        addSpell(1);
      }
      while (secondLvlSpells.length < 3) {
        addSpell(2);
      }
      while (thirdLvlSpells.length < 2) {
        addSpell(3);
      }
      while (fourthLvlSpells.length < 1) {
        addSpell(4);
      }
      break;
    default:
  }

  spellbook.firstLvlSpells = firstLvlSpells;
  spellbook.secondLvlSpells = secondLvlSpells;
  spellbook.thirdLvlSpells = thirdLvlSpells;
  spellbook.fourthLvlSpells = fourthLvlSpells;

  return spellbook;

  function addSpell(spellLevel) {
    switch(spellLevel) {
      case 1:
        let randomIndex = rollDice(1, level_1_spellsMU.length) - 1;
        if (firstLvlSpells.includes(level_1_spellsMU[randomIndex])) {
          return;
        } else {
          firstLvlSpells.push(level_1_spellsMU[randomIndex]);
        }
        break;
      case 2:
        let randomIndex2 = rollDice(1, level_2_spellsMU.length) - 1;
        if (secondLvlSpells.includes(level_2_spellsMU[randomIndex2])) {
          return;
        } else {
          secondLvlSpells.push(level_2_spellsMU[randomIndex2]);
        }
        break;
      case 3:
        let randomIndex3 = rollDice(1, level_3_spellsMU.length) - 1;
        if (thirdLvlSpells.includes(level_3_spellsMU[randomIndex3])) {
          return;
        } else {
          thirdLvlSpells.push(level_3_spellsMU[randomIndex3]);
        }
        break;
      case 4:
        let randomIndex4 = rollDice(1, level_4_spellsMU.length) - 1;
        if (fourthLvlSpells.includes(level_4_spellsMU[randomIndex4])) {
          return;
        } else {
          fourthLvlSpells.push(level_4_spellsMU[randomIndex4]);
        }
        break;
      default:
    }
  }
}

export function getMemdSpells(level, pcClass) {

}
