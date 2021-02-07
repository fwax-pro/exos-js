// Buggy sample solution A
for (var i = 0; i < 10; ++i) {
  display(i);
}

function display(y) {
  setTimeout(function(){console.log(y)});
}

console.log(-1);