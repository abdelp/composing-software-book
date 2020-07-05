// Shared state
const x = {
  val: 2
};

// Mutates shared state
const x1 = () => x.val += 1;

// Mutates shared state
const x2 = () => x.val *= 2;

x1();
x2();

console.log(x.val); // 6

// This example is exactly equivalent to the above, except...

const y = {
  val: 2
};

const y1 = () => y.val += 1;

const y2 = () => y.val *= 2;

// ...the order of the function calls is reversed...

y2();
y1();

// ... which changes the resulting value:
console.log(y.val); // 5