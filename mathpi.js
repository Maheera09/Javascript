const descr = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descr)

// Object.defineProperty(Math, 'PI', {
//     writable: true
// })
//you can noy change the value of PI like this because its constant
x = Math.ceil(Math.PI)
console.log(x)
//this is one way to do it

const chai = {
    name: 'iced tea', 
    price: '700',
    isAvailable: true,

    orderChai: function(){
        console.log('No chai made')
    }
}
 console.log(Object.getOwnPropertyDescriptor(chai, "name"))

 Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
 })
 
 Object.defineProperty(chai, 'price', {
    writable: false,
    enumerable: false
 })

 console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`)
    }
}