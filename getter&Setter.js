class User{ 
    constructor(username, password){
        this.username = username
        this.password = password
    }

    get password(){
        return this.pass.toUpperCase()
    }
    //jb apnay getter define kia ha toh setter bi define krna ha. 
    //means if ek define kia ha toh sath dosra bi krna ha.
    set password(value){
        this.pass = value.toUpperCase()
    }
    //why do this jb yehi kam constructor mei kia ha.
    //yahan max call stack size exceeded ka error aa rha ha
    //means ky getter setter and constructor dono ky darmiyan ek race lag gai ha
    get username(){
        return this.usernames.toUpperCase()
    }
    set username(value){
        this.usernames=value
    }

}

const user1 = new User ('Maheera Saqib', 'Heartsdesire09')
const user2 = new User ('Manahil Saqib', 'Manahil002233')

console.log(user1.username);
console.log(user2.password);

//lets suppose ap password ka access dena hi nai chahtay. 

//DEFINING GETTER SETTER THROUGH PROPERTIES

function Users (email, password){
    this._email = email;
    this._password=password;

   Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase
    },
    set: function(value){
        this._email=value
    }
   })
}

const fuser1 = new Users ('Mahi@example.com', '12345678')
console.log(fuser1._password);

//ek object based syntax hota ha for getters and setters

 const USERS = {
    _email: 'taylorswift@gmail.com',
    _password: 'Evermore1989',
 
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
    //getter aur setter special method ha jo property ky uper lagta ha.
    //bascially, memory mei sy value la rhy hn aur dy rhy hn
    //memory mei value ko override krny ky liye javascript mei getter and setter use hotay hn.
    //ab yahan get ek special keyword ha jokay hmry property email py work kr rha ha 
 }

 const tea = Object.create(USERS)
 //toh yahan USERS Ky base py ek object create kia ha

console.log(tea.email); 
