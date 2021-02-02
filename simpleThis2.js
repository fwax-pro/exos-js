function simpleThis2(a) {
    console.log('a = ' + a);
    return this + a;
}
  
console.log(simpleThis2.call(27, 15)); // print 42
console.log(simpleThis2.apply(14, [28])); // print 42