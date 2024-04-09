
//*inject method in String Prototype which is return True length of your String 
let myString = "mustafa    ";
String.prototype.truelength = function(){
   console.log(`True Length is ${this.trim().length}`)
} 
// console.log(myString.length);
// console.log(myString.truelength());

//----------------------------------------------------------------********----------------------------------------------------------------
//*inject method in array prototype which is return reverse Array 
let arr = ["iron","thor",25,"spider","hey"];
Array.prototype.Myreverse = function(){
    let result = [];
    for (let i = this.length-1; i >= 0; i--) {
        result.push(this[i]);
    }
    console.log(result);
};
// arr.Myreverse();

//----------------------------------------------------------------********-----------------------------------------------------------------
//*inject method directly in Object prototype so everyone can used 
Object.prototype.printMe = function(){
    console.log("Hey From Object");
}
//arr.printMe(); //Work properly
//myString.printMe(); //Work properly

//-------------------------------------------------------------*********------------------------------------------------------------------
//*inheritence
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)