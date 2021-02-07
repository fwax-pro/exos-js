function greet(greeting, name) {
    return greeting + ' ' + name;
}

function partial(fn) {
    var firstArgs = Array.prototype.slice.call(arguments,1);
    
    return function() {
        return fn.apply(this, Array.prototype.concat(firstArgs, Array.prototype.slice.call(arguments) ));
    }
}

function curry(fn, arity = fn.length) {
    return function() {
        var argAll = [fn].concat(Array.prototype.slice.call(arguments));

        if(arity <= arguments.length) {
            return fn.apply(this, arguments);
        }

        return curry(partial.apply(undefined, argAll), arity - arguments.length);
    }
}

function add(a, b, c, d) {
    return a + b + c + (d || 0);
}

var sayHelloTo = partial(greet, 'hello');
console.log(sayHelloTo('fred'));

var curried = curry(add);
console.log('print 1',curried(11, 11, 11, 9)); // prints 42
console.log('print 2', curried(11)(11)(11)(9)); // prints 42

curried = curry(add, 3);

console.log('print 3',curried(15, 15)(12)); // prints 42
console.log('print 4', curried(15, 15)(10, 2)); // prints 42

const add30 = curried(15, 15);
console.log('print 5', add30(12)); // prints 42
console.log('print 6', add30(5, 4)); // prints 39

console.log(typeof curried(15)(15)); // prints function

function printThis() {
console.log(this);
}
curried = curry(printThis, 1);
curried
.call('this will be ignored here (no arguments)')
.call('This is awesome', 'run') // prints This is awesome
;