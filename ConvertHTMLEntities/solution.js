function convertHTML(str) {
  // &colon;&rpar;
  let match = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  let newArr = str.split('');
  return newArr.map(char => match[char] || char).join('');
}

convertHTML("Dolce & Gabbana");
