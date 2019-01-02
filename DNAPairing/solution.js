function pairElement(str) {
  let pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  let newArr = str.split('');
  
  return newArr.map(char => [char, pairs[char]]);
}

pairElement("GCG");
