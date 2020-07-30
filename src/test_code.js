
class User{
    constructor(id){
        this.userID = id;
    }

    getUser(){
        return 'First user is ' + this.userID;
    }
}

let user1 = new User(1);
user1.getUser();

