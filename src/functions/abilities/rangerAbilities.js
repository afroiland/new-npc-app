export function determineRangerAbilities(level) {
  let rangerAbilities = ["+" + level + " Dmg Bonus vs Giant-Class Creatures", "Being Good at Surprise", "Tracking"];

  if (level >= 10) {
    rangerAbilities.push("Employ All Magic Items Related to ESP, Telepathy, etc.", "Animal Followers");
  }

  return rangerAbilities;
}