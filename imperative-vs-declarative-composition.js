// Function composition OR
// import pipe from 'lodash/fp/flow';

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// Functions to compose
const g = n => n + 1;
const f = n => n * 2;

// Imperative composition
const doStuffBadly = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};

const doStuffBetter = pipe(g, f);

console.log(
  doStuffBadly(20), // 42
  doStuffBetter(20) // 42
);
