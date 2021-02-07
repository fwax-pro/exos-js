"use strict";
// Object.defineProperty
// Code a handler to simplify calls to Object.defineProperty. Here is the expected prototype:

// value mode
//myDp(obj, attr[, mode = 'wc'], value);

// getter/setter mode
//myDp(obj, attr, mode, getter[, setter]);

// Parameters
// obj: the object in which to set the attribute
// attr: the attribute's name to set
// mode: optional (defaulting to 'cw').
// Must be provided to activate getter/setter mode or if value is falsy. Any falsy mode (except '') instead of 'cw' will use the 'cw' default value.
// string that may contain the following character(s):
// #: if present, go into getter/setter mode
// e: if present, the attribute should be enumerable
// w: if present, the attribute should be writable (not allowed in getter/setter mode)
// c: if present, the attribute should be configurable
// value: the value to give to the property
// getter: getter function, pass null to define only a setter
// setter: optional setter function



// TEST
var myObject = {};

Object.defineProperty(myObject, 'property1', {
    value: 42,
    writable: false
});

// myObject.property1 = 77; // not possible

// console.log('myObject', myObject);
// console.log(myObject.property1);

function myDp(obj, attr, mode, valueOrGetter, setter) {
    // j'ai en entrée 5 arguments
    // je veux ajouter une nouvelle ou modifier une propriété d'un objet donné en argument
    // obj, l'objet qu'on souhaite set
    // attr, l'attribue qu'on souhaite ajouter

    var newValue;
    if(mode && !valueOrGetter) {
        newValue = mode;
    }
    

    return Object.defineProperty(obj, attr, {
       enumerable: en,
       writable: wr,
       value: newValue
    });
}

var obj = {};

console.log('-- a --');
myDp(obj, 'a', 42);
console.log(obj.a); // prints 42
var apd = Object.getOwnPropertyDescriptor(obj, 'a');
console.log('apd', apd);
console.log(apd.enumerable); // prints false
console.log(apd.writable); // prints true
console.log(apd.configurable); // prints true

console.log('\n-- b --');
myDp(obj, 'b', 'e', 42);
console.log(obj.b); // prints 42
var apd = Object.getOwnPropertyDescriptor(obj, 'b');
console.log(apd.enumerable); // prints true
console.log(apd.writable); // prints false
console.log(apd.configurable); // prints false

console.log('\n-- c --');
myDp(obj, 'c', null, '42');
console.log(obj.c); // prints 42
var apd = Object.getOwnPropertyDescriptor(obj, 'c');
console.log(apd.enumerable); // prints false
console.log(apd.writable); // prints true
console.log(apd.configurable); // prints true

console.log('\n-- d --');
myDp(obj, 'd', '', '42');
console.log(obj.d); // prints 42
var apd = Object.getOwnPropertyDescriptor(obj, 'd');
console.log(apd.enumerable); // prints false
console.log(apd.writable); // prints false
console.log(apd.configurable); // prints false

console.log('\n-- get --');
myDp(obj, 'get', '#ec', function() {
    return 42;
});
console.log(obj.get); // prints 42
try {
    obj.get = 21;
    console.log('should not be printed!');
}
catch (e) {
    console.log('should be there');
}

// SOME MORE
// If you have some more time, try to create a useful myDps function to set multiple properties at once instead of only one.