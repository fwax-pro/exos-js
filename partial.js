function partial(fn) { 
  var firstArgs = Array.prototype.slice.call(arguments,1);
  return function() {
    return fn.apply(this, Array.prototype.concat(firstArgs, Array.prototype.slice.call(arguments) ));
  }
}

function add(a, b, c, d) {
    return a + b + c + d;
}

var add5 = partial(add, 5, 4);
console.log(add5.call('this should be printed', 0, 1), add5.call('', 37, 2));

// prints "this should be printed
//
// 10 48"