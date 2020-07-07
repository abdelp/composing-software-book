const assign = (a, c) => ({...a, ...c});

const composed = [{a: 'a'}, {b: 'b'}].reduce(assign, {});

console.log(composed);