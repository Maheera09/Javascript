class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const mahi = new User ('mahi')
// console.log(mahi.createID())
//gives error because of static function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const t1 = new Teacher('Manahil', 'manahil@example.com')
t1.logMe()