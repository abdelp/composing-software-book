const Identity = value => ({
  map: fn => Identity(fn(value))
});

const trace = x => {
  console.log(x);
  return x;
}

const u = Identity(2);
console.log(u);

const r1 = u;             // Identity(2)
const r2 = u.map(x => x); // Identity(2)

r1.map(trace); // 2
r2.map(trace); // 2

const f = n => n + 1;
const g = n => n * 2;

const r3 = u.map(x => f(g(x))); // Identity(5)
const r4 = u.map(g).map(f);     // Identity(5)

r3.map(trace); // 5
r4.map(trace); // 5
