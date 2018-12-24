function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = arr[0] + arr[1];
  for (let i = (arr[0] + 1); i < arr[1]; i++) {
    sum = sum + i
  }
  return sum;
}

sumAll([1, 4]);
