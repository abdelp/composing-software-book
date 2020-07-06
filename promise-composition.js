const composeM = flatMap => (...ms) => (
  ms.reduce((f, g) => x => {
    return g(x)[flatMap](f);
  })
);

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const composePromises = composeM('then');

const label = 'Promise composition';

const g = n => Promise.resolve(n + 1);
const f = n => Promise.resolve(n * 2);

const h = composePromises(f, g);

h(20)
  .then(trace(label));
// Promise composition: 42
