const x = 20;
const f = n => n * 2;
const arr = Array.of(x);

const result = arr.map(f); // [40]

const echo = n => x => Array.from({ length: n }).fill(x);

console.log(
  [1, 2, 3].flatMap(echo(3))
);