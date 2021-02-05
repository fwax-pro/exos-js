function myNew(Ctor) {
    var obj = {};
    obj.__proto__ = Ctor.prototype;
    Ctor.apply(obj, Array.prototype.slice.call(arguments, 1));

    return obj;
}
  
function MyCtor(arg) {
    this.arg = arg;
}
MyCtor.prototype.sayHello = function() {
    console.log('hello');
};

var obj = myNew(MyCtor, 42);
console.log('obj', obj);
console.log(obj.arg); // should print 42
console.log(obj instanceof MyCtor); // should print true
obj.sayHello(); // should print hello