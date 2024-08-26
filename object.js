// const sym1 = Symbol("key1");
// const user = {
//     name: "Maheera",
//     age: 21,
//     [sym1]: "blue",
//     location: 'Gujrat', 
//     email: 'maheerasaqib@gmail.com',
//     isLoggedIn: false,
//     Lastday: ["Monday", "Saturday"]
// };

// // console.log(user);

// user.greeting = function(){
//     console.log("Hello");
// }
// user.greeting2 = function(){
//     console.log(`Hello, ${this.email}`);
// }

// console.log(user.greeting())
// console.log(user.greeting2())

const tinderUser = new Object()

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{ 
        firstname: "Mahi",
        lastname: ""
        }
    }
}
// console.log(regularuser.fullname?.userfullname.lastname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

const obj4 = {
    0: "a",
    2: "b"
}
const obj5 = {
    3: "c",
    4: "d"
}
const obj6 = {...obj4, ...obj5}


// console.log(Object.keys(obj1))
// console.log(Object.values(regularuser))

const course = {
    name: "English",
    price: "1000",
    instructor: "Maheera"
}

// course.instructor
// course.price
// course.name
const {price: pr} = course

console.log(pr)

// const navbar = ({company}) => {
    //ye jo concept ha ye react ha and it also shows destructuring. yahan ab bar bar props.company etc bar bar ni karain gy. we can simpl access compant outside without . operator.
// } 
// navbar (company = "NETSOL")


// {
//     "name": "Maheera", 
//     "age":"21",
//     "birthyear": "2003"
// }

[
    {},
    {},
    {}
]
