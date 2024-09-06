class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user('Mahi', 'mahi@example.com', 'Taylorswift')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

//behind the scenes 

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
return `${this.password}abc`
}
User.prototype.changeUsername = function(){
return `${this.username.toUpperCase()}`
}

const user1 = new User('Maheera', 'Maheera@example.com', 'Reputation')

console.log(user1.encryptPassword())
console.log(user1.changeUsername())


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`Score is ${this.score}`)
}
const lame = new createUser('chai', 25)
const lame1 = createUser('tea', 250)

lame.printme() //gives error. Yahan ab properties ayi han but doesn't work because pehly new keyword use nai kia tha.
