const x = {
  val: 2
};

const inc = x => ({...x, val: x.val + 1});
const double = x => ({...x, val: x.val * 2});

console.log(inc(double(x)).val); // 5

const y = {
  val: 2
};

/*
 Because the functions don't mutate, you can call these functions as many times as you want, in any order, without changing the result of other function calls.
*/

// These calls do nothing:
inc(y);
double(y);

console.log(inc(double(y)).val); // 5