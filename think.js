// Find the greater thirty number 
var numbers = [1,20,3,40,5,66,7,84,9,10];

function findTheThirtyNumber(numbers) {
    if(numbers.length < 3) {
        throw new Error(`the array must be of an min of 3 length`);
    }

    numbers.sort(function(a, b) {
        return b - a;
    });

    return numbers[2];
}

console.log(findTheThirtyNumber(numbers));
numbers = [0,10];
console.log(findTheThirtyNumber(numbers));