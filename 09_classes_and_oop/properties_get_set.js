function user(username, email){
    this._username = username
    this._email = email

    Object.defineProperty(this, 'email', {
            get: function(){
                return this._email.toUpperCase()
            },
            set: function(value){
                this._email = value
            }
    })

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
})
}

const chai = new user('chai','chai@chai.com')
console.log(chai.email);
