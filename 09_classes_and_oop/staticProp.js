class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const shiv = new User("Shiv")

// console.log(shiv.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")
iphone.createId()
