function setUsername(username){
    this.username=username
}
function createUser (username, email, password){
    // setUsername(username) 
    //this above is not being called
    //idr reference gaya ha, actually call ni hua ha, ais ko explicitly call krna pry ga
    //means ye call ho rha ha toh sath hi execution contect mil gaya stack sy aur saray variable wagaira bi chalay gaye
    //toh hm ny actually ye refernece hold krwa ky rakhna ha.
    setUsername.call(this, username) //ye explicityly function call kr rha ha
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'maheer@exmaple.com', '123')
console.log(chai)