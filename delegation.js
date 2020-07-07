const objs = [
  {a: 'a', b: 'ab'},
  {b: 'b'},
  {c: 'c', b: 'cb'}
];

const delegate = (a, b) => Object.assign(Object.create(a), b);

const d = objs.reduceRight(delegate, {});

console.log(
  'delegation',
  d,
  `enumerable keys: ${Object.keys(d)}`
);

// delegation { a: 'a', b: 'ab' } enumerable keys: a,b

console.log(d.b, d.c);