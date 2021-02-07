// Let's recode the . operator.

// To recode . we obviously can't use . (or its sibling []). That would defeat the point right?

// It should not be hard to recode the . operator since it is very similar to the in operator.

function myDot(obj, attr) {
    var attribute =  Object.getOwnPropertyDescriptor(obj, attr);
    
    if (attribute) {
        return attribute.value;
    }
    
    var prototype = Object.getPrototypeOf(obj);
    if (prototype === null) {
        return undefined;
    }

    return myDot(prototype, attr);
}

var obj = {a: 42};
console.log(myDot(obj, 'a')); // prints 42

var obj2 = Object.create(obj);
console.log(myDot(obj2, 'a')); // prints 42
console.log(myDot(obj2, 'b')); // prints undefined