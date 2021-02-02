// class student {
//    constructor(id, name){
//        this.id=id
//        this.name = name
//        this.school = "SSAC"
//    }
// }

// const student1 = new student (12, "redwan");
// const student2 = new student (1,'rafi');

// console.log(student1)
// console.log(student2)


// console.log(student1.name)
// console.log(student2.name)
// console.log(student1.school)
// console.log(student2.id)


// Inheritance 
class Section {
    constructor(){
        this.sectionName = "Modhumati"
    }
}

class student extends Section{
   constructor(id, name){
       super();
       this.id=id
       this.name = name
       this.school = "SSAC";
    }
    sectionWithName(){    // creating a method 
        return this.sectionName + ' ' + this.name;
    }
}

const student1 = new student (12, "redwan");
const student2 = new student (1,'rafi');

// console.log(student1)
// console.log(student2)

console.log(student1.name)
console.log(student2.sectionName)
console.log(student1.school)
console.log(student2.id)
console.log(student2.sectionWithName())