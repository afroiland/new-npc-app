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
  switch (pcLevel) {
    case 1:
      while (firstLvlSpells.length < 4) {
        addSpell(1);
        console.log("firstLvlSpells: ", firstLvlSpells);
      }
    case 2:
    //
    case 3:
    //
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
    }
  }
}



export function getSpells(level, pcClass) {

}
