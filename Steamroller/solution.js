function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArray = [];
  let flattenArray = arg => {
    if (!Array.isArray(arg)) {
      newArray.push(arg);
    } else {
      for (let i in arg) {
        flattenArray(arg[i]);
      }
    }
  }
  arr.forEach(flattenArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
