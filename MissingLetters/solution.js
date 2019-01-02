// function fearNotLetter(str) {
//   let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let missingLetter;
//   let newArr = str.split('');

//   let firstCharIndex = alphabets.indexOf(newArr[0]);
//   let lastCharIndex = alphabets.indexOf(newArr[newArr.length - 1]);

//   let newStrArr = alphabets.slice(0, lastCharIndex + 1);
//   for (let i = 0; i < newStrArr.length; i++) {

//   if (!newArr.includes(newStrArr[i]))
//     missingLetter = newStrArr[i];
//   }

//   return missingLetter;
// }

// fearNotLetter("abce");


function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++) {
    // code of current character */
    let code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration
    // hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      // if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
