class User { 
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const teacher1 = new Teacher ('Maheera', 'maheera@example.com', '123')
console.log(teacher1)
// teacher1.addCourse()

const user = new User('Mahi')
user.logme()
teacher1.logme()
// user.addCourse()
//parent class doesn't have access to the child class fucntions and variables

console.log(teacher1 instanceof User) //true
console.log(user instanceof Teacher); //false
