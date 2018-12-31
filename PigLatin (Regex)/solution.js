function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) pigLatin = str + 'way';
  else if (str.match(regex) === null) pigLatin = str + 'ay';
  else {
    let firstVowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(firstVowelIndice) + str.substr(0, firstVowelIndice) + 'ay';
  }
  return pigLatin;
}

translatePigLatin("consonant");
// translatePigLatin("california");
// translatePigLatin("glove");
