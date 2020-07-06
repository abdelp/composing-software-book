const reduced = [1, 2, 3, 4, 5, 6, 7, 8].reduce((acc, curr) => {
  curr % 2 == 0 ? acc.push(curr * 2) : 0;
  return acc;
}, []);

console.log(reduced);