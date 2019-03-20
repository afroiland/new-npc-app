import { rollDice } from "./dice";

const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "qu", "r", "s", "t", "v", "w", "x", "z"];
const startingBlends = ["bl", "br", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr", "sl",
  "sn", "sw", "tr", "tw", "wh", "wr", "scr", "shr", "sph", "spl", "spr", "squ", "str", "thr"];
const endingBlends = ["ch", "sc", "sh", "sk", "sm", "sp", "st", "th", "sch"];
const vowels = ["a", "e", "i", "o", "u", "y", "aa", "ae", "ai", "ao", "au", "ea", "ee", "ei", "eo", "eu", "ia", "ie",
  "io", "iu", "oa", "oe", "oi", "oo", "ou", "ua", "ue", "ui", "uo"];

export function getName() {
  let characterArray = [];
  let patternArrayLength = rollDice(1, 5) + 2;
  let patternArray = [];

  patternArray.push(rollDice(1, 4));
  while (patternArray.length < patternArrayLength) {
    // Ensure vowels alternate with non-vowels
    if (patternArray[patternArray.length - 1] !== 4) {
      patternArray.push(4);
    } else {
      patternArray.push(rollDice(1, 3));
    }
    // Ensure name does not end in startingBlend of consonants
    if (patternArray[patternArrayLength - 1] === 2) {
      patternArray.pop();
    }
  }

  for (let i = 0; i < patternArray.length; i++) {
    switch (patternArray[i]) {
      case 1:
        characterArray.push(consonants[rollDice(1, consonants.length - 1)]);
        break;
      case 2:
        characterArray.push(startingBlends[rollDice(1, startingBlends.length - 1)]);
        break;
      case 3:
        characterArray.push(endingBlends[rollDice(1, endingBlends.length - 1)]);
        break;
      case 4:
        characterArray.push(vowels[rollDice(1, vowels.length - 1)]);
        break;
      default:
    }
  }

  let name = characterArray.join('');
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
}