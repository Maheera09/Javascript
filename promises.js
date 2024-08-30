const p1 = new Promise((resolve, reject)=>{
    //do async task such as DB calls, cryptography, network calls etc

    setTimeout(()=>{
        console.log('Async complete')
        resolve()
    }, 1000)
})

//promise ab banaya ha aur ab ais ko consume bi krna ha

p1.then(()=>{
    console.log('promise consumed')
})

//Asynch toh kr lia magar promise toh pura hi ni kia
// cuz then aur resolve ko apas mei connect hi ni kia
//ais liye resolve() run kia ha

new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Async 2 resolved')
})

//reslove ky through hi hn values pass karain 
//gy jb hm promsie ko consume kerain gy
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
resolve({username: 'chai', email:"chao@example.com"})
    }, 1000)
})

p3.then((user)=>{
console.log(user)
})


const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'Mahi'})
        }
        else {
            reject('Error: Something went wrong')
        }
        
    }, 1000)
})

// const data = p4.then((user)=>{ 
// console.log(user)
// return user.username
// })
//results in error. variable mei ais tarah data ni
// nikal skty thats why we do chaining

const data = p4.then((user)=>{ 
    console.log(user)
    return user.username
    }).then((username)=>{
    console.log(username)
    }).catch((error)=>{
console.log(error)
    }).finally(()=>{
        console.log('Finally')
    })

const p5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'Hassaan'})
        }
        else {
            reject('Error: Hassaan went wrong')
        }
        
    }, 1000)  
})

async function consumep5() {
    try {
        const response = await p5;
    console.log(response)
}
    catch {
        console.log('Error')
    }
}

consumep5()

// async function getUsers() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     //aisko json mei convert krny mei time lagta ha ais liye pehly jb await nai lagaya tha toh data show ni hua tha
//    // but jb await lagaya toh values aa gai
//     console.log(data) 
// }
// catch(error) {
//     console.log("E: ", error )
// }
// }
//getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log('Error in fetch')
})