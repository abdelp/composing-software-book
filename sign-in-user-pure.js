const signInUser = user => user.isSignedIn = true;

const foo = {
  name: 'Foo',
  isSignedIn: false
};

console.log(
  signInUser(foo), // true
  foo              // { name: "Foo", isSignedIn: true }
);

// vs...

// Pure
const signInUser = user => ({ ...user, isSignedIn: true });

const foo = {
  name: 'Foo',
  isSignedIn: false
};

// Foo is not mutated

console.log(
  signInUser(foo), // { name: "Foo", isSignedIn: true}
  foo              // { name: "Foo", isSignedIn: false}
);