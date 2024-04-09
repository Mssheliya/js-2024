class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    };
    get email() {
        return this._email.toUpperCase();
    };
    set email(value) {
        this._email = value;
    };
    get password() {
        return `${this._password.toUpperCase()}${Math.floor(Math.random() * 10000)}`
    };
    set password(value) {
        this._password = value;
    }
}

const user1 = new User("ms@sheliya.ai", "mustafa");
// console.log(user1.email);
// console.log(user1.password);
// console.log(Math.floor(Math.random()*10));

//--------------------------------------------------------------******---------------------------------------------------------------------
//old type to write getter & setter (Function base Getter&Setter)
function Users(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    });
    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
};

const ali = new Users("ali@sheliya.it", "AliM");
// console.log(ali.email);
// console.log(ali.password);

//-----------------------------------------------------------*******----------------------------------------------------------------------
// Older Type to write Gettres & Setters (Object based Getters 7 Setters)

const Obj1 = {
    _email: "m@ms.it",
    _password: "mustafa",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }
};
const app = Object.create(Obj1);
// console.log(app.email);
// console.log(app.password);
