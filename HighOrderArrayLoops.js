 const arr=[1,2,3,4,5]

 for (const val of arr) {
    // console.log(val);
 }

 const map = new Map()
 map.set('USA', 'America')
 map.set('PK', 'Pakistan')
 map.set('UK', 'United Kingdom')

//  console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':', value)
}

const obj = {
    name: 'Mahi', 
    age: 21,
    gender: 'female'
}

for (const key in obj) {
    // console.log(obj[key]) // ais ky through values print ho jain gi object ki
}

  const code = ["js", "python", "java"]

 const values =  code.forEach( //foreach koi value return nai krta
    (item)=>{
        // console.log(item)
        return item
    }
  )
//   console.log(values)

const  num = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

// let newnum = num.filter(
//     (n)=>{
//         if (n>4){
//             return n
//         }
//     }
// ) 
// console.log(newnum)

const number = num.map(
    (n)=>{
        n = n+10
        return n
    }
)
// console.log(number)


const  num1 = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]
const a = num1
        .map((b)=> b*10)
        .map(
            (c)=>c*10
        )
        .filter((d)=>d>300)
      
// console.log(a)

const mynums = [1,2,3]
let init = 0 //ye bata ha initially acc ki value kia hogi
const total = mynums.reduce(
    (acc, cv)=> acc + cv, init
)
// console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const ship = shoppingCart.reduce(
    (acc, item)=>{
        return acc+item.price
    }, 0
)
console.log(ship)