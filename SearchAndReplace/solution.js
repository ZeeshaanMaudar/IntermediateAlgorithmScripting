function myReplace(str, before, after) {
  let indexOfBefore = str.indexOf(before);
  console.log(indexOfBefore)
  if (str[indexOfBefore] === str[indexOfBefore].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  str = str.replace(before, after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
