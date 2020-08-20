const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const flying = o => {
  let isFlying = false;

  return Object.assign({}, o, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying: () => isFlying,
    land() {
      isFlying = false;
      return this;
    }
  });
};

const bird = flying({});
console.log(bird.isFlying()); // false
console.log(bird.fly().isFlying()); // true

const quacking = quack => o => Object.assign({}, o, {
  quack: () => quack
});

const quacker = quacking('Quack')(flying({}));
console.log(quacker.fly().quack()); // 'Quack!'

const createDuck = quack => pipe(
  flying,
  quacking(quack)
)({});

const duck = createDuck('Quack!');

console.log(duck.fly().quack());