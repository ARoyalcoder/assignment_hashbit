const numArray = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}
console.log(sumArray(numArray));
