let arr = [1, 2, 3, 4];

let double = arr.map((x) => {
  return x * 2;
});
console.log(double);

// ............................................................

let inputName = [{ name: "John" }, { name: "Alice" }];

let outputName = inputName.map((x) => {
  return x.name;
});
console.log(outputName);

// ............................................................

let inputCase = ["apple", "banana"]

let outputCase = inputCase.map((x)=>{
    return x.toUpperCase()
})
console.log(outputCase);

// ............................................................

