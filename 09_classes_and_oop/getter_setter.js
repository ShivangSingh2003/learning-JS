class User{
    constructor(username, email){
        this.username = username
        this.email = email
    }

    get username(){
        return this._username
    }
    set username(value){
        this._username = value
    }


    set email(val){
        this._email = val
    }
    get email(){
        return this._email
    }

}

 const userOne = new User('naman', 'naman@gmail.com')
 console.log(userOne.username);
 console.log(userOne.email);
 
