function sumFibs(num) {
  let fibArr = [1,1];
  let sum = 0;
  while (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] < num) {
    let newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(newNum);
  }

  let oddNums = fibArr.filter(item => item % 2 !== 0);

  let sumOfOdds = oddNums.reduce((acc, current) => {
    return acc + current;
  })

  if (num % 2 !== 0) return sumOfOdds + num;
  else return sumOfOdds;
}

sumFibs(4);
