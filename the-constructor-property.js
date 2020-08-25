// Return an empty instance of any object type?

const empty = ({ constructor } = {}) => constructor ?
  new constructor() :
  undefined
;

const foo = [10];

console.log(
  empty(foo) // []
);

// Return an empty instance of any type?

const empty2 = ({ constructor } = {}) => constructor ?
  new constructor() :
  undefined
;

const foo2 = Promise.resolve(10);

try {
  console.log(
    empty2(foo2) // [TypeError: Promise resolver undefined is
              // not a function]
  );
  } catch(e) {
    console.log(e);
  }

////

const empty3 = ({ constructor } = {}) => constructor.of ?
  constructor.of() :
  undefined
;

const foo3 = [23];

console.log(
  empty3(foo3) // [TypeError: Promise resolver undefined is
             // not a function]
);

/////////////

const createUser = ({
  userName = 'Anonymous',
  avatar = 'anon.png'
} = {}) => ({
  userName,
  avatar,
  constructor: createUser
});

createUser.of = createUser

// testing .of and .constructor
const empty4 = ({ constructor } = {}) => constructor.of ?
  constructor.of() :
  undefined
;

const foo4 = createUser({ userName: 'Empty', avatar: 'me.png' });

console.log(
  empty4(foo4), // { avatar: 'anon.png}, userName: 'Anonymous' }
  foo4.constructor === createUser.of, // true
  createUser.of === createUser  // true
);