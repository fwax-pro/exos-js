function checkPalindrome(inputString) {
    return inputString === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('aabaa')); // print true
console.log(checkPalindrome('abac')); // print false
console.log(checkPalindrome('a')); // print true
console.log(checkPalindrome('az')); // print false