function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArray = [];
  let flattenArray = item => {
    if (!Array.isArray(item)) {
      newArray.push(item);
    } else {
      for (let i in item) {
        flattenArray(item[i]);
      }
    }
  }
  arr.forEach(flattenArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
