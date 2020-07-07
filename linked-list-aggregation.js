const objs = [
  {a: 'a', b: 'ab'},
  {b: 'b'},
  {c: 'c', b: 'cb'}
];

console.log(objs);

const pair = (a, b) => {
  console.log("a", a);
  console.log("b", b);
  return [b, a];
};

const l = objs.reduceRight(pair, []);

console.log(
  'linked list aggregation',
  l,
  `enumerable keys: ${Object.keys(l)}`
);