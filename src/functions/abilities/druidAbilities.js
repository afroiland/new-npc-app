export function determineDruidAbilities(level) {
  let druidAbilities = ["Identify Plants, Animals and Pure Water", "Pass w/o Trace"];

  if (level >= 7) {
    druidAbilities.push("Immunity to Woodland-Based Charm", "Shape Change 3x/Day");
  }

  return druidAbilities;
}
