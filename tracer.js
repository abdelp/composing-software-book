const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
}

const g = n => n + 1;
const f = n => n * 2;

/*
Note: function application order is bottom-to-top:
*/

const h = compose(
  trace('after f'),
  f,
  trace('after g'),
  g
);

console.log(h);
/*
after g: 21
after f: 42
*/

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const g = n => n + 1;
const f = n => n * 2;

/*
Now the function application order runs top-to-bottom:
*/

const h = pipe(
  g,
  trace('after g'),
  f,
  trace('after f'),
);