function calculatecartprice (...num1){
    return num1
}
// console.log(calculatecartprice(2, 4, 6));


const user = {
    username: "Mahi", 
    prices: 1000
}
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)

handleobject({
    username: "sam", 
    price: 2000
})
 const array = [200, 300, 400, 600]

 function secondval (getArray){
    return getArray[1]
 }

 console.log(secondval(array))


