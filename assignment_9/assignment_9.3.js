function modifyArray(arr) {
  arr.push("newItem");
  arr.pop(); 
  return arr;
}
console.log(modifyArray(["a", "b", "c"]));
