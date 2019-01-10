import { rollDice } from "./dice";

// MU spells
const level_1_spellsMU = ["Burning Hands", "Charm Person", "Comprehend Languages", "Dancing Lights", "Detect Magic", "Enlarge",
  "Feather Fall", "Find Familiar", "Hold Portal", "Identify", "Light", "Magic Missile", "Message", "Nystul's Magc Aura",
  "Protection from Evil", "Push", "Shield", "Shocking Grasp", "Sleep", "Spider Climb", "Unseen Servant"];
const level_2_spellsMU = ["Continual Light", "Darkness 15' Radius", "Detect Evil", "Detect Invisibility", "ESP", "Forget",
  "Invisibility", "Knock", "Leomund's Trap", "Levitate", "Magic Mouth", "Mirror Image", "Pyrotechnics", "Ray of Enfeeblement",
  "Rope Trick", "Scare", "Shatter", "Stinking Cloud", "Strength", "Web", "Wizard Lock"];
const level_3_spellsMU = [];
const level_4_spellsMU = [];
const level_5_spellsMU = [];

// Cleric spells
const level_1_spellsCleric = [];
const level_2_spellsCleric = [];
const level_3_spellsCleric = [];
const level_4_spellsCleric = [];
const level_5_spellsCleric = [];

export function generateSpellbook(pcLevel) {
  let spellbook = {};
  let firstLvlSpells = ["Read Magic"];
  let secondLvlSpells = [];
  switch (pcLevel) {
    case 1:
      while (firstLvlSpells.length < 4) {
        addSpell(1);
        //console.log("firstLvlSpells: ", firstLvlSpells);
      }
    case 2:
      while (firstLvlSpells.length < 5) {
        addSpell(1);
      }
    case 3:
    while (firstLvlSpells.length < 5) {
      addSpell(1);
    }
    while (secondLvlSpells.length < 1) {
      addSpell(2);
      console.log("firstLvlSpells: ", firstLvlSpells);
      console.log("secondLvlSpells: ", secondLvlSpells);
    }
    case 4:
    //
    case 5:
    //
    case 6:
    //
    case 7:
    //
    default:
  }

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
      default:
    }
  }
}



export function getMemdSpells(level, pcClass) {

}
