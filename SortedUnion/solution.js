function uniteUnique(...args) {
  let arrays = [...args];
  let mergedArray = [].concat(...arrays);
  let uniqueArray = [];
  for (let i in mergedArray) {
    if (!uniqueArray.includes(mergedArray[i])) uniqueArray.push(mergedArray[i]);
  }
  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
