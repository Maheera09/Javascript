const user = {
    name: "Mahi", 
    price: 1000, 

    welcomemessage: function(){
        console.log(`${this.name} welcome to website`);
        console.log(this)
    }
}

// user.welcomemessage()
// user.name = "Maheera"
// user.welcomemessage()
// console.log(this)

function practice (){
    let username = "MAHI" 
    console.log(this.username) //this ky through username nai acces ho ga, undefined hoga
}
practice()

const chai = () =>{
    let name = "Mahi"
console.log(this)
}
chai()

const addtwo = (num1, num2) => {
    return num1+ num2
}
console.log(addtwo(3,5))