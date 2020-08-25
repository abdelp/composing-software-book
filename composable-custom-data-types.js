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