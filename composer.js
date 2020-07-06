const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;

const h = compose(f, g);

console.log(h(20)); //=> 42