// Le problème: Parmis 10 nombres, trouvers le 3eme plus grand nombre
var numbers = [1,2,3,4,5,6,7,8,9,10];

function findTheThirtyNumber(numbers, first, second) {
    var number = numbers.shift();
    
    if(!first || number > first) {
        first = number;
    } else if(!second || number > second) {
        second = number;
    }

    console.log(first, second);
    if(numbers.length !== 0) {
        findTheThirtyNumber(numbers, first, second);
    }
}

console.log(findTheThirtyNumber(numbers));

// 1 Comprendre le problème
// Le problème est de trouver parmis 10 nombres, le 3eme nombre le plus grand

// 2 Le plan
// Parmis le tableau entrès, je dois réussir à retourner le 3eme nombre le plus grand

// 3 Diviser
// Je shift et séléctionne le premier nombre du tableau
// if le nombre est plus grand que firstNumber, alors je l'assigne
// sinon if le nombre est plus grand que le twoNumber, alors je l'assigne
// if le nombre est plus grand que le thrityNumber, alors je l'assigne

// 4 Coincer ? 