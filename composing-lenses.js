const R = require('ramda');
// import { compose, lensProp, view } from './node_modules/ramda/dist/ramda.js';

const lensProps = [
  'foo',
  'bar',
  1
];

const lenses = lensProps.map(lensProp);

const truth = compose(...lenses);

const obj = {
  foo: {
    bar: [false, true]
  }
};

console.log(view(truth, obj));