function sum (num1, num2){
    return num1 + num2;
}

const total = sum(5); // don't pass second parameter

console.log(total); //NaN


function add (num1 = 0, num2 = 0){
    return num1 + num2;
}

const result = add(5); // don't pass second parameter, but there are defult value in function parameters.

console.log(result); //5