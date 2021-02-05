// in operator
// Let's now recode the in operator.

// To achieve this, we will introduce another method of Object that you will understand better later on:
// Object.getOwnPropertyDescriptor(obj, attr)

// It returns undefined if the attribute is not present in the current object (even if it is in the prototype chain) and, otherwise, an object containing (among other things) a value property.

// You can (and obviously should) also use Object.getPrototypeOf(obj).

// Note: You can't use the [] operator for this exercise.

function myIn(attr, obj) {
    var attribute =  Object.getOwnPropertyDescriptor(obj, attr);
    if(attribute) {
        return true;
    }
    
    var prototype = Object.getPrototypeOf(obj);
    if(prototype === null) {
        return false;
    }

    return myIn(attr, prototype);
}

var obj = {test: 42};
console.log(myIn('test', obj)); // prints true
console.log(myIn('tset', obj)); // prints false

var obj2 = Object.create(obj);
console.log(myIn('test', obj2)); // prints true
console.log(myIn('tset', obj2)); // prints false

var obj3 = Object.create(obj2);
console.log(myIn('test', obj3)); // prints true
console.log(myIn('tset', obj3)); // prints false