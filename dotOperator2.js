// MORE SOME
// If you still have some time left, also handle getters (we will see how they work later on).
// To do this, you just need to know that Object.getOwnPropertyDescriptor will return an object not containing value but a get method instead. You will have to call it to get the attribute's value.
// You can use those tests instead to also check for getters:

function myDot(obj, attr) {
    // …
}
  
var obj = {
    a: 42,
    b: false,
    c: undefined,
    get getter() {
        return this.a - 21;
    },
    get falseGetter() {
        return false;
    },
};

console.log(myDot(obj, 'a')); // prints 42
console.log(myDot(obj, 'getter')); // prints 21
console.log(myDot(obj, 'b')); // prints false
console.log(myDot(obj, 'falseGetter')); // prints false
console.log(myDot(obj, 'c')); // prints undefined

var obj2 = Object.create(obj);
obj2.a = 12;
console.log(myDot(obj2, 'a')); // prints 12
console.log(myDot(obj2, 'getter')); // prints -9
console.log(myDot(obj2, 'b')); // prints false