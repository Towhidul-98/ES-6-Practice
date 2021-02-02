// let friendAge = [12,13,15,11];
// const cousinsAge = [32,34,33];
// const colloegueAge = [44,45,45];
// const allAges  = friendAge.concat(cousinsAge).concat([2,3]).concat(colloegueAge); // using concat method
// const allAges2 = [friendAge,cousinsAge,5,colloegueAge]
// const allAges3 = [...friendAge,...cousinsAge,5,...colloegueAge]    /// using threeDots method
// console.log(allAges)
// console.log(allAges2)
// console.log(allAges3)

// friendAge.push(cousinsAge)
// console.log(friendAge)  /// its not concatenate , rather it is just push the array as a songle element


//Three dots method  using spread operator

let a=23,b=34,c=12;
let r = [23,34,12]
// let maximum =  Math.max(a,b,c)
let maximum =  Math.max(...r)  // using three =dots we are accessing the value of the array
console.log(maximum)