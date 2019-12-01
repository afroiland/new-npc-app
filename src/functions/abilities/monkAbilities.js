import { determineThiefAbilities } from './thiefAbilities';

export function determineMonkAbilities(level, dex) {
  //determine thiefAbilities (excluding pick pockets and read languages)
  let monkAbilities = determineThiefAbilities('Thief', level, 'Human', dex);
  console.log("monkAbilities: ", monkAbilities);

  let filteredMonkAbilities = monkAbilities.filter(e => !e.includes("Read Languages") && !e.includes("Pick Pockets"));
  console.log("filteredMonkAbilities: ", filteredMonkAbilities);

  

  return filteredMonkAbilities;
}
