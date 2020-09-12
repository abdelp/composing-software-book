// Pure functions to view and set which can be used with any lens:
const view = (lens, store) => lens.view(store);
const set = (lens, value, store) => lens.set(value, store);

// A function which takes a prop, and returns naive
// lens accessors for that prop.
const lensProp = prop => ({
  view: store => store[prop],
  // This is very naive, because it only works for objects:
  set: (value, store) => ({
    ...store,
    [prop]: value
  })
});

// An example store object. An object you access with a lens
// is often called the "store" object:
const fooStore = {
  a: 'foo',
  b: 'bar'
};

// const aLens = lensProp('a');
// console.log(aLens);
// const bLens = lensProp('b');

// // Dstructure the `a` and `b` props from the lens using
// // the `view()` function
// const a = view(aLens, fooStore);
// const b = view(bLens, fooStore);

// // console.log(a, b); // 'foo' 'bar'

// // Set a value into our store using the `aLens`:
// const bazStore = set(aLens, 'baz', fooStore);

// console.log(bazStore);

// console.log(view(aLens, bazStore)); // baz



////////////////

const store = fooStore;

// const lens = lensProp('a');
// const value = 'baz';

// const a = value;
// const b = view(lens, set(lens, value, store));

console.log(a, b);

// set(lens, b, set(lens, a, store)) = set(lens, b, store)
// If you set a lens value to `a` and then immediately set the lens value to `b`,
// it's the same as if you'd just set the value to `b`

const lens = lensProp('a');

const a = 'bar';
const b = 'baz';

const r1 = set(lens, b, set(lens, a, store));
const r2 = set(lens, b, store);

console.log(r1, r2); // {a: "baz", b: "bar"} {a: "baz", b: "bar"}

// `set(lens, view(lens, store), store)` = `store`
// If you get the lens value from the store, and the immediately set that value
// back into the store, the value is unchanged.
const lens = lensProp('a');

const r1 = set(lens, view(lens, store), store);
const r2 = store;

console.log(r1, r2); // {a: "foo", b: "bar"} {a: "foo", b: "bar"}