const fighterTitles = ["Person-at-Arms", "Warrior", "Swordsperson", "Hero", "Swashbuckler", "Myrmidon", "Champion", "Superhero"];
const muTitles = ["Prestidigitator", "Evoker", "Conjurer", "Theurgist", "Thaumaturgist", "Magician", "Enchanter", "Warlock",
  "Sorcerer", "Necromancer"];
const clericTitles = ["Acolyte", "Adept", "Priest", "Curate", "???", "Canon", "Lama", "Patriarch/Matriarch"];
const thiefTitles = ["Rogue", "Footpad", "Cutpurse", "Robber", "Burglar", "Filcher", "Sharper", "Magsman", "Thief"];
const monkTitles = ["Novice", "Initiate", "Brother", "Disciple", "Immaculate", "Master", "Superior Master", "Master of Dragons",
  "Master of the North Wind", "Master of the West Wind", "Master of the South Wind", "Master of the East Wind", "Master of Winter",
  "Master of Autumn", "Master of Summer", "Master of Spring"];
const assassinTitles = ["Bravo", "Rutterkin", "Waghalter", "Murderer", "Thug", "Killer", "Cutthroat", "Executioner", "Assassin",
  "Expert Assassin", "Senior Assassin", "Chief Assassin", "Prime Assassin", "Guildmaster Assassin"];
const druidTitles = ["Aspirant", "Ovate", "Initiate of the 1st Circle", "Initiate of the 2nd Circle", "Initiate of the 3rd Circle",
  "Initiate of the 4th Circle", "Initiate of the 5th Circle", "Initiate of the 6th Circle", "Initiate of the 7th Circle",
  "Initiate of the 8th Circle", "Initiate of the 9th Circle", "Druid", "ArchDruid"];
const paladinTitles = ["Gallant", "Keeper", "Protector", "Defender", "Warder", "Guardian", "Chevalier", "Justicar"];
const rangerTitles = ["Runner", "Strider", "Scout", "Courser", "Tracker", "Guide", "Pathfinder", "Ranger", "Ranger Knight"];

export function getTitle(pcClass, level) {
  let title = "";
  switch (pcClass) {
    case "Fighter":
      if (level >= 9) {
        title = "Lord";
      } else {
        title = fighterTitles[level - 1];
      }
      break;
    case "Magic-User":
      if (level >= 11) {
        title = "Wizard";
      } else {
        title = muTitles[level - 1];
      }
      break;
    case "Cleric":
      if (level >= 9) {
        title = "High Priest";
      } else {
        title = clericTitles[level - 1];
      }
      break;
    case "Thief":
      if (level >= 10) {
        title = "Master Thief";
      } else {
        title = thiefTitles[level - 1];
      }
      break;
    case "Monk":
      if (level >= 17) {
        title = "Grand Master of Flowers";
      } else {
        title = monkTitles[level - 1];
      }
      break;
    case "Assassin":
      if (level >= 15) {
        title = "Grandfather/mother of Assassins";
      } else {
        title = assassinTitles[level - 1];
      }
      break;
    case "Druid":
      if (level >= 14) {
        title = "The Great Druid";
      } else {
        title = druidTitles[level - 1];
      }
      break;
    case "Paladin":
      if (level >= 9) {
        title = "Paladin";
      } else {
        title = paladinTitles[level - 1];
      }
      break;
    case "Ranger":
      if (level >= 10) {
        title = "Ranger Lord";
      } else {
        title = rangerTitles[level - 1];
      }
      break;
    default:
  }
  return title;
}