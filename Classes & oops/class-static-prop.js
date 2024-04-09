class User{
    constructor(username){
        this.username = username
    };

    printMe(){
        console.log(`usrname is ${this.username}`);
    };

    // no one access this method becuase its static (static keyword are not allow to use this method to child classes also)
    static createdId(){
        console.log(`your unique id is 124587`);
    }

};
const user1 = new User("Mustafa");
user1.printMe(); //working
user1.createdId(); //Not Working Throw Err Becuase this method are static