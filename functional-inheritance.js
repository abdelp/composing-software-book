// not to do
function base(spec) {
  var that = {};
  that.name = spec.name;
  return that;
}

function child(spec) {
  var that = base(spec);
  that.sayHello = function() {
    return 'Hello, I\'m ' + that.name;
  };
  return that;
}

var result = child({name: 'a functional object'});
console.log(result.sayHello());