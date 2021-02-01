/// Normal Way
// function add(num1 , num2 ){
//     num2 = num2 || 0;
//     num1 = num1 || 0;
//     return num1 + num2 ;
// }
// let result1 = add(15,20)
// console.log(result1)

// let result2 = add(15)
// console.log(result2)

// let result3 = add()
// console.log(result3)

// In this way we have to write two w=extra lines for setting the default value.
// But In ES6 it is built in system to provide a default value.
function addES6(num1=0 , num2=0 ){
    return num1 + num2 ;
}
result1 = addES6(15,20)
console.log(result1)

result2 = addES6(15)
console.log(result2)

result3 = addES6()
console.log(result3)

// Best Way
// function addbestWay(){
//     let sum=0;
//     for (let i=0 ; i<arguments.length ; i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }
// result1 = addbestWay(15,20)
// console.log(result1)

// result2 = addbestWay(15)
// console.log(result2)

// result3 = addbestWay()
// console.log(result3)