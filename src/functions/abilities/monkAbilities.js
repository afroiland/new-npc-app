import { determineThiefAbilities } from './thiefAbilities';

export function determineMonkAbilities(level, dex) {
  let monkNonThiefAbilities = [];

  monkNonThiefAbilities.push("Chance to Stun or Kill with Nonweapon Attacks", "Chance to Deflect Missiles");

  if (level >= 2) {
    monkNonThiefAbilities.push("+" + Math.floor(level / 2) + " Dmg with Weapon Attacks");
  }

  if (level >= 3) {
    monkNonThiefAbilities.push("Speak with Animals");
  }

  if (level >= 4) {
    monkNonThiefAbilities.push("Resist ESP:   " + (62 + level * 2) + "%");
  }

  if (level >= 5) {
    monkNonThiefAbilities.push("Immunity to Disease, Haste and Slow Effects");
  }

  if (level >= 6) {
    monkNonThiefAbilities.push("Feign Death for " + level * 20 + " Mins");
  }

  if (level >= 7) {
    monkNonThiefAbilities.push("Heal Self 1d4+" + (level - 6) + ", 1x/Day");
  }

  if (level >= 8) {
    monkNonThiefAbilities.push("Speak with Plants");
  }

  if (level >= 9) {
    monkNonThiefAbilities.push("Resist Charm, Suggestion, etc.:  " + (5 + level * 5) + "%");
  }

  if (level >= 10) {
    monkNonThiefAbilities.push("Resist Telepathic / Mind Blast Attacks as if Int=18");
  }

  if (level >= 11) {
    monkNonThiefAbilities.push("Immunity to All Poison");
  }

  if (level >= 12) {
    monkNonThiefAbilities.push("Immunity to Geas and Quest Spells");
  }

  if (level >= 13) {
    monkNonThiefAbilities.push("Omae Wa Mou Shindeiru");
  }

  // Monks get thief abilities excluding Read Languages and Pick Pockets
  let monkThiefAbilities = determineThiefAbilities('Thief', level, 'Human', dex).filter(e => !e.includes("Read Languages") && !e.includes("Pick Pockets"));

  let monkAbilities = monkNonThiefAbilities.concat(monkThiefAbilities);
  
  monkAbilities.push("(Full Explanation of Monk Abilities: PH pgs. 30-32)");

  return monkAbilities;
}
