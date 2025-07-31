function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));
