// const x = 20;
// const f = n => n * 2;
// const arr = Array.of(x);

// const result = arr.map(f); // [40]

// const echo = n => x => Array.from({ length: n }).fill(x);

// console.log(
//   [1, 2, 3].flatMap(echo(3))
// );

// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const composeM = flatMap => (...ms) => (
  ms.reduce((f, g) => x => g(x)[flatMap](f))
);

const composePromises = composeM('then');

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

// {
const label = 'API call composition';

const getUserById = id => id === 3 ?
  Promise.resolve({ name: 'Kurt', role: 'Author' }) :
  undefined
;

const hasPermission = ({ role }) => (
  Promise.resolve(role === 'Author')
);

const authUser = composePromises(hasPermission, getUserById);

authUser(3).then(trace(label));

// }

const Monad = value => ({
  flatMap: f => f(value),
  map(f) {
    return this.flatMap(a => Monad.of(f(a)));
  }
});

Monad.of = x => Monad(x);

Monad(21).map(x => x * 2).map(x => console.log(x));













