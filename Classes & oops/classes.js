//* Creatibg User class And Some properties And methods
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    printMe() {
        console.log(`Your username is :- ${this.username}
                         Your email is :- ${this.email}
                         Your password is :- ${this.password}   
                      `);
    }
}
const mustafa = new User("Mustafa", "ms@gmail.com", "123456");
// console.log(mustafa);
// mustafa.printMe();

//* Behind the Scene Of this User Class How its Work in javaScript.
function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
};
User1.prototype.printMe = function(){
    console.log(`Your username is :- ${this.username}
                         Your email is :- ${this.email}
                         Your password is :- ${this.password}   
                      `);
};

const Ali = new User1("Ali","Ali@gmail.com","123456");
const Riyaz = new User1("Riyaz","riyaz@gmail.com","123456");
// console.log(Ali);
// Ali.printMe();
// Riyaz.printMe();