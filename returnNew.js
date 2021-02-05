function myNew(Ctor) {
    var obj = {};
    obj.__proto__ = Ctor.prototype;
    var result = Ctor.apply(obj, Array.prototype.slice.call(arguments, 1));
    if(typeof result === 'object') {
        return result;
    }
    return obj;
}

function MyCtor(arg) {
  if (arg)
    return {test: 42};

  this.arg = 21;
  return 42;
}
MyCtor.prototype.sayHello = function() {
  console.log('hello');
};

var obj = myNew(MyCtor, 42);
console.log(obj instanceof MyCtor); // should print false
console.log(obj.test); // should print 42

obj = myNew(MyCtor);
console.log(obj.arg); // should print 21
console.log(obj instanceof MyCtor); // should print true
obj.sayHello(); // should print hello