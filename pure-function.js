const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;
    
const trace = label => value => {
  return value;
}

const doStuff = x => {
  const afterG = g(x);
  trace('after g')(afterG);
  const afterF = f(afterG);
  trace('after f')(afterF);
  return afterF;
}

console.log(doStuff(20));

const doStuffBetter = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

console.log(doStuffBetter(20));