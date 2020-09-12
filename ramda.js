const getX = ([x]) => x;
const getY = ([x, y]) => y;
const getZ = ([x, y, z]) => z;

console.log(
  getZ([10, 10, 100]) // 100
);

// or

const setY = ([x, _, z]) => y => ([x, y, z]);

console.log(
  setY([10, 10, 10])(999)
);