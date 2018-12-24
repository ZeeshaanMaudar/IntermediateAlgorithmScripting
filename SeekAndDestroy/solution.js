// function destroyer(arr, ...args) {
//   // Remove all the values
//   let arg = [...args];
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(!arg.includes(arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr, ...args) {
  // Remove all the values
  let arg = [...args];
  return arr.filter(i => !arg.includes(i));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
