const { set } = require("lodash");

// over = (lens, f: a => a, store) => store
const over = (lens, f, store) => set(lens, f(view(lens, store)), store);
const uppercase = x => x.toUpperCase();

console.log(
  over(aLens, uppercase, store) // {a: "FOO", b: "bar"}
);

// if you map the identity function over a lens
// the store is unchanged

const id = x => x;
const lens = aLens;
const a = over(lens, id, store);
const b = store;

console.log(a, b);