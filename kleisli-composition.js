const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

// The algebraic definition of function composition:
// (f . g)(x) = f(g(x))
const compose = (f, g) => x => f(g(x));

const x = 20;    // The value
const arr = [x]; // The container

// Some functions to compose
const g = n => n + 1;
const f = n => n * 2;

// Proof that .map() accomplishes function composition
// Chaining calls to map is function composition.
trace('map composes')([
  arr.map(g).map(f),
  arr.map(compose(f, g))
]);

// => [42], [42]