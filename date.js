let mytimestamp = Date.now()
let mycreateddate = new Date ("01-14-2024")
console.log(mytimestamp)
console.log(mycreateddate)
console.log(mycreateddate.getTime()) //give times in millisecond
console.log(Math.floor(Date.now()/1000))
let newdate = new Date()
console.log(newdate.getMonth())