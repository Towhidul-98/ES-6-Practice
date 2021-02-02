let result = add(4,4);
console.log(result)

/// add function in  a previous manner
function add(num1 , num2 ){
    return num1+num2;
}

result = add(3,4);
console.log(result)

// the previous method is called function declaration
/// the previous methods doesn't show any error if you call them before defining



// result = x(10,2) // pre-calling before defining
// console.log(result)
// the previous two lines is not working

let x = function(num1 ,num2){
    return num1+num2;
}
result = x(5,4);
console.log(result)

// this process is called function expression . also known as anonymous function


let addNumbers = new Function("a", "b", "return a + b");
result = addNumbers(4, 3);
console.log(result);
// this function calling is done using new constructor

(function (a,b){
    console.log(a+b) ;
})(3,7);
// self invoking function


// arrow function 
let sum = (num1 ,  num2) => num1+num2;
result = sum(10,20);
console.log(result);
// multiple arguments in arrow function

let double =  num1 => num1*2;
console.log(double(2))
// arrow function using one argument

let get5 =  () => 5;
console.log(get5());
// arrow function using no argument

let doMath = (num1 , num2) => {
    const sum = num1  + num2 ;
    const diff = num1 - num2 ;
    const result= sum * diff;
    return result;
}
console.log(doMath(4,2));

// only in this case of arrow function , you have to use return

