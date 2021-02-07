// Buggy sample solution B
for (var i = 0; i < 10; ++i) {
  (function(y) {
    setTimeout(function(){
      console.log(y)
    });
  })(i);
}

console.log(-1);