// function smallestCommons(arr) {
//   arr.sort((a, b) => a - b);

//   let rangeArr = [];
//   for (let i = arr[0]; i <= arr[arr.length -1]; i++) {
//     rangeArr.push(i)
//   }

//   let conditionNotMet = true;
//   let SCM = 0;

//   while (conditionNotMet) {
//     SCM++;
//     for (let j = arr[0]; j <= arr[arr.length - 1]; j++) {
//       if (SCM % j !== 0) {
//         break;
//       }
//       else if (j === rangeArr[rangeArr.length - 1]){
//         conditionNotMet = false;
//       }
//     }
//   }
//    return SCM;
// }
// smallestCommons([1,13]);


// better solution for larger range
function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let [div, num] = arr;

  while (div < arr[1]) {
    if (num % div === 0) {
      div ++
    } else {
      num += arr[1];
      div = arr[0];
    }   
  }
   return num;
}
smallestCommons([1,13]);
