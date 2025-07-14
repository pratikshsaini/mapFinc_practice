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

let inputCase = ["hello", "world"];

let outputCase = inputCase.map((x) => {
  return x.toUpperCase();
});
console.log(outputCase);

// ............................................................

let input = ["apple", "banana"];

let output = input.map((x, index) => {
  return x + index;
});
console.log(output);

// ............................................................

let inputTemprature = [0, 20, 100];

let outputTemprature = inputTemprature.map((x) => {
  return (x * 9 / 5) + 32;
});
console.log(outputTemprature);
