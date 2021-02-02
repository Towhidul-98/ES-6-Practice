const student = {
    firstName : "Rakib" ,
    lastName : "Shahriar" ,
    id : 23 ,
    institute : "SSAC" ,
    fathersName  : "Raashed",
    mothersName : "Rahela" ,
    siblings : 4 ,
    age : 23 ,
    address : "Tongi" ,
    job: "Student"
}

// // Accessing a property
// console.log(student.lastName);

// // accessing a property using cuyrly Braces
// console.log(student["lastName"]);

// // Accessing a property using a variable
// let thikana = "address" ;
// console.log(student[thikana]);

// // to change property 
// student.lastName = "Rankin"
// student["age"]= 25;
// student[thikana] = "Dhaka"

// console.log(student)

// // Previous codes are only for object property Review 

// const ageStudent = student.age;
// const basha =  student.address ;
// const StudentId = student.id;

// console.log(ageStudent  , basha , StudentId)

// // ES6 Has made it easy to write the code in a following manner
// const {age, address , id , ...rest1} = student;  //  {age, address , id} the element of the sub-object has to be as the same as the name of the property of the student
// // and three dot method is used to get back the rest of the elements
// console.log(age  , address , id , "Rest Items=" ,rest1)
// console.log(student)

/// Destructuring an array
// const friendsAge = [12,13,15,11,19];
// const [chotoMia , BoroMia] = friendsAge ;
// console.log(BoroMia, chotoMia)


// finding out nested element
const student1 = {
    firstName : "Rakib" ,
    lastName : "Shahriar" ,
    id : 23 ,
    institute : {
        school : "SSAC" ,
        college : "RAjuk", 
        varsity : "Ju"
    },  //  Don't forget to give the comma
    FatherName  : "Raashed",
    mothersName : "Rahela" ,
    siblings : 4 ,
    age : 23 ,
    address : "Tongi" ,
    job: "Student"
}

const {varsity} = student1.institute;
console.log(varsity)