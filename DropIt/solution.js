function dropElements(arr, func) {
  // Drop them elements.
  let sizeOfArray = arr.length;
  for (let i = 0; i < sizeOfArray; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
