function addTogether() {
  let checkIfNum = num => {
    if (typeof(num) === 'number') {
      return num;
    } else {
      return undefined;
    }
  }

  if (arguments.length > 1) {
    let firstArg = checkIfNum(arguments[0]);
    let secondArg = checkIfNum(arguments[1]);
    if (firstArg === undefined || secondArg === undefined) {
      return undefined;
    } else {
      return firstArg + secondArg;
    }
  } else {
    let firstArg = checkIfNum(arguments[0]);
    if (checkIfNum(firstArg)) {
      return function(arg2) {
        if (firstArg === undefined || checkIfNum(arg2) === undefined) {
          return undefined;
        } else {
          return firstArg + arg2;
        }
      }
    }
  }
}

addTogether(2,3);
