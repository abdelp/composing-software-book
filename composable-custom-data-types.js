const t = value => {
  const fn = () => value;

  fn.toString = () => `t(${ value })`;

  return fn;
};

const someValue = t(2);

console.log(
  someValue.toString() // "t(2)"
);

console.log(
  t(3)(t(5)).toString() // t(8)
);

// final version

const t = value => {
  const add = n => t(value + n);

  return Object.assign(add, {
    toString: () => `t(${ value })`,
    valueOf: () => value
  });
};

////////////

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const add = (...fns) => pipe(...fns)(t(0));

const sum = add(
  t(2),
  t(4),
  t(-1)
);

console.log(sum.toString()); // t(5)