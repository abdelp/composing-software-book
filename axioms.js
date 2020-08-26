const assert = ({given, should, actual, expected}) => {
  if(actual.toString() !== expected.toString()) {
    throw new Error(`NOT OK: Given ${ given }, should ${ should }
    Expected: ${ expected }
    Actual: ${ actual }`);
  }

  console.log(`OK: Given ${given}, should ${ should }`);
};

{
  const given = 'a value `t(x)` composed with `t(0)`';
  const should = 'be equivalent to `t(x)`';
  const x = 20;

  const actual = t(x)(t(0));
  const expected = t(x);

  assert({
    given,
    should,
    actual,
    expected
  });
}

{
  const given = 'a value `t(x)` composed with `t(1)`';
  const should = 'be equivalent to `t(x + 1)`';
  const [a, b, c] = [1, 2, 3];
  const actual = t(x)(t(1));
  const expected = t(x + 1);

  assert({
    given,
    should,
    actual,
    expected
  });
}