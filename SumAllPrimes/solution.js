function sumPrimes(num) {
  let primeNumArr = [];
  for (let i = 0; i <= num; i++) {
    primeNumArr.push(true);
  }

  primeNumArr[0] = false;
  primeNumArr[1] = false;
 
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      primeNumArr[i * j] = false;
    }
  }

  let results = [];
  for (let i = 0; i < primeNumArr.length; i++) {
    if (primeNumArr[i]) {
      results.push(i);
    }
  }

  return results.reduce((acc, current) => {
    return acc + current;
  })
}

sumPrimes(10);
