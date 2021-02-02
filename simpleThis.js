function simpleThis() {
    return this + 12;
}
  
console.log(simpleThis.call(30)); // print 42
console.log(simpleThis.apply(30)); // print 42